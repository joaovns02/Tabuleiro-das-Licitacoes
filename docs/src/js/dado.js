import { getJogadores, getJogadorAtual,} from './config.js';
import { moverJogador,atualizarJogadores } from './jogadores.js';
import { verificarVitoria,verificarCasaAtual,} from './turno.js';
// Rola o dado e move o jogador
let vDado = null; // Variável global para o vídeo do dado
export function rolarDado() {
     // Limpa o vídeo do dado anterior, se houver
    let dado = Math.floor(Math.random() * 6) + 1;
    let jogadorAtual = getJogadorAtual();
    let jogadores = getJogadores(); 
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
    moverJogador(102);
};
export function fecharModalDado() {
    modalDado.style.display = "none";
    if (vDado) vDado.remove();
    //atualiza a posição do jogador
    atualizarJogadores();
     // Verifica se o jogador venceu
     verificarVitoria();
     //verifica se o jogador atual está em uma casa de pergunta ou evento
    verificarCasaAtual();
}