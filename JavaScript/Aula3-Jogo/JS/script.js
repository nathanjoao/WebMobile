function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function atualizarRanking(nomeJogador, tentativas) {
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    
    ranking.push({ nome: nomeJogador, tentativas: tentativas });
    
    ranking.sort((a, b) => a.tentativas - b.tentativas);
    
    if (ranking.length > 10) {
        ranking.length = 10;
    }

    localStorage.setItem('ranking', JSON.stringify(ranking));
    
    exibirRanking();
}

function exibirRanking() {
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    
    if (ranking.length === 0) {
        alert("Nenhum jogador no ranking ainda.");
        return;
    }
    
    let mensagem = "Ranking dos 10 melhores jogadores:\n";
    ranking.forEach((entrada, index) => {
        mensagem += `${index + 1}. ${entrada.nome} - ${entrada.tentativas} tentativas\n`;
    });
    
    alert(mensagem);
}

function jogarAdivinhacao() {
    const jogadores = [
        {
            nome: prompt("Jogador 1, digite seu nome:"),
            pontuacao: 0,
            numeroSecreto: gerarNumeroAleatorio(1, 100),
            tentativas: 0,
            acertou: false,
        },
        {
            nome: prompt("Jogador 2, digite seu nome:"),
            pontuacao: 0,
            numeroSecreto: gerarNumeroAleatorio(1, 100),
            tentativas: 0,
            acertou: false,
        }
    ];

    jogadores.forEach(jogador => {
        while (!jogador.acertou) {
            const palpite = parseInt(prompt(`${jogador.nome}, digite o seu palpite (entre 1 e 100):`), 10);
            jogador.tentativas++;

            if (palpite === jogador.numeroSecreto) {
                jogador.acertou = true;
                alert(`Parabéns ${jogador.nome}! Você acertou o número em ${jogador.tentativas} tentativas.`);
                jogador.pontuacao += 100;
            } else if (Math.abs(palpite - jogador.numeroSecreto) <= 2) {
                alert("Perto demais!");
                jogador.pontuacao += 50;
            } else if (Math.abs(palpite - jogador.numeroSecreto) <= 5) {
                alert("Muito perto!");
                jogador.pontuacao += 20;
            } else if (Math.abs(palpite - jogador.numeroSecreto) <= 10) {
                alert("Seu palpite está perto!");
                jogador.pontuacao += 10;
            } else {
                alert("Está longe!");
            }
        }

        atualizarRanking(jogador.nome, jogador.tentativas);
    });

    exibirRanking();
}

jogarAdivinhacao();
