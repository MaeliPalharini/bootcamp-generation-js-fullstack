import * as readline from 'readline';
import { Stack } from './classeStack';

// Escreva um programa contendo uma Collection Stack (Pilha) 
// de Objetos string, para organizar a retirada de livros de 
// uma pilha. O programa deverá ter um Menu que aceitará as 
// opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 

const pilha = new Stack<string>();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu(): void {
    console.log("\n######## Menu ########");
    console.log("1 - Adicionar livro");
    console.log("2 - Listar livros");
    console.log("3 - Remover livro");
    console.log("0 - Sair");
}

function main(): void {
    displayMenu();
    rl.question('Opção: ', (opcao: string) => {
        switch(opcao) {
            case '1':
                rl.question('Nome do livro: ', (livro: string) => {
                    pilha.push(livro);
                    console.log(`Livro "${livro}" adicionado.`);
                    main();
                });
                break;
            case '2':
                if (pilha.isEmpty()) {
                    console.log("Pilha vazia!");
                } else {
                    const livros = pilha.toArray();
                    livros.forEach((livro: string, index: number) => {
                        console.log(`${index + 1}. ${livro}`);
                    });
                }
                main();
                break;
            case '3':
                if (pilha.isEmpty()) {
                    console.log("Pilha vazia!");
                } else {
                    const livroRemovido = pilha.pop();
                    console.log(`Livro "${livroRemovido}" removido.`);
                }
                main();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                main();
                break;
        }
    });
}

main();