//variáveis Globais
const totalCasas = 117;
const casasDePergunta = [2, 5, 8, 12, 15, 18, 22, 25, 30, 34];
let jogadores = [];
let jogadorAtual = 0;
let vDado = null;

//criando as casas do tabuleiro
 //funcção para criar as casas	
function criarCasas() {
    const tabuleiro = document.getElementById("tabuleiro");

    for (let i = 1; i <= totalCasas; i++) {
        const casa = document.createElement("div");
        casa.classList.add("casa");
        casa.id = `casa${i}`;
        casa.innerText = i; // Exibe o número da casa (opcional)
        tabuleiro.appendChild(casa);
    };
};

//iniciando o jogo
document.getElementById("iniciarJogo").addEventListener("click",function(){
    criarCasas();
//obtem o n de jogadores
    const numJogadores = parseInt(document.getElementById("numJogadores").value);

//define as cores dos jogadores com base no número escolhido

const cores = ["red","blue","green","yellow"];
jogadores = [];

for (let i =0; i<numJogadores; i++){
    jogadores.push({ nome: `Jogador ${i + 1}`, cor: cores[i], posicao: 0 });
    const jogadorElemento = document.getElementById(`jogador${i+1}`);
    jogadorElemento.style.display = "block"; //Torna os elementos jogadores visiveis comforme o n de jogadores
};
atualizarJogadores()
document.getElementById("telaInicial").style.display = "none"; // Esconde a tela de espera
});

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
//estilização automática das casas de perguntas
casasDePergunta.forEach(function(item){
 document.getElementById("casa"+(item+1)).style.backgroundColor="yellow";
});

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
    document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
};


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
    jogadores[jogadorAtual].posicao += dado;

    // Verifica se o jogador venceu
    if (jogadores[jogadorAtual].posicao >= totalCasas) {
        jogadores[jogadorAtual].posicao = totalCasas;
        alert(`${jogadores[jogadorAtual].nome} venceu!`);
        return;
    }

    atualizarJogadores();

});

// fecha o modal

document.getElementById("fecharModalDado").addEventListener("click", function() {
    modalDado.style.display = "none";
    if (vDado) vDado.remove();

     // Verifica se parou em uma casa de pergunta

if (casasDePergunta.includes(jogadores[jogadorAtual].posicao)) {
    exibirPergunta();
} else {
    // Alterna para o próximo jogador
    proximoJogador();
}
});