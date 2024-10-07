// q6.js
/**
 * Questão 6: Manipulação de Objeto de Carro
 *
 * Implemente uma função chamada manipulacaoCarro que não recebe parâmetros.
 * Esta função deve criar e manipular um objeto representando um carro,
 * realizando uma série de operações e retornando o objeto final.
 *
 * Requisitos:
 * a) Crie um objeto chamado "carro" com as propriedades: "marca", "modelo" e "anoFabricacao", com os seguintes dados:
 *    marca: "Toyota",
 *    modelo: "Corolla",
 *    anoFabricacao: 2010
 * b) Acesse a propriedade "modelo" do objeto "carro" e imprima no console.
 * c) Altere a propriedade "anoFabricacao" do objeto "carro" para 2015.
 * d) Adicione a propriedade "cor" ao objeto "carro" com o valor: "Preto".
 * e) Adicione um método ao objeto "carro" chamado "getIdade" que retorne quantos anos o carro tem (ano atual - ano de fabricação).
 * f) Adicione um método ao objeto "carro" chamado "getDescricao" que retorne uma string contendo todas as informações do carro, no seguinte formato:
 *    'O carro marca "marca", modelo "modelo", foi fabricado em "anoFabricacao" e é da cor "cor".'.
 *
 * Retorne o objeto carro completo ao final da função.
 */

function manipulacaoCarro() {
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        anoFabricacao: 2010
    };
    console.log(carro.modelo);
    carro.anoFabricacao = 2015;
    carro.cor = "Preto";
    carro.getIdade = function() {
        const anoAtual = new Date().getFullYear();
        return `Idade: ${anoAtual - this.anoFabricacao}`;
    };
    carro.getDescricao = function() {
        return `O carro da marca ${this.marca}, modelo ${this.modelo}, foi fabricado em ${this.anoFabricacao} e é da cor ${this.cor}.`;
    };
    return carro;
}
// console.log(manipulacaoCarro());

module.exports = manipulacaoCarro;
