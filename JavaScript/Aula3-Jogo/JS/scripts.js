function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogar() {
    const jogadores = [
        {
            nome: prompt("Digite o nome do Jogador 1: "),
            pontuacao: 0,
            numeroSecreto: gerarNumeroAleatorio(1, 100),
            tentativas: 0,
            acertou: false
        },
        {
            nome: prompt("Digite o nome do Jogador 2: "),
            pontuacao: 0,
            numeroSecreto: gerarNumeroAleatorio(1, 100),
            tentativas: 0,
            acertou: false
        }
    ];

    jogadores.forEach(jogador => {
        while (!jogador.acertou) {
            const palpite = parseInt(prompt(`${jogador.nome}, digite seu palpite (entre 1 e 100):`), 10);
            jogador.tentativas++;

            if (palpite === jogador.numeroSecreto) {
                jogador.acertou = true;
                jogador.pontuacao += 100;
                alert(`Parabéns ${jogador.nome}, você acertou o número!`);
            } else if (Math.abs(palpite - jogador.numeroSecreto) <= 2) {
                jogador.pontuacao += 20;
                alert(`${jogador.nome}, está muito perto!`);
            } else if (Math.abs(palpite - jogador.numeroSecreto) <= 5) {
                jogador.pontuacao += 10;
                alert(`${jogador.nome}, está perto!`);
            } else if (Math.abs(palpite - jogador.numeroSecreto) <= 10) {
                jogador.pontuacao += 5;
                alert(`${jogador.nome}, pode estar perto.`);
            } else {
                alert(`${jogador.nome}, está longe.`);
            }
        }

        atualizarRanking(jogador.nome, jogador.tentativas);
    });
}

function atualizarRanking(nomeJogador, tentativas) {
    let ranking = localStorage.getItem('ranking') || '';

    let rankingArray = ranking ? ranking.split(';') : [];

    rankingArray.push(`${nomeJogador}:${tentativas}`);

    rankingArray.sort((a, b) => {
        return parseInt(a.split(':')[1]) - parseInt(b.split(':')[1]);
    });

    if (rankingArray.length > 10) {
        rankingArray = rankingArray.slice(0, 10);
    }

    localStorage.setItem('ranking', rankingArray.join(';'));

    exibirRanking();
}

function exibirRanking() {
    const ranking = localStorage.getItem('ranking') || '';

    const rankingArray = ranking ? ranking.split(';') : [];

    let mensagem = "Ranking dos melhores jogadores:\n";
    for (let i = 0; i < rankingArray.length; i++) {
        const [nome, tentativas] = rankingArray[i].split(':');
        mensagem += `${i + 1}. ${nome} - ${tentativas} tentativas\n`;
    }
    alert(mensagem);
}

jogar();
