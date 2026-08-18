const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Até que ponto a inteligência artificial poderá desenvolver autonomia e tomar decisões sem a intervenção humana?",
alternativas: [
    {
        texto: "A IA poderá alcançar um alto nível de autonomia, mas decisões importantes ainda devem contar com a supervisão humana, principalmente quando envolverem questões éticas e que possam afetar a sociedade",
        afirmacao: "Mesmo que a inteligência artificial se torne cada vez mais autônoma, a supervisão humana continuará sendo fundamental para garantir que suas decisões estejam de acordo com princípios éticos e com os interesses da sociedade."
    },
    {
        texto: "A IA poderá tomar decisões completamente sozinha no futuro, já que sistemas inteligentes podem analisar uma quantidade de informações muito maior e encontrar soluções mais rapidamente que os seres humanos",
        afirmacao: "O aumento da capacidade de análise e tomada de decisões da IA pode tornar possível uma autonomia muito maior, mas isso também levanta questões sobre até onde devemos permitir que máquinas decidam por nós."
    }
]
        
    },
    {
        enunciado: "Como o avanço da IA poderá transformar a relação entre seres humanos, trabalho, criatividade e conhecimento?",
alternativas: [
    {
        texto: "A IA poderá facilitar o trabalho humano e ampliar a criatividade, permitindo que as pessoas utilizem ferramentas inteligentes para desenvolver novas ideias e adquirir conhecimento de maneira mais rápida",
        afirmacao: "A inteligência artificial pode se tornar uma importante ferramenta de apoio aos seres humanos, transformando profissões e formas de criação sem necessariamente eliminar a importância da criatividade e do conhecimento humano."
    },
    {
        texto: "A IA poderá substituir grande parte do trabalho e da produção criativa realizada atualmente pelos seres humanos, tornando necessário repensar o valor do trabalho e a forma como o conhecimento é produzido",
        afirmacao: "Se a inteligência artificial conseguir realizar tarefas cada vez mais complexas, a sociedade poderá enfrentar mudanças profundas no mercado de trabalho e na própria maneira como enxergamos criatividade, conhecimento e realização profissional."
    }
]
        
    },
    {
       enunciado: "Se a inteligência artificial alcançar capacidades superiores às humanas em diversas áreas, como a sociedade deverá lidar com os riscos, limites éticos e possíveis consequências desse cenário?",
alternativas: [
    {
        texto: "A sociedade deverá estabelecer limites e regras para o desenvolvimento da IA, garantindo que seu uso seja supervisionado e que seus avanços não coloquem em risco a segurança e os direitos das pessoas",
        afirmacao: "O desenvolvimento de inteligências artificiais cada vez mais poderosas exige responsabilidade e regulamentação, para que os benefícios dessa tecnologia sejam aproveitados sem ignorar seus possíveis riscos."
    },
    {
        texto: "A evolução da IA não deveria ser limitada excessivamente, pois impedir seu desenvolvimento poderia atrasar descobertas e soluções importantes para problemas da humanidade",
        afirmacao: "Embora existam riscos no avanço da inteligência artificial, restringir excessivamente seu desenvolvimento também pode impedir avanços científicos e tecnológicos capazes de beneficiar a humanidade."
    }
],
        
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
