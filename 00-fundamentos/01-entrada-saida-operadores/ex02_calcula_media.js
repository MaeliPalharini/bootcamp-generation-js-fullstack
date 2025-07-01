/**
 * Exercício 2 – Média de 4 notas
 *
 * Leia quatro notas de um participante e exiba na tela
 * a média final: (nota1 + nota2 + nota3 + nota4) / 4
 */

const readline = require("readline-sync")

const n1 = readline.questionFloat("Nota 1: ");
const n2 = readline.questionFloat("Nota 2: ");
const n3 = readline.questionFloat("Nota 3: ");
const n4 = readline.questionFloat("Nota 4: ");

const media = (n1 + n2 + n3 + n4) / 4;

console.log(`\nMédia final: ${media.toFixed(1)}`);