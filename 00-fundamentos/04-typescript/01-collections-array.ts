// Escreva um programa para criar uma Collection Array de Objetos
// do tipo string. O programa deverá solicitar ao usuário, que ele 
// digite via teclado 5 cores e deverá adicioná-las individualmente
// no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import ler from 'readline-sync';

const cores: string[] = [];
const totalDeCores = 5;

console.log("------------------------------------------");
console.log("ENTRADA DE DADOS");
console.log("------------------------------------------");

for (let i = 0; i < totalDeCores; i++) {
    const corInserida = ler.question(`Digite a ${i + 1}a cor: `);
    cores.push(corInserida);
}

console.log("\n\n================ SAÍDA ===================");

console.log("\nCores adicionadas:");
console.table(cores);

cores.sort();

console.log("\nCores ordenadas:");
console.table(cores);

console.log("==========================================");