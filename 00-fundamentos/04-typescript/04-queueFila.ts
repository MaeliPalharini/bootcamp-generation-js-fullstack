import * as readline from 'readline';
import { Queue } from './classeQueue';

// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo 
// string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O 
// programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3 
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clientQueue = new Queue<string>();

function displayMenu(): void {
    console.log(`
*******************************
1 - Adicionar Cliente na Fila
2 - Listar todos os Clientes
3 - Chamar Cliente da Fila
0 - Sair
*******************************
    `);
}

function handleOption(option: string): void {
    switch (option) {
        case '1':
            rl.question('Digite o nome do cliente: ', (clientName) => {
                clientQueue.enqueue(clientName);
                console.log(`Cliente "${clientName}" adicionado à fila.`);
                mainMenu();
            });
            break;
        case '2':
            if (clientQueue.isEmpty()) {
                console.log('A fila está vazia.');
            } else {
                console.log('Clientes na fila (por ordem de chegada):');
                const clients = clientQueue.toArray();
                clients.forEach((client: string, index: number) => {
                    console.log(`${index + 1}. ${client}`);
                });
            }
            mainMenu();
            break;
        case '3':
            if (clientQueue.isEmpty()) {
                console.log('A fila está vazia. Nenhum cliente para chamar.');
            } else {
                const calledClient = clientQueue.dequeue();
                console.log(`Cliente "${calledClient}" chamado.`);
            }
            mainMenu();
            break;
        case '0':
            console.log('Programa finalizado.');
            rl.close();
            break;
        default:
            console.log('Opção inválida. Por favor, escolha uma opção válida.');
            mainMenu();
            break;
    }
}

function mainMenu(): void {
    displayMenu();
    rl.question('Entre com a opção desejada: ', handleOption);
}

console.log('Bem-vindo ao sistema de fila do banco!');
mainMenu();