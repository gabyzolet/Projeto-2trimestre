const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vitória chegou em casa após o trabalho e recebeu uma notícia de que a região em que mora tem grandes riscos de enchentes. Qual foi o pensamento de Vitória? ",
        alternativas: [
            "Meu Deus, alguém me tire daqui! ",
            "Que nada a ver, não vai acontecer nada, É MENTIRAAA!"
        ]
    },
    {
        enunciado: "Enquanto dormia, sua mãe foi ao seu quarto avisando que a rua estava quase completamente alagada, e que elas deveriam arrumar imediatamente suas coisas. O que ela levou? ",
        alternativas: [
            "Coisas essenciais (roupas, calçados, coisas de higiene)",
            "Joias, maquiagem, muitos livros, câmera fotográfica."
        ]
    },
    {
        enunciado: "Depois de pegar suas coisas logo um bombeiro em um barco apareceu para resgata-las, porém Vitória possui 2 gatos e 1 cachorro, e o bombeiro não aceita animais no barco. Vitoria foi sem os animais, ou obrigou o bombeiro a levá-los  ?",
        alternativas: [
            "Foi sem os animais. ",
            "Obrigou o bombeiro a levá-los."
        ]
    },
    {
        enunciado: "Vitória foi resgatada e levada a um abrigo em outra cidade, onde passou 3 semanas. A vida dela continuou normal ou mudou totalmente?",
        alternativas: [
            "A vida continuou normalmente como era antes.",
            "A vida delas mudou completamente, virou de cabeça para a baixo."
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();


