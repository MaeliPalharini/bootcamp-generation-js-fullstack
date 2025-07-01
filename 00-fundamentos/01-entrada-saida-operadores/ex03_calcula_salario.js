/**
 * Ex03 – Cálculo de Salário Líquido
 * Entradas: salário bruto, adicional noturno, horas extras, descontos
 * Saída: salário líquido = bruto + adicional + (extras*5) - descontos
 */

const readline = require ("readline-sync");

const salarioBruto = readline.questionFloat("Salário bruto: ");
const adicionalNoturno = readline.questionFloat("Adicional noturno: ");
const horasExtras = readline.questionFloat("Horas Extras: ");
const descontos = readline.questionFloat("Descontos: ");

const salarioLiquido = salarioBruto
+ adicionalNoturno
+horasExtras * 5
- descontos;

console.log(`\nSalário liquido: R$ ${salarioLiquido.toFixed(2)}`);