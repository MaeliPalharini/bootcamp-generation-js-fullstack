//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string),
// o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real).
// A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const readline = require("readline-sync");

const nomeColaborador = readline.question("Nome do colaborador: ");
const codigoCargo = parseInt(readline.question("Cargo: "));
const salarioAtual = parseFloat(readline.question("Salário: R$ "));

let nomeCargo;
let percentualReajuste;

switch (codigoCargo) {
  case 1:
    nomeCargo = "Gerente";
    percentualReajuste = 0.10;
    break;
  case 2:
    nomeCargo = "Vendedor";
    percentualReajuste = 0.07;
    break;
  case 3:
    nomeCargo = "Supervisor";
    percentualReajuste = 0.09;
    break;
  case 4:
    nomeCargo = "Motorista";
    percentualReajuste = 0.06;
    break;
  case 5:
    nomeCargo = "Estoquista";
    percentualReajuste = 0.05;
    break;
  case 6:
    nomeCargo = "Técnico de TI";
    percentualReajuste = 0.08;
    break;
  default:
    console.log("Código de cargo inválido!");
}

if (nomeCargo !== undefined) {
  const novoSalario = salarioAtual + (percentualReajuste * salarioAtual);

  console.log("\nNome do colaborador: " + nomeColaborador);
  console.log("Cargo: " + nomeCargo);
  console.log("Salário: R$ " + novoSalario.toFixed(2));
}
