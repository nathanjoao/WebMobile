//push adiciona no final 
let frutas = ["banana", "maça"];
frutas.push("Laranja");
console.log(frutas);

// pop remove o ultimo item da array
let celulares = ["apple", "samsung", "xiomi"];
// let ultimoCelular = celulares.pop();
// console.log(celulares);
// console.log(ultimoCelular);

// // unshift adiciona no começo
// celulares.unshift("lg")
// console.log(celulares);


// // shift remove o primeiro item da array
// let primeiroCel = celulares.shift();
// console.log(celulares);
// console.log(primeiroCel);

// //splice 'add' , 'remove' 'obj' 
// celulares.splice(1, 1, "motorola");
// console.log(celulares);

// let celulares2 = ["berry", "apple"];
// celulares = celulares.concat(celulares2);
// console.log(celulares);

// celulares.forEach(function (item, indice) {
//     console.log(indice, item);;
// })
// celulares.forEach(function (item, indice) {
//     console.log(item, indice);;
// })

// adicionar em outra função
// let celulares3 = celulares.map(function(celular){
//         return celular;
// });

// console.log(celulares3);

// let celulares4 = celulares.filter(function(celular){
//         return celular.length === 4;
// });
// console.log(celulares4);

let pessoa = {
    nome: "Nathan",
    idade: 17,
    apresentar: function(){
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos` );
    }
};

pessoa.apresentar();

// criar data
let data = new Date();
console.log(data);