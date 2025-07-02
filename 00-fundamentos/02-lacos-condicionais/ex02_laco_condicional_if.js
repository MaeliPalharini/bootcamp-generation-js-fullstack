//Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela 
//mensagem indicando se este número é par ou ímpar e se o número é positivo ou
//neagtivo.

const readline = require("readline-sync");

const respostaUsuario = readline.question("Digite um número: ");

const numero = parseInt(respostaUsuario);

let paridade
let positivoOuNegativo

if(numero % 2 === 0) {
    paridade = "par";
} else {
    paridade = "impar";
}

if(numero >= 0) {
    positivoOuNegativo = "positivo"
} else {
    positivoOuNegativo = "negativo"
}

console.log(`O número ${numero} é ${paridade} e ${positivoOuNegativo}!`);

