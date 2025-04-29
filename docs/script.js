//variáveis Globais
const totalCasas = 117;
const casasDePergunta = [2, 5, 12, 18, 22, 25, 30, 34 ,78, 102, 105, 41,46,50,58,65,72,85,96,112];
const casasDeEvento = [8,15,28,33,48,55,60,75,80,90,93,98,109];
let jogadores = [];
let jogadorAtual = 0;
let vDado = null;
// #region Inicialização do Jogo
//criando as casas do tabuleiro
criarCasas();
 // #region função para criar as casas	
function criarCasas() {
    const tabuleiro = document.getElementById("tabuleiro");

    for (let i = 1; i <= totalCasas; i++) {
        const casa = document.createElement("div");
        if(i==1){
            casa.classList.add("casa","casaInicio");
            casa.innerText = "Inicio";
        }else if(i==totalCasas){
            casa.classList.add("casa","casaFim");
            casa.innerText = "Fim";
        }else{
            casa.innerText = i-1; // Exibe o número da casa
            casa.classList.add("casa");
        }
        
        casa.id = `casa${i}`;
        tabuleiro.appendChild(casa);
    };
};
// #endregion
// #region estilização automática das casas de perguntas
casasDePergunta.forEach(function(item){
    document.getElementById("casa"+(item+1)).classList.add("casaPergunta");
   });
// #endregion
//  #region Estilização de casas de Evento

let indicePar = 0;
let indiceImpar = 0;
casasDeEvento.forEach(function(item){
    let idCasa = document.getElementById("casa"+(item+1));
    if((item)%2==0){
    idCasa.classList.add("casaEventoPar");
    indicePar++;
    }
    else{
    idCasa.classList.add("casaEventoImpar");
    indiceImpar++;
    }
   });
// #endregion	
function mostrarConfete() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
  
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
  
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
//iniciando o jogo
document.getElementById("iniciarJogo").addEventListener("click",function(){

//obtem o n de jogadores
    const numJogadores = parseInt(document.getElementById("numJogadores").value);

//define as cores dos jogadores com base no número escolhido

const cores = ["red","blue","green","yellow"];
jogadores = [];
for (let i =0; i<numJogadores; i++){
    jogadores.push({ nome: `Jogador ${i + 1}`, cor: cores[i], posicao: 0,pularRodada: false,qRespondidas: 0,qAcertadas: 0,pontuacao: 1000});
    const jogadorElemento = document.getElementById(`jogador${i+1}`);
    jogadorElemento.style.display = "block"; //Torna os elementos jogadores visiveis comforme o n de jogadores
};
atualizarJogadores()
document.getElementById("telaInicial").style.display = "none"; // Esconde a tela de espera
});
// #endregion
//Move O jogador
function moverJogador(qtd) {
    let novaPosicao = jogadores[jogadorAtual].posicao + qtd;
    if (novaPosicao >= totalCasas - 1) {
        jogadores[jogadorAtual].posicao = totalCasas - 1;
    } else {
        jogadores[jogadorAtual].posicao = novaPosicao;
    }
}

// Atualiza a posição do jogador
function atualizarJogadores() {
    jogadores.forEach((jogador, index) => {
        const peca = document.getElementById(`jogador${index + 1}`);
        const casa = document.getElementById(`casa${jogador.posicao+1}`);
        peca.style.top = (casa.offsetTop +25)+ "px";
        peca.style.left = (casa.offsetLeft +25)+ "px";
    });
}

