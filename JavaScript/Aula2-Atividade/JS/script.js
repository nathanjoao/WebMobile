// Questão 1


// let numero = Number();


// numero = prompt(console.log("Digite um número"));


// if( numero > 0) {
//     alert("Numero Positivo")
// }
// else if (numero < 0) {
//     alert("Numero Negativo")
// }
// else {
//     alert("Zero")
// }


// QUESTÃO 2
// let nota1;
// let nota2;
// let nota3;
// let media;
// let situação;

// nota1 = parseFloat(prompt("Digite a primeira nota:"));
// nota2 = parseFloat(prompt("Digite a segunda nota:"));
// nota3 = parseFloat(prompt("Digite a terceira nota:"));

// media = (nota1 + nota2 + nota3) / 3;

// if (media >= 7) {
//     situação = "Aprovado!";
// } else if (media < 2.5) {
//     situação = "Reprovado!";
// } else {
//     situação = "Em exame!";
// }

// console.log(situação);

//QUESTÃO 3
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// QUESTÃO 4
// function calcularFatorial(n) {
//     if (n < 0) {
//         return "Fatorial não definido para números negativos";
//     }
    
//     let fatorial = 1;
//     for (let i = 1; i <= n; i++) {
//         fatorial *= i;
//     }
//     return fatorial;
// }

// let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
// console.log("O fatorial de " + numero + " é " + calcularFatorial(numero));

// // Questão 5

// let numero = Number();

// numero = prompt(console.log("Digite um ano"));

// if( numero % 4 == 0) {
//     alert("Ano bissexto")
// }
// else if (!numero % 4 == 0) {
//     alert("Não é ano bissexto")
// }
// else if (numero <= 0) {
//     alert("Está errada")
// }

// // QUESTÃO 6

// let grausC = parseFloat(prompt("Digite a temperatura em Celsius:"));
// let conversao = (1.8 * grausC) + 32;
// alert(`Temperatura em Fahrenheit: ${conversao}`);

// // QUESTÃO 7
// function isPalindromo(str) {
//     str = str.replace(/[\W_]/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// let palavra = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");
// if (isPalindromo(palavra)) {
//     console.log(`"${palavra}" é um palíndromo!`);
// } else {
//     console.log(`"${palavra}" não é um palíndromo.`);
// }



// // Questão 8

// let numeros = [1, 2, 3, 4, 5];
// let maiorNumero = Math.max(...numeros);
// console.log("O maior número no array é:", maiorNumero);

// // Questão 9
// let array = [3, 2, 4, 5, 1];
// array.sort((a, b) => a - b); 
// console.log(`Array em crescente: ${array}`);


// // QUESTÃO 1
// const a = prompt("Digite um número");
// const b = prompt("Digite outro número");

// const numA = parseFloat(a);
// const numB = parseFloat(b);

// const soma = numA + numB;

// alert(`Soma dos números: ${soma}`);

// // QUESTÃO 2
// const a = prompt("Digite um número");
// const b = prompt("Digite outro número");

// const numA = parseFloat(a);
// const numB = parseFloat(b);

// const subtrair = numA - numB;

// alert(`Soma dos números: ${subtrair}`);

// //QUESTÃO 3
// const produto = (a, b) => a * b;
// console.log(produto(5, 3));

// // QUESTÃO 6
// const toUpperCase = str => str.toUpperCase();

// const userInput = prompt("Digite uma string:");

// const result = toUpperCase(userInput);

// alert(`String em maiúsculas: ${result}`);

// // QUESTÃO 8
// const contarOcorrencias = (array, valor) => array.filter(item => item === valor).length;

// const arrayInput = prompt("Digite um array de números separados por vírgula (por exemplo: 1,2,3,2,4,2,5):");
// const array = arrayInput.split(',').map(Number);

// const valorInput = prompt("Digite o valor a ser procurado no array:");
// const valor = Number(valorInput);

// const ocorrencias = contarOcorrencias(array, valor);
// alert(`O valor ${valor} aparece ${ocorrencias} vezes no array.`);

// // QUESTÃO 9
// function vogais(str){
//     const vogais = 'aeiouAEIOU';
//     const cont = str.split('').filter(char => vogais.includes(char)).length;
//     return cont;
// }
// const texto = prompt("Digite um texto ");
// alert(`Quantidade de vogais no texto ${texto}: ${vogais(texto)} `);

// // QUESTÃO 10
// function criarArrayAtéNumero(num) {
//     return Array.from({ length: num }, (_, index) => index + 1);
// }

// const numero = 5;
// console.log(criarArrayAtéNumero(numero)); // Saída: [1, 2, 3, 4, 5]

// // QUESTÃO 11
// let carro = {
//     ano: null,
//     marca: null,
//     modelo: null,
//     idade: function() {
//         // Calcula a idade do carro
//         this.idade = 2024 - this.ano;
//         // Exibe a idade do carro
//         alert(`Idade do carro: ${this.idade}`);
//     }
// };

// carro.ano = parseInt(prompt("Digite o ano do carro: "));
// carro.idade();


// // QUETÃO 12
// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 100) + 1;
// }

// const numeroAleatorio = gerarNumeroAleatorio();
 
// alert(`Número aleatório: ${numeroAleatorio}`);

// // QUESTÃO 13
// function calcularDiferencaEmDias(data1, data2) {
//     const date1 = new Date(data1);
//     const date2 = new Date(data2);
//     const diferencaEmMilissegundos = Math.abs(date2 - date1);
    
//     const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
//     return diferencaEmDias;
// }

// const data1 = '2024-09-01';
// const data2 = '2024-09-10';

// console.log(`Diferença em dias: ${calcularDiferencaEmDias(data1, data2)}`);

// QUESTÃO 14

let conta = {
    saldo: 1000,
    titular: "Nathan",
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    },
    verSaldo: function(){
        alert(`Saldo atual: ${this.saldo}`);
    }
};

let x = parseInt(prompt("Digite a sua opção: \n1- Depositar \n2- Sacar \n3- Ver saldo"));

switch(x){
    case 1:
        let add = parseFloat(prompt("Digite um valor para adicionar à conta"));
        conta.depositar(add);
        conta.verSaldo();
        break;

    case 2: 
        let sub = parseFloat(prompt(`Digite um valor para sacar da sua conta com este saldo: ${conta.saldo}`));
        conta.sacar(sub);
        conta.verSaldo();
        break;

    case 3:
        conta.verSaldo();
        break;
        
    default:
        alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}

// QUESTÃO 15

frutas = ["maça", "banana", "laranja"];
console.log(frutas[1]);
frutas.push("manga");
// console.log(frutas);
console.log(`Quantidade de elementos na array: ${frutas.length}`);
frutas.forEach(element => {
    console.log(element);
});













