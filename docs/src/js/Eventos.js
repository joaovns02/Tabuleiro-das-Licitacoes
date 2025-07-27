import { getJogadores, getJogadorAtual} from './config.js';
let jogadores;
let jogadorAtual;
// Eventos Positivos 
const eventosImpar = [
    {
        texto: "Sua proposta foi a melhor classificada! Avance 2 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao += 2;
        }
    },
    {
        texto: "Você apresentou toda a documentação corretamente e no prazo. Receba um bônus e jogue novamente",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadorAtual =-1;
        }
    },
    {
        texto: "Você antecipou as exigências do edital e se preparou bem. Avance 5 Casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao += 5;
        }
    },
    {
        texto: "Você participou de um curso sobre licitação e ficou expert no assunto. Avance 7 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao += 7;
        }
    },
    {
        texto: "Você venceu a licitação e assinou o contrato com sucesso! Avance 2 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao += 2;
        }
    },
    {
        texto: "O órgão público elogiou sua organização na sessão pública. Jogue novamente!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadorAtual =-1;
        }
    },
];
// Eventos Negativos
const eventosPar = [
    {
        texto: "Seu recurso foi indeferido pelo órgão público. Você retrocedeu 3 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 3;
        }
    },
    {
        texto: "Você apresentou certidão vencida. Fique sem Jogar na Proxima Rodada!",
        acao: function(jogador) {
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].pularRodada = true;
        }
    },
    {
        texto: "Esqueceu de incluir um documento obrigatório no envelope. Volte 5 Casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 5;
        }
    },
    {
        texto: "Erro no valor total da planilha de custos. Volte 10 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 10;
        }
    },
    {
        texto: "Sua proposta foi desclassificada por erro de preenchimento. Volte 3 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 3;
        }
    },
    {
        texto: "Proposta enviada fora do horário permitido. Volte 1 Casa!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 1;
        }
    },
    {
        texto: "Edital tinha cláusula específica que você não atendeu. Fique sem Jogar na  Próxima Rodada!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].pularRodada = true;
        }
    },
    {
        texto: "Sua proposta foi considerada inexequível. Volte 2 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 2;
        }
    },
    {
        texto: "Você perdeu o prazo de entrega dos documentos. Volte 5 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 5;
        }
    },
    {
        texto: "Você deixou de responder uma diligência dentro do prazo. Volte 4 casas!",
        acao: function(){
            jogadores=getJogadores();
            jogadorAtual = getJogadorAtual();
            jogadores[jogadorAtual].posicao -= 4;
        }
    }
];
export function getEventosImpar() {
    return eventosImpar;
}
export function getEventosPar() {
    return eventosPar;
}