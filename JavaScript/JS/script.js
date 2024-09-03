// 1
const a = 10;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b
);
console.log(a / b);

// 2

let idade = prompt("Qual a sua idade");

if (idade < 16) {
    alert("Você pode votar!");
} else if (idade < 18) {
    alert("Voto opicional!");
} else if (idade > 66) {
    alert("Voto obrigatório!");
} else {
    alert("Voto facultativo!")
}

// 3

let x = prompt("Digite o ano em que você nasceu");

y = 2024 - x;
alert(`Sua idade ${y}`);

// 4

let mes = Number(prompt("Digite um número por extenso "));

switch (mes) {
    case 1:
        alert("JANEIRO");
        break;

    case 2:
        alert("FEVEREIRO");
        break;

    case 3:
        alert("Março");
        break;

    case 4:
        alert("Abril");
        break;

    case 5:
        alert("Maio");
        break;

    case 6:
        alert("Junho");
        break;

    case 7:
        alert("Julho");
        break;

    case 8:
        alert("Agosto");
        break;

    case 9:
        alert("Setembro");
        break;

    case 10:
        alert("Outubro");
        break;

    case 11:
        alert("Novembro");
        break;

    case 12:
        alert("Dezembro")
        break;
}

