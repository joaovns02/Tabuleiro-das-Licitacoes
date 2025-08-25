import { getPerguntas } from './Perguntas.js';
import { verificarResposta } from './turno.js';
const perguntas = getPerguntas();
//exibe a pergunta
export function exibirPergunta() {
    const indiceAleatorio = Math.floor(Math.random()* perguntas.length);
    const pergunta = perguntas[indiceAleatorio];

    document.getElementById("perguntaTexto").innerHTML = pergunta.texto;

    const opcoesResposta = document.getElementById("opcoesResposta");
    opcoesResposta. innerHTML = ""; //limpar as opcoes anteriores
    pergunta.alternativas.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.className = "bt";
        botao.innerHTML = opcao;
        botao.onclick = () => verificarResposta(index, pergunta.correta,pergunta.dificuldade);
        opcoesResposta.appendChild(botao);
    });

    document.getElementById("modalPergunta").style.display = "block";//Torna o Modal Visivel 
};