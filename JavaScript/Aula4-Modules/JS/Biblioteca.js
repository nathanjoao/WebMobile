let biblioteca = [];
let id1 = 1;
import promptSync from 'prompt-sync';

const prompt = promptSync();

// Listar livros
export function listarLivros() {
    if (biblioteca.length === 0) {
        console.log("\nNão há livros na biblioteca");
        return;
    } else {
        console.log("\nBiblioteca: ");
        biblioteca.forEach(livro => {
            console.log(`ID: ${livro.id}\nTítulo: ${livro.titulo}\nAutor: ${livro.autor}\nAno de publicação: ${livro.anoPub}\nGênero: ${livro.genero}\nDisponibilidade: ${livro.disponibilidade ? 'disponível' : 'emprestado'}`);
        });
    }
}

// Adicionar livros
export function addLivros(titulo, autor, anoPub, genero) {
    const livroExistente = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (!livroExistente) {
        const novoLivro = {
            id: id1++, // Incrementa o ID com um contador separado
            titulo,
            autor,
            anoPub: Number(anoPub),
            genero,
            disponibilidade: true // Considera novo livro como disponível
        };
        biblioteca.push(novoLivro);
        console.log(`\nLivro "${novoLivro.titulo}" adicionado com sucesso!`);
    } else {
        console.log(`\nJá há um livro com o título "${titulo}".`);
    }
}

// Alterar disponibilidade
export function alterarDisp(id) {
    const livro = biblioteca.find(l => l.id === id);
    if (livro) {
        livro.disponibilidade = !livro.disponibilidade;
        console.log(`\nDisponibilidade do livro "${livro.titulo}" alterada para ${livro.disponibilidade ? 'disponível' : 'emprestado'}.`);
    } else {
        console.log(`\nLivro com o ID ${id} não foi encontrado.`);
    }
}

// Buscar pelo título
export function buscarPeloTitulo(titulo) {
    const livro = biblioteca.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
    if (livro) {
        console.log(`\nLivro encontrado: ${livro.titulo}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPub}, Gênero: ${livro.genero}, Disponibilidade: ${livro.disponibilidade ? 'disponível' : 'emprestado'}`);
    } else {
        console.log(`\nLivro com o título "${titulo}" não encontrado.`);
    }
}

// Remover livro
export function removerLivro(id) {
    const livroExistente = biblioteca.find(l => l.id === id);
    if (livroExistente) {
        biblioteca = biblioteca.filter(l => l.id !== id);
        console.log(`\nLivro "${livroExistente.titulo}" removido com sucesso!`);
    } else {
        console.log(`\nLivro com o ID ${id} não encontrado.`);
    }
}

// Buscar por autor
export function buscarPorAutor(autor) {
    const livros = biblioteca.filter(l => l.autor.toLowerCase() === autor.toLowerCase());
    if (livros.length > 0) {
        console.log(`\nLivros encontrados de ${autor}:`);
        livros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Ano de Publicação: ${livro.anoPub}, Gênero: ${livro.genero}, Disponibilidade: ${livro.disponibilidade ? 'disponível' : 'emprestado'}`);
        });
    } else {
        console.log(`\nNão foram encontrados livros do autor "${autor}".`);
    }
}

// Filtrar por gênero
export function filtarPorGenero(genero) {
    const livrosComGenero = biblioteca.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
    if (livrosComGenero.length > 0) {
        console.log(`Livros com o gênero "${genero}": `);
        livrosComGenero.forEach(livro => {
            console.log(`ID: ${livro.id}\nTítulo: ${livro.titulo}\nAutor: ${livro.autor}`);
        });
    } else {
        console.log(`Nenhum livro com o gênero "${genero}" foi encontrado.`);
    }
}

// Listar apenas disponíveis
export function apenasDisponiveis() {
    const livrosDisp = biblioteca.filter(l => l.disponibilidade);
    if (livrosDisp.length > 0) {
        console.log(`\nLivros disponíveis:`);
        livrosDisp.forEach(livro => {
            console.log(`ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}`);
        });
    } else {
        console.log(`\nNão há livros disponíveis.`);
    }
}

// Adicionar livro pelo Prompt
export function addLivrosPrompt() {
    const titulo = prompt("Digite o título do livro ");
    const autor = prompt("Digite o autor do livro ");
    const anoPub = Number(prompt("Digite o ano de publicação do livro "));
    const genero = prompt("Digite o gênero do livro ");

    const livroExistente = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (!livroExistente) {
        const novoLivro = {
            id: id1++, // Incrementa o ID com um contador separado
            titulo: titulo,
            autor: autor,
            anoPub: anoPub,
            genero: genero,
            disponibilidade: true // Considera novo livro como disponível
        };
        biblioteca.push(novoLivro);
        console.log("Livro adicionado com sucesso:", novoLivro);
    } else {
        console.log("O livro já existe na biblioteca.");
    }
}

export function removeLivrosPrompt(id){
    const idLivro = Number(prompt("Digite o ID do livro que você quer remover"));
    const livroExistente = biblioteca.find(l => l.id === idLivro);
    if (livroExistente) {
        biblioteca = biblioteca.filter(l => l.id !== idLivro);
        console.log(`\nLivro "${livroExistente.titulo}" removido com sucesso!`);
    } else {
        console.log(`\nLivro com o ID ${id} não encontrado.`);
    }
}