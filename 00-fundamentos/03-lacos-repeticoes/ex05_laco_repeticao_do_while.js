//Escreva um algoritmo, que leia números inteiros via teclado, até que 
// o número zero seja digitado. Ao final, mostre na tela a soma de todos 
// os números digitados, que sejam positivos

const readline = require("readline-sync");

let numero;
let somaPostivo = 0;

do {
    numero = readline.questionInt("Digite um numero: ");
    if (numero > 0) {
        somaPostivo += numero;
    }
} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${somaPostivo}`);