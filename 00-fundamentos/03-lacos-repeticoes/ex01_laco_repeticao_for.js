//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro 
// número deve ser menor do que o segundo número. Caso contrário, deve ser exibida
// uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.

const readline = require("readline-sync")

const primeiroNumero = readline.questionInt("Digite o primeiro numero do intervalo: ");
const ultimoNumero = readline.questionInt("Digite o ultimo numero do intervalo: ");

if (primeiroNumero >= ultimoNumero) {
    console.log("\nIntervalo inválido!");
} else {
    console.log(`\nNo intervalo entre ${primeiroNumero} e ${ultimoNumero}:\n`);
    for(let i = primeiroNumero; i <= ultimoNumero; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}
