//  Perguntas
 const perguntas = [
    // #region Questões  Fáceis

    {
        texto: "Qual é o objetivo principal da licitação, segundo a Lei nº 14.133/2021?",
        alternativas: ["Reduzir a burocracia", "Promover a economia local", "Aumentar a arrecadação", "Selecionar a proposta mais vantajosa para a Administração"],//Alternativas de resposta
        correta: 3, // Índice da resposta correta
        dificuldade: 1// 1 para fácil, 2 para médio, 3 para difícil
    },
    {
        texto: "Princípio que garante igualdade de condições aos participantes de uma licitação:",
        alternativas: ["Legalidade", "Moralidade", "Eficiência", "Isonomia"],
        correta: 3,
        dificuldade: 1
    },
    {
        texto: "Qual é a modalidade mais utilizada para aquisição de bens e serviços comuns?",
        alternativas: ["Concorrência", "Concurso", "Pregão", "Leilão"],
        correta: 2,
        dificuldade: 1
    },
    {
        texto: "Modalidade utilizada para venda de bens inservíveis ou produtos apreendidos:",
        alternativas: ["Pregão", "Concorrência", "Concurso", "Leilão"],
        correta: 3,
        dificuldade: 1
    },
    {
        texto: "Um dos princípios da Nova Lei de Licitações é:",
        alternativas: ["Sigilo", "Exclusividade", "Imparcialidade", "Publicidade"],
        correta: 3,
        dificuldade: 1
    },
    {
        texto: "Quem pode ser designado como agente de contratação?",
        alternativas: ["Qualquer servidor", "Estagiário", "Servidor efetivo", "Comissionado sem vínculo"],
        correta: 2,
        dificuldade: 1
    },
    {
        texto: "O Sistema de Registro de Preços é regulamentado por:",
        alternativas: ["Lei nº 8.666/93", "Decreto nº 7.892/2013", "Lei nº 13.303/2016", "Decreto nº 9.507/2018"],
        correta: 1,
        dificuldade: 1
    },
    {
        texto: "A Nova Lei de Licitações se aplica a quais entidades?",
        alternativas: ["Somente à União", "Apenas autarquias", "Administração direta, autárquica e fundacional", "Somente empresas públicas"],
        correta: 2,
        dificuldade: 1
    },
    {
        texto: "A figura do agente de contratação foi:",
        alternativas: ["Mantida da Lei 8.666", "Excluída da nova lei", "Inserida como novidade", "Substituída por comissão permanente"],
        correta: 2,
        dificuldade: 1
    },
    {
        texto: "A fase preparatória da licitação tem como foco principal:",
        alternativas: ["A habilitação", "O julgamento", "A impugnação", "Objetivos e planejamento"],
        correta: 3,
        dificuldade: 1
    },
    {
        texto: "A inexigibilidade de licitação ocorre quando:",
        alternativas: ["Há vários fornecedores", "O contrato é internacional", "Não há competição viável", "O valor é muito alto"],
        correta: 2,
        dificuldade: 1
    },
    {
        texto: "Princípio que garante que atos da administração sejam de conhecimento público:",
        alternativas: ["Isonomia", "Eficiência", "Publicidade", "Razoabilidade"],
        correta: 2,
        dificuldade: 1
    },
    {
        texto: "A Lei Complementar nº 123/2006 trata de:",
        alternativas: ["Serviços terceirizados", "Orçamento público", "Regime diferenciado para MPEs", "Fiscalização de obras"],
        correta: 2,
        dificuldade: 1
    },
    // #endregion
    // #region Questões  Médias
    {
        texto: "Qual o prazo mínimo para apresentação das propostas em uma licitação na modalidade concorrência?",
        alternativas: ["5 dias úteis", "8 dias úteis", "15 dias úteis", "20 dias úteis"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "A inversão das fases da licitação, conforme a nova lei, significa:",
        alternativas: ["Julgamento após habilitação", "Habilitação após julgamento", "Adjudicação antes da homologação", "Divisão da licitação em etapas"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "Quando a licitação for deserta, a Administração poderá contratar diretamente se:",
        alternativas: ["Houver justificativa", "Estiver prevista no contrato", "A obra for emergencial", "For para tecnologia da informação"],
        correta: 0,
        dificuldade: 2
    },
    {
        texto: "Na nova lei, o projeto básico é:",
        alternativas: ["Elaborado após a licitação", "Requisito opcional", "Parte da fase interna", "Substituído pelo termo de referência"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "A disputa em pregão ocorre em qual fase?",
        alternativas: ["Planejamento", "Habilitação", "Julgamento", "Lances"],
        correta: 3,
        dificuldade: 2
    },
    {
        texto: "As contratações integradas são admitidas para obras e serviços de:",
        alternativas: ["Pequeno porte", "Baixo risco", "Tecnologia simples", "Alta complexidade"],
        correta: 3,
        dificuldade: 2
    },
    {
        texto: "A vigência de um contrato pode ser prorrogada por até:",
        alternativas: ["5 anos", "10 anos", "A critério do gestor", "Prazo definido no edital"],
        correta: 0,
        dificuldade: 2
    },
    {
        texto: "A responsabilidade do contratado por vícios ocultos é de:",
        alternativas: ["1 ano", "2 anos", "5 anos", "10 anos"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "As sanções previstas incluem:",
        alternativas: ["Multa e prisão", "Advertência, multa, impedimento e declaração de inidoneidade", "Suspensão e demissão", "Interdição e cassação"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "O contrato administrativo pode ser alterado unilateralmente em caso de:",
        alternativas: ["Interesse do contratado", "Modificação do projeto", "Acordo entre as partes", "Erro material do edital"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "O agente de contratação atua durante:",
        alternativas: ["Somente na fase externa", "Todas as fases da licitação", "Somente no julgamento", "Somente na habilitação"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "O critério de julgamento 'técnica e preço' é mais adequado para:",
        alternativas: ["Obras públicas", "Compra de materiais", "Serviços técnicos especializados", "Aquisição de imóveis"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "É vedada a participação direta ou indireta na licitação de:",
        alternativas: ["Empresas estrangeiras", "Servidor público da área", "Empresas recém-abertas", "Microempresas"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "O edital de licitação deve conter, entre outros, os seguintes itens:",
        alternativas: ["Data de posse do agente", "Dados do órgão licitante", "Objeto da licitação e critérios de julgamento", "Nome do prefeito"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "A licitação pode ser revogada:",
        alternativas: ["Somente por ordem judicial", "Por conveniência administrativa", "A pedido do contratado", "Por decisão do legislativo"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "Qual é o papel do controle interno nas contratações públicas?",
        alternativas: ["Apenas observar", "Executar o objeto", "Fiscalizar e orientar", "Contratar diretamente"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "O valor estimado da contratação deve ser calculado com base em:",
        alternativas: ["Preço de mercado", "Convenção coletiva", "Histórico de compras", "Valor arbitrado"],
        correta: 0,
        dificuldade: 2
    },
    {
        texto: "A modalidade de diálogo competitivo é adequada para:",
        alternativas: ["Produtos simples", "Aquisições diretas", "Soluções inovadoras", "Compra de imóveis"],
        correta: 2,
        dificuldade: 2
    },
    {
        texto: "O orçamento sigiloso é permitido quando:",
        alternativas: ["Sempre que solicitado", "Houver risco à competitividade", "Para todas as licitações", "Por decisão do contratado"],
        correta: 1,
        dificuldade: 2
    },
    {
        texto: "Quem pode impugnar o edital de licitação?",
        alternativas: ["Apenas o Ministério Público", "Somente licitantes", "Qualquer cidadão", "Auditores fiscais"],
        correta: 2,
        dificuldade: 2
    },
    // #endregion
    // #region Questões Difíceis
    {
        texto: "O planejamento anual das contratações públicas está previsto em qual instrumento?",
        alternativas: ["Plano Plurianual", "Plano de Compras Anual", "Lei de Diretrizes Orçamentárias", "Termo de Referência"],
        correta: 1,
        dificuldade: 3
    },
    {
        texto: "O procedimento auxiliar de credenciamento serve para:",
        alternativas: ["Escolher fornecedor mais barato", "Registrar preço de mercado", "Permitir a prestação de serviços simultâneos por vários interessados", "Avaliar desempenho do contratado"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "A matriz de alocação de riscos é obrigatória em contratos de:",
        alternativas: ["Obras públicas de pequeno valor", "Serviços continuados", "Contratação integrada e semi-integrada", "Fornecimento de bens comuns"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "O contratado responde pelos danos causados à Administração:",
        alternativas: ["Somente por culpa comprovada", "Mesmo que não haja culpa", "Somente após a entrega final", "Apenas durante a vigência contratual"],
        correta: 1,
        dificuldade: 3
    },
    {
        texto: "A fase preparatória da contratação integrada exige:",
        alternativas: ["Apenas o termo de referência", "Anteprojeto de engenharia", "Plano plurianual", "Estudo de impacto ambiental"],
        correta: 1,
        dificuldade: 3
    },
    {
        texto: "Na Nova Lei, o que substitui a carta-convite?",
        alternativas: ["Diálogo competitivo", "Pregão eletrônico", "Dispensa eletrônica", "Concorrência simplificada"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "O uso do seguro-garantia com cláusula de retomada é obrigatório em contratos de:",
        alternativas: ["Fornecimento de material escolar", "Serviços contínuos", "Obras de grande vulto", "Consultoria jurídica"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "A responsabilização solidária do consórcio depende de:",
        alternativas: ["Pedido do contratado", "Decisão judicial", "Previsão no edital e contrato", "Prazo de vigência contratual"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "O julgamento por melhor técnica é exclusivo para:",
        alternativas: ["Obras públicas", "Fornecimento de bens", "Serviços técnicos especializados", "Serviços contínuos"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "O agente de contratação pode ser responsabilizado por:",
        alternativas: ["Decisão política", "Erros materiais no edital", "Falta de licitação", "Atos dolosos ou com culpa"],
        correta: 3,
        dificuldade: 3
    },
    {
        texto: "O edital deve ser publicado com antecedência mínima de:",
        alternativas: ["3 dias úteis", "5 dias corridos", "8 dias úteis", "15 dias úteis (concorrência)"],
        correta: 3,
        dificuldade: 3
    },
    {
        texto: "A duração dos contratos contínuos pode ser de até:",
        alternativas: ["5 anos", "10 anos", "Prazo indefinido", "3 anos"],
        correta: 0,
        dificuldade: 3
    },
    {
        texto: "É permitido o pagamento antecipado quando:",
        alternativas: ["Sempre que solicitado pelo fornecedor", "Previsão no edital e comprovado benefício à Administração", "O valor for inferior a R$ 10 mil", "Em qualquer hipótese"],
        correta: 1,
        dificuldade: 3
    },
    {
        texto: "As licitações sustentáveis devem considerar:",
        alternativas: ["Apenas o menor preço", "Critérios ambientais, sociais e de governança", "Preferência por empresas locais", "Redução de tributos"],
        correta: 1,
        dificuldade: 3
    },
    {
        texto: "A pesquisa de preços deve usar, preferencialmente:",
        alternativas: ["Propostas de fornecedores aleatórios", "Preços da internet", "Dados oficiais, como painéis de compras públicas", "Cotações internacionais"],
        correta: 2,
        dificuldade: 3
    },
    {
        texto: "A responsabilização de empresas por fraudes em licitação está prevista em qual lei?",
        alternativas: ["Lei 8.666/93", "Lei 13.303/2016", "Lei 14.133/2021", "Lei Anticorrupção (12.846/2013)"],
        correta: 3,
        dificuldade: 3
    },
    {
        texto: "É exemplo de vedação na nova lei:",
        alternativas: ["Licitação com cláusulas obrigatórias", "Contratação com objeto determinado", "Divisão indevida do objeto para fugir da modalidade", "Análise prévia de riscos"],
        correta: 2,
        dificuldade: 3
    }
    // #endregion
];
export function getPerguntas(){
    return perguntas;
}