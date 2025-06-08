import {criarCasas, estilizarCasasPergunta,estilizarCasasEvento} from './tabuleiro.js';
import { inicializarJogadores,atualizarJogadores} from './jogadores.js';
import { fecharModalDado, rolarDado } from './dado.js';
let vDado = null;
//criando as casas do tabuleiro
criarCasas();
estilizarCasasPergunta();
estilizarCasasEvento();
// #region iniciando o jogo
document.getElementById("iniciarJogo").addEventListener("click",function(){

inicializarJogadores(); // Inicializa os jogadores
atualizarJogadores()
document.getElementById("telaInicial").style.display = "none"; // Esconde a tela de espera
});
//Eventos
//Reinicia O Jogo
document.getElementById("reiniciarJogo").addEventListener("click", function() {
    location.reload(); // Recarrega a página
});
//Rola o dado
document.getElementById("rolarDado").addEventListener("click", rolarDado);
// fecha o modal Dado
document.getElementById("fecharModalDado").addEventListener("click",fecharModalDado);