//Muda para o Próximo Jogador
function proximoJogador() {
    jogadorAtual = (jogadorAtual + 1) % jogadores.length;
    if (jogadores[jogadorAtual].pularRodada) {
        jogadores[jogadorAtual].pularRodada = false; // Reseta o pular rodada
        proximoJogador(); // Pula para o próximo jogador
    }
    document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
};
// #region Perguntas
//exibe a pergunta
function exibirPergunta() {
    const indiceAleatorio = Math.floor(Math.random()* perguntas.length);
    const pergunta = perguntas[indiceAleatorio];

    document.getElementById("perguntaTexto").innerHTML = pergunta.texto;

    const opcoesResposta = document.getElementById("opcoesResposta");
    opcoesResposta. innerHTML = ""; //limpar as opcoes anteriores
    pergunta.alternativas.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.className = "bt";
        botao.innerHTML = opcao;
        botao.onclick = () => verificarResposta(index, pergunta.correta);
        opcoesResposta.appendChild(botao);
    });

    document.getElementById("modalPergunta").style.display = "block";//Torna o Modal Visivel 
};
// Verifica as respostas
function verificarResposta(escolhida, correta) {
    jogadores[jogadorAtual].qRespondidas++;//Incrementa o número de perguntas respondidas

    if (escolhida === correta) {
        jogadores[jogadorAtual].qAcertadas++;
        alert("Resposta correta! Você continua.");
        document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
    } else {

        alert("Resposta errada! Você volta uma casa.");
        jogadores[jogadorAtual].posicao = Math.max(0, jogadores[jogadorAtual].posicao - 1);
        atualizarJogadores();
        document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
    };

    document.getElementById("modalPergunta").style.display = "none";

    // Alterna para o próximo jogador
    proximoJogador();
};
// #endregion Perguntas
//Exibe o Modal de Evento
function ExibirEvento(evento) {
setTimeout(() => {
    document.getElementById("modalEvento").style.display = "block"; //Torna o Modal Visivel
    document.getElementById("eventoTexto").innerHTML= evento.texto;
}, 500);
document.getElementById("fecharEvento").onclick = function() {
    modalEvento.style.display = "none";
    evento.acao();
    atualizarJogadores(); // Atualiza a posição do jogador
    proximoJogador(); // Alterna para o próximo jogador
};
}
//Fecha o Modal de Evento
//verifica se o jogador venceu
function verificarVitoria() {
    const ultimaCasa= totalCasas-1;
    if (jogadores[jogadorAtual].posicao >= ultimaCasa) {
        jogadores[jogadorAtual].posicao = ultimaCasa;
        document.getElementById("vitoriaMensagem").innerText = `${jogadores[jogadorAtual].nome} venceu o jogo!`;
        document.getElementById("modalVitoria").style.display = "block";
        document.getElementById("rolarDado").disabled = true;
        mostrarConfete();
        return;
    }
}
//Reinicia O Jogo
document.getElementById("reiniciarJogo").addEventListener("click", function() {
    location.reload(); // Recarrega a página
});
// Rola o dado e move o jogador
document.getElementById("rolarDado").addEventListener("click", function() {
    let dado = Math.floor(Math.random() * 6) + 1;  
    document.getElementById("resultadoDado").innerText = `${jogadores[jogadorAtual].nome} rolou: ${dado}`;
    const modalDado = document.getElementById("modalDado");
    const modalDadoContainer = document.getElementById("modalDadoContainer");
    modalDado.style.display = "block"; //Torna o Modal Visivel
    //criando objeto video
    vDado = document.createElement("video");
    vDado.width = 200;
    vDado.className = "vdado";
    vDado.src = "src/img/dados/Dado"+dado+".mp4";
    vDado.autoplay = true;
    vDado.controls = false;
    modalDadoContainer.insertBefore(vDado, modalDadoContainer.firstChild);
    //Desabilitando o botão de rolar o dado
    document.getElementById("rolarDado").disabled = true;
    //mov o Jogador Atual
    moverJogador(dado);
});

// fecha o modal Dado

document.getElementById("fecharModalDado").addEventListener("click", function() {
    modalDado.style.display = "none";
    if (vDado) vDado.remove();
    //atualiza a posição do jogador
    atualizarJogadores();
     // Verifica se o jogador venceu
     verificarVitoria();
     // Verifica se parou em uma casa de pergunta
    if (casasDePergunta.includes(jogadores[jogadorAtual].posicao)) {
        exibirPergunta();
    } 
    else if (casasDeEvento.includes(jogadores[jogadorAtual].posicao) )  {
        let impares = casasDeEvento.filter(num=>(num % 2 !== 0));
        let pares = casasDeEvento.filter(num=>(num % 2 === 0));

        if(jogadores[jogadorAtual].posicao % 2 === 0) {
            // Evento Par         
            let casa = pares.indexOf(jogadores[jogadorAtual].posicao);
            const evento = eventosPar[casa];
            ExibirEvento(evento)
        }
        else {
            // Evento Ímpar
            let casa = impares.indexOf(jogadores[jogadorAtual].posicao);
            const evento = eventosImpar[casa];
            ExibirEvento(evento)
        }
    }else{
        // Alterna para o próximo jogador
        proximoJogador();
    }
});