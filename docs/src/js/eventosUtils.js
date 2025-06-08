import { atualizarJogadores, proximoJogador } from './jogadores.js';
export function ExibirEvento(evento) {
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