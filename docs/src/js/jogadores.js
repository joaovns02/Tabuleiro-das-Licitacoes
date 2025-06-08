import { getJogadores, getJogadorAtual, setJogadorAtual,setJogadores,totalCasas} from './config.js';
export function inicializarJogadores(){
    //obtem o n de jogadores
        const numJogadores = parseInt(document.getElementById("numJogadores").value);
    //define as cores dos jogadores com base no número escolhido
    
    const cores = ["red","blue","green","yellow"];
    const novosJogadores = [];
    for (let i =0; i<numJogadores; i++){
        novosJogadores.push({ nome: `Jogador ${i + 1}`,
            cor: cores[i],
            posicao: 0,
            pularRodada: false,
            qRespondidas: 0,
            qAcertadas: 0,
            pontuacao: 1000});
        const jogadorElemento = document.getElementById(`jogador${i+1}`);
        jogadorElemento.style.display = "block"; //Torna os elementos jogadores visiveis comforme o n de jogadores
    };
    setJogadores(novosJogadores);
   setJogadorAtual(0);
}
// Atualiza a posição do jogador
export function atualizarJogadores() {
    const jogadores = getJogadores();
    jogadores.forEach((jogador, index) => {
        const peca = document.getElementById(`jogador${index + 1}`);
        const casa = document.getElementById(`casa${jogador.posicao+1}`);
        peca.style.top = (casa.offsetTop +25)+ "px";
        peca.style.left = (casa.offsetLeft +25)+ "px";
    });
}
//troca o jogador atual
export function proximoJogador() {
    const jogadores = getJogadores();
    let jogadorAtual = getJogadorAtual();
    jogadorAtual = (jogadorAtual + 1) % jogadores.length;
    if (jogadores[jogadorAtual].pularRodada) {
        jogadores[jogadorAtual].pularRodada = false; // Reseta o pular rodada
        setJogadorAtual(jogadorAtual); // Atualiza o jogador atual
        proximoJogador(); // Pula para o próximo jogador
    }
    setJogadorAtual(jogadorAtual);
    document.getElementById("rolarDado").disabled = false; //Habilita o Botão de Rolar Dados
};

//move o jogador atual
export function moverJogador(qtd) {
    let jogadorAtual = getJogadorAtual();
    let jogadores = getJogadores(); 
    let novaPosicao = jogadores[jogadorAtual].posicao + qtd;
    if (novaPosicao >= totalCasas - 1) {
        jogadores[jogadorAtual].posicao = totalCasas - 1;
    } else {
        jogadores[jogadorAtual].posicao = novaPosicao;
    }
}

