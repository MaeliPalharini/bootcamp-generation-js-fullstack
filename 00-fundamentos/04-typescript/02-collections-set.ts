//Escreva um programa para criar uma Collection Set do tipo number. 
//O programa deverá solicitar ao usuário, que ele digite via teclado 
//10 valores inteiros não repetidos e adicione-os individualmente
//na Collection Set. Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 

import ler from 'readline-sync';

const numeros = new Set<number>();
const totalDeValores = 10;

console.log("------------------------------------------");
console.log("ENTRADA DE DADOS");
console.log("------------------------------------------");

for (let i = 0; i < totalDeValores; i++) {
    const valorInserido = ler.questionInt(`Digite o ${i + 1}º valor: `);
    numeros.add(valorInserido);
}

console.log("\n\n================ SAÍDA ===================");

console.log("\nListar dados do Set:");

const arrayDeNumeros = [...numeros];

arrayDeNumeros.sort((a, b) => a - b);

console.table(arrayDeNumeros);

console.log("==========================================");