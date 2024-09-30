import { listarLivros, addLivros, alterarDisp, buscarPeloTitulo, removerLivro, buscarPorAutor, filtarPorGenero, apenasDisponiveis, addLivrosPrompt 
, removeLivrosPrompt, alterarIdLivro} from './biblioteca.js';

// Adicionar livros à biblioteca
addLivros("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
addLivros("1984", "George Orwell", 1949, "Distopia");
addLivros("AAA", "A", 2024, "AA");
addLivros("BBB", "B", 2024, "AA");

// Alterar disponibilidade
alterarDisp(1);

// Buscar pelo nome
buscarPeloTitulo("o senhor dos anéis");
buscarPeloTitulo("1984");
buscarPeloTitulo("Diário de um banana");

// Buscar por autor
buscarPorAutor("george orwell");

// Livros com o mesmo gênero
filtarPorGenero("AA");

// Livros disponíveis
apenasDisponiveis();

// Listar
listarLivros();

// Remover
removerLivro(1);
removerLivro(2);
removerLivro(3);
removerLivro(4);

// Adicionar (como o usuário quiser)
addLivrosPrompt();
// Litar
listarLivros();

// Remover pelo id que o usuário digitar
removeLivrosPrompt();

// Listar o resultado
listarLivros();

// Alterar para o id que o usuário quiser
alterarIdLivro();

// Listar
listarLivros();

