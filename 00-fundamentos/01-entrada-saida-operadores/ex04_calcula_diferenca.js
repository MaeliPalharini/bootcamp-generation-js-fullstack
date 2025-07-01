/**
* Leia quatro valores inteiros A, B, C e D.
 * Calcule a diferença: (A * B) - (C * D)
 * Exiba: Diferença: X
 */

const readline = require("readline-sync")

const n1 = readline.questionInt("numero1: ");
const n2 = readline.questionInt("numero2: ");
const n3 = readline.questionInt("numero3: ");
const n4 = readline.questionInt("numero4: ");

const diferença =(n1 * n2) - (n3 * n4);

console.log(`\nDiferença: ${diferença.toFixed(1)}`);