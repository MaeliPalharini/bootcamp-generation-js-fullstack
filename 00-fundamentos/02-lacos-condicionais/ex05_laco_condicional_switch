//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
//(número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
// seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const readline = require("readline-sync");

console.log("--- Cardápio ---");
console.log("1 - Cachorro Quente | R$ 10.00");
console.log("2 - X-Salada        | R$ 15.00");
console.log("3 - X-Bacon         | R$ 18.00");
console.log("4 - Bauru           | R$ 12.00");
console.log("5 - Refrigerante    | R$ 8.00");
console.log("6 - Suco de laranja | R$ 13.00");
console.log("------------------");

const codigoProduto = parseInt(readline.question("Digite o código do produto: "));
const quantidade = parseInt(readline.question("Digite a quantidade: "));

let nomeProduto;
let precoUnitario;

switch (codigoProduto) {
    case 1:
        nomeProduto = "Cachorro Quente";
        precoUnitario = 10.00;
        break;

    case 2:
    nomeProduto = "X-Salada";
    precoUnitario = 15.00;
    break;

  case 3:
    nomeProduto = "X-Bacon";
    precoUnitario = 18.00;
    break;

  case 4:
    nomeProduto = "Bauru";
    precoUnitario = 12.00;
    break;

  case 5:
    nomeProduto = "Refrigerante";
    precoUnitario = 8.00;
    break;

  case 6:
    nomeProduto = "Suco de laranja";
    precoUnitario = 13.00;
    break;

  default:

    console.log('\nCódigo de produto inválido!');
}

if (nomeProduto !== undefined) {
    const valorTotal = quantidade * precoUnitario;

    console.log(`\nProduto: ${nomeProduto}`);
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
}
