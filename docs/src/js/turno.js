import { getJogadores, getJogadorAtual, totalCasas,getCasasDeEvento,getCasasDePergunta } from './config.js';
import { getEventosImpar, getEventosPar } from './eventos.js';
import { exibirPergunta } from './perguntasUtils.js';
import { ExibirEvento } from './eventosUtils.js';
import { proximoJogador, atualizarJogadores } from './jogadores.js';
import { mostrarConfete } from './confete.js';	
//verifica se caiu em uma casa de pergunta ou evento
export function verificarCasaAtual() {
    let jogadorAtual = getJogadorAtual();
    let jogadores = getJogadores();
    let eventosPar = getEventosPar();
    let eventosImpar = getEventosImpar();  
    let casasDeEvento = getCasasDeEvento();
    let casasDePergunta = getCasasDePergunta();
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
    };
};
// Verifica as respostas
export function verificarResposta(escolhida, correta, dificuldade) {
    let jogadores = getJogadores();
    let jogadorAtual = getJogadorAtual();
    jogadores[jogadorAtual].qRespondidas++;//Incrementa o número de perguntas respondidas
    if (escolhida === correta) {
        jogadores[jogadorAtual].qAcertadas++;
        alert("Resposta correta! Você continua.");
        document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
        //sistema de pontuação acertou pergunta  facil (1) 100 pontos, medio (2) 200 pontos, dificio (3) 300 pontos , errou perguntas  -50 pontos 
        if(dificuldade==1){
            jogadores[jogadorAtual].pontuacao += 100;
        } else if(dificuldade==2){
            jogadores[jogadorAtual].pontuacao += 200;
        } else if(dificuldade===3){
            jogadores[jogadorAtual].pontuacao += 300;
        }
    } else {

        alert("Resposta errada! Você volta uma casa.");
        jogadores[jogadorAtual].posicao = Math.max(0, jogadores[jogadorAtual].posicao - 1);
        atualizarJogadores();
        document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
        jogadores[jogadorAtual].pontuacao += -50;
    };

    document.getElementById("modalPergunta").style.display = "none";

    // Alterna para o próximo jogador
    proximoJogador();
};

export function verificarVitoria() {
    let jogadorAtual = getJogadorAtual();
    let jogadores = getJogadores(); 
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