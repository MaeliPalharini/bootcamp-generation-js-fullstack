/**
 * Exercício 1 – Fluxograma 
 * 
 * Início
 *   Digite o Salário → Leia Salário =  10000.00
 *   Digite o Abono   → Leia Abono = 1000.00
 *   NovoSalario = Salário + Abono = 11000.00
 *   Exibe NovoSalario 
 */

const readline = require("readline-sync");

const salario = readline.questionFloat("Digite o salário: ");
const abono = readline.questionFloat("Digite o abono: ");

const novoSalario = salario + abono;

console.log(`\n Novo salário: R$ ${novoSalario.toFixed(2)}`);