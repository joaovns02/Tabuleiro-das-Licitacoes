posicaoJogador = 0;
const totalCasas = 36;
// Perguntas
const perguntas = {
    1: {
        texto: "Qual é a capital do Brasil?",
        alternativas: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        correta: 1 // Índice da resposta correta
    },
    3: {
        texto: "Quanto é 5 + 3?",
        alternativas: ["6", "7", "8", "9"],
        correta: 2
    },
    5: {
        texto: "Quem escreveu 'Dom Casmurro'?",
        alternativas: ["Machado de Assis", "José de Alencar", "Carlos Drummond", "Graciliano Ramos"],
        correta: 0
    },
    7: {
        texto: "Qual é o maior planeta do sistema solar?",
        alternativas: ["Terra", "Marte", "Júpiter", "Saturno"],
        correta: 2
    }
};

// Atualiza a posição do jogador
function atualizarJogador() {
    const casa = document.getElementById(`casa${posicaoJogador}`);
    const jogador = document.getElementById("jogador");
    jogador.style.top = casa.offsetTop +25+"px";
    jogador.style.left = casa.offsetLeft +25+ "px";
}
// Rola o dado e move o jogador
document.getElementById("rolarDado").addEventListener("click", function() {
    let dado = Math.floor(Math.random() * 6) + 1;  
    document.getElementById("resultadoDado").innerText = "Você rolou: " + dado;

    posicaoJogador += dado;
    if (posicaoJogador >= totalCasas) {
        alert("Você venceu!");
        posicaoJogador = totalCasas;
    }

    atualizarJogador();

    // Verifica se parou em uma casa de pergunta
    if (perguntas[posicaoJogador]) {
        exibirPergunta(posicaoJogador);
    }
});

function exibirPergunta(casa) {
    const pergunta = perguntas[casa];
    document.getElementById("perguntaTexto").innerText = pergunta.texto;
    
    const opcoesResposta = document.getElementById("opcoesResposta");
    opcoesResposta.innerHTML = ""; // Limpa as opções anteriores

    pergunta.alternativas.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.onclick = () => verificarResposta(index, pergunta.correta);
        opcoesResposta.appendChild(botao);
    });

    document.getElementById("modalPergunta").style.display = "block";
}

function verificarResposta(escolhida, correta) {
    if (escolhida === correta) {
        alert("Resposta correta! Você continua.");
    } else {
        alert("Resposta errada! Você volta uma casa.");
        posicaoJogador = Math.max(0, posicaoJogador - 1);
        atualizarJogador();
    }

    document.getElementById("modalPergunta").style.display = "none";
}
// Inicializa o jogador na posição inicial
atualizarJogador();