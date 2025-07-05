export interface StackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printStack(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
    toArray(): Type[];
}

export class Stack<Type> implements StackInterface<Type> {
    private items: Type[] = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    push(dataItem: Type): void {
        this.items.push(dataItem);
    }

    pop(): Type | undefined {
        if (this.isEmpty()) {
            console.log("A pilha está vazia");
            return;
        }
        return this.items.pop();
    }

    count(): number {
        return this.items.length;
    }

    printStack(): void {
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }

    peek(): Type | undefined {
        if (this.isEmpty()) {
            console.log("A pilha está vazia");
            return;
        }
        return this.items[this.items.length - 1];
    }

    contains(dataItem: Type): boolean {
        return this.items.includes(dataItem);
    }

    clear(): void {
        this.items.length = 0;
    }

    toArray(): Type[] {
        return [...this.items].reverse();
    }
}
