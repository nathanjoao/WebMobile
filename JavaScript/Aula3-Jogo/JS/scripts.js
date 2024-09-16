function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogar(){
    const jogadores = [
        {
            nome: prompt("Digite seu nome: "),
            pontuacao: 0,
            numeroPalpite: gerarNumeroAleatorio(1, 100),
            tentativas: 0,
            acertou: false,    
        },
        {
            nome: prompt("Digite seu nome: "),
            pontuacao: 0,
            numeroPalpite: gerarNumeroAleatorio(1, 100),
            tentativas: 0,
            acertou: false,    
        }
    ];
}