import { ListNode } from "./types";

export default class Queue<T> {
    public length: number;
    public head?: ListNode<T>;
    public tail?: ListNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item, next: undefined } as ListNode<T>;

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const headValue = this.head.value;
        this.head = this.head.next ?? undefined;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return headValue;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}
