/**
 * Questão 9: Objeto Estudante
 *
 * Implemente uma função chamada criarEstudante que não recebe parâmetros.
 * Esta função deve criar e retornar um objeto estudante com as seguintes características:
 *
 * 1. O objeto deve ter as propriedades: nome, idade, nota1, nota2 e nota3.
 * 2. Atribua valores iniciais de sua escolha para essas propriedades.
 * 3. Adicione um método chamado media que retorne a média das três notas do estudante.
 * 4. Adicione um método chamado situacao que retorne "Aprovado" se a média do estudante
 *    for maior ou igual a 7 e "Reprovado" caso contrário.
 *
 *
 * Exemplo de uso:
 * const estudante = criarEstudante();
 * console.log(estudante.nome);
 * console.log(estudante.media());
 * console.log(estudante.situacao());
 */

function criarEstudante(){

    const estudante = {
        nome: "Nathan",
        idade: 18,
        nota1: 9,
        nota2: 8,
        nota3: 10,

        media(nota1, nota2, nota3){
            return (nota1 + nota2 + nota3) / 3;
        },
        situacao(media){
            if(media >= 7){
                console.log("Aprovado");
            }else{
                console.log("Reprovado");
            }
        }
    }
    return estudante;
}

