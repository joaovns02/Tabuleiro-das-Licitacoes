//variáveis Globais
const totalCasas = 117;
const casasDePergunta = [2, 5, 12, 18, 22, 25, 30, 34 ,78, 102, 105, 41,46,50,58,65,72,85,96,112];
const casasDeEvento = [8,15,28,33,48,55,60,75,80,90,93,98,109];
let jogadores = [];
let jogadorAtual = 0;
let vDado = null;


// Perguntas
const perguntas = [
    {
        texto: "Qual é a capital do Brasil?",
        alternativas: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        correta: 1 // Índice da resposta correta
    },
    {
        texto: "Quanto é 5 + 3?",
        alternativas: ["6", "7", "8", "9"],
        correta: 2
    },
    {
        texto: "Quem escreveu 'Dom Casmurro'?",
        alternativas: ["Machado de Assis", "José de Alencar", "Carlos Drummond", "Graciliano Ramos"],
        correta: 0
    },
    {
        texto: "Qual é o maior planeta do sistema solar?",
        alternativas: ["Terra", "Marte", "Júpiter", "Saturno"],
        correta: 2
    }
];
// eventos
// Eventos Positivos
const eventosImpar = [
    {
        texto: "Sua proposta foi a melhor classificada! Avance 2 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao += 2;
        }
    },
    {
        texto: "Você apresentou toda a documentação corretamente e no prazo. Receba um bônus e jogue novamente",
        acao: function(){
            jogadorAtual =-1;
        }
    },
    {
        texto: "Você antecipou as exigências do edital e se preparou bem. Avance 5 Casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao += 5;
        }
    },
    {
        texto: "Você participou de um curso sobre licitação e ficou expert no assunto. Avance 7 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao += 7;
        }
    },
    {
        texto: "Você venceu a licitação e assinou o contrato com sucesso! Avance 2 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao += 2;
        }
    },
    {
        texto: "O órgão público elogiou sua organização na sessão pública. Jogue novamente!",
        acao: function(){
            ogadorAtual =-1;
        }
    },
];
// Eventos Negativos
const eventosPar = [
    {
        texto: "Seu recurso foi indeferido pelo órgão público. Você retrocedeu 3 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 3;
        }
    },
    {
        texto: "Você apresentou certidão vencida. Fique sem Jogar na Proxima Rodada!",
        acao: function(jogador) {
            jogadores[jogadorAtual].pularRodada = true;
        }
    },
    {
        texto: "Esqueceu de incluir um documento obrigatório no envelope. Volte 5 Casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 5;
        }
    },
    {
        texto: "Erro no valor total da planilha de custos. Volte 10 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 10;
        }
    },
    {
        texto: "Sua proposta foi desclassificada por erro de preenchimento. Volte 3 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 3;
        }
    },
    {
        texto: "Proposta enviada fora do horário permitido. Volte 1 Casa!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 1;
        }
    },
    {
        texto: "Edital tinha cláusula específica que você não atendeu. Fique sem Jogar na  Próxima Rodada!",
        acao: function(){
            jogadores[jogadorAtual].pularRodada = true;
        }
    },
    {
        texto: "Sua proposta foi considerada inexequível. Volte 2 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 2;
        }
    },
    {
        texto: "Você perdeu o prazo de entrega dos documentos. Volte 5 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 5;
        }
    },
    {
        texto: "Você deixou de responder uma diligência dentro do prazo. Volte 4 casas!",
        acao: function(){
            jogadores[jogadorAtual].posicao -= 4;
        }
    }
];

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
// Estilização de casas de Evento
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






//iniciando o jogo
document.getElementById("iniciarJogo").addEventListener("click",function(){

//obtem o n de jogadores
    const numJogadores = parseInt(document.getElementById("numJogadores").value);

//define as cores dos jogadores com base no número escolhido

const cores = ["red","blue","green","yellow"];
jogadores = [];
for (let i =0; i<numJogadores; i++){
    jogadores.push({ nome: `Jogador ${i + 1}`, cor: cores[i], posicao: 0,pularRodada: false });
    const jogadorElemento = document.getElementById(`jogador${i+1}`);
    jogadorElemento.style.display = "block"; //Torna os elementos jogadores visiveis comforme o n de jogadores
};
atualizarJogadores()
document.getElementById("telaInicial").style.display = "none"; // Esconde a tela de espera
});


//Move O jogador
function moverJogador(qtd) {
    jogadores[jogadorAtual].posicao += qtd;

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
// Verifica as respostas

function verificarResposta(escolhida, correta) {
    if (escolhida === correta) {
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


//verifica se o jogador venceu
function verificarVitoria() {
    if (jogadores[jogadorAtual].posicao >= totalCasas) {
        jogadores[jogadorAtual].posicao = totalCasas;
        alert(`${jogadores[jogadorAtual].nome} venceu!`);
        return;
    }
}
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