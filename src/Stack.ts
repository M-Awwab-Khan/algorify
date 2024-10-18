import { ListNode } from "./types";
export default class Stack<T> {
    public length: number;
    private head?: ListNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const head = { value: item, next: this.head } as ListNode<T>;
        this.head = head;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = head.next;
        this.length--;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
