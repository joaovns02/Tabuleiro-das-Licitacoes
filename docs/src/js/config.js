
export const totalCasas = 117;
 export const casasDePergunta = [2, 5, 12, 18, 22, 25, 30, 34 ,78, 102, 105, 41,46,50,58,65,72,85,96,112];
 export const casasDeEvento = [8,15,28,33,48,55,60,75,80,90,93,98,109];
 export let jogadores = [];
export let jogadorAtual = 0;

// Exportando funções de acesso
export function getJogadores() {
  return jogadores;
}

export function setJogadores(novosJogadores) {
  jogadores = novosJogadores;
}

export function getJogadorAtual() {
  return jogadorAtual;
}

export function setJogadorAtual(novoValor) {
  jogadorAtual = novoValor;
}
export function getCasasDePergunta() {
  return casasDePergunta;
}
export function getCasasDeEvento() {
  return casasDeEvento;
}