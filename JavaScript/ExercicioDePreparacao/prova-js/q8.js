/**
 * Questão 8: Encontrar caracteres duplicados em uma string
 *
 * Implemente uma função chamada encontrarDuplicados que receba uma string como parâmetro
 * e retorne um objeto onde as chaves são os caracteres duplicados e os valores são o número
 * de vezes que cada caractere aparece na string.
 *
 * Exemplo:
 * const resultado = encontrarDuplicados("programacao web e mobile");
 * console.log(resultado);
 * // Deve imprimir algo como:
 * // { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 }
 *
 * Observação: Considere espaços em branco como caracteres válidos.
 * Ignore diferenças entre maiúsculas e minúsculas (case-insensitive).
 */

function encontrarCaracteresDuplicados(str) {
    const contador = {};
    const duplicados = [];
  
    for (let char of str) {
      contador[char] = (contador[char] || 0) + 1;
    }

    for (let char in contador) {
      if (contador[char] > 1) {
        duplicados.push(char);
      }
    }
  
    return duplicados;
  }
