/**
 * Questão 3: FizzBuzz
 *
 * Implemente uma função chamada fizzBuzz que não recebe parâmetros.
 * Esta função deve imprimir números de 1 a 100, com as seguintes regras:
 *
 * - Para múltiplos de 3, imprima "Fizz" em vez do número.
 * - Para múltiplos de 5, imprima "Buzz" em vez do número.
 * - Para números que são múltiplos de 3 e 5, imprima "FizzBuzz".
 * - Para os demais números, imprima o próprio número.
 *
 * Requisitos:
 * 1. A função deve imprimir exatamente 100 linhas.
 * 2. Use console.log para imprimir cada linha.
 * 3. Não é necessário retornar nenhum valor, apenas imprimir.
 *
*/

function fizzBuzz(){
    for(i = 1; i < 101; i++){
        if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else{
            console.log(i);
        }
    }
}

console.log(fizzBuzz());
