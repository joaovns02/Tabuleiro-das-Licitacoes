//variáveis globais
import {totalCasas, casasDePergunta, casasDeEvento} from './config.js';


export function criarCasas() {
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
    // Criar uma div para contabilzar os pontos dos jogadores
    const pontosContainer = document.createElement("div");
    pontosContainer.id = "pontosContainer";
    pontosContainer.classList.add("pontosContainer");
    tabuleiro.appendChild(pontosContainer);
};
// #region estilização automática das casas de perguntas

export function estilizarCasasPergunta(){
casasDePergunta.forEach(function(item){
    document.getElementById("casa"+(item+1)).classList.add("casaPergunta");
   });
}
// #endregion
// #region estilização automática das casas de eventos
export function estilizarCasasEvento(){
    //  #region Estilização de casas de Evento

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
}
// #endregion	