//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C 
//e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const readline = require("readline-sync")

const valorA = readline.questionInt("Digite o valor de A: ");
const valorB = readline.questionInt("Digite o valor de B: ");
const valorC = readline.questionInt("Digite o valor de C: ");

const soma = valorA + valorB

if (soma > valorC) {
    mensagemComparacao = "A soma de A + B é maior que C";
} else if (soma < valorC) {
    mensagemComparacao = "A soma de A + B é menor que C";
} else {
    mensagemComparacao = "A soma de A e B é igual a C";
}

console.log(mensagemComparacao + "\n");

