// q7.js
/**
 * Questão 7: Unir e remover duplicados em dois arrays
 *
 * Implemente uma função chamada unirArrays que receba dois arrays como parâmetros
 * e retorne um novo array contendo todos os elementos dos dois arrays, sem elementos duplicados.
 *
 * Requisitos:
 * 1. O array resultante deve conter apenas elementos únicos (sem duplicatas).
 * 2. A ordem dos elementos deve seguir a ordem de aparecimento nos arrays originais.
 *
 * Exemplo de uso:
 * const resultado = unirArrays([1, 2, 3, 4], [3, 4, 5, 6]);
 * console.log(resultado); // Deve imprimir: [1, 2, 3, 4, 5, 6]
 */

function unirArrays(array1, array2) {
    let array3 = [];
    array3 = array1.concat(array2);
    const uniqueArray = Array.from(new Set(array3));
    return uniqueArray;
}
  
console.log(unirArrays([1, 2, 3, 4], [3, 4, 5, 6]));

module.exports = unirArrays;
  