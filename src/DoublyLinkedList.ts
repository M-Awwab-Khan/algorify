import { ListNode } from "./types";

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.tail = undefined;
        this.head = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const ListNode = { value: item } as ListNode<T>;
        if (!this.head) {
            this.head = this.tail = ListNode;
            return;
        }
        ListNode.next = this.head;
        this.head.prev = ListNode;
        this.head = ListNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            throw new Error("Invalid index for insertion");
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            let curr = this.getAt(idx) as ListNode<T>;
            let ListNode = { value: item } as ListNode<T>;
            ListNode.prev = curr.prev;
            ListNode.next = curr;
            curr.prev = ListNode;
            if (ListNode.prev) {
                ListNode.prev.next = ListNode;
            }
            this.length++;
        }
    }
    append(item: T): void {
        this.length++;
        let ListNode = { value: item } as ListNode<T>;
        if (!this.tail) {
            this.head = this.tail = ListNode;
            return;
        }
        ListNode.prev = this.tail;
        this.tail.next = ListNode;
        this.tail = ListNode;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        while (curr) {
            // This replaces the for-loop
            if (curr.value === item) {
                return this.removeListNode(curr)?.value; // Check if curr is not undefined
            }
            curr = curr.next;
        }
        return undefined; // Item not found
    }

    removeListNode(ListNode: ListNode<T>): ListNode<T> {
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
        } else if (ListNode.prev && ListNode.next) {
            ListNode.prev.next = ListNode.next;
            ListNode.next.prev = ListNode.prev;
        } else if (ListNode.prev) {
            this.tail = ListNode.prev;
            this.tail.next = undefined;
        } else if (ListNode.next) {
            this.head = ListNode.next;
            this.head.prev = undefined;
        }

        ListNode.next = ListNode.prev = undefined; // Clear references
        return ListNode; // Always return the ListNode
    }
    get(idx: number): T | undefined {
        const ListNode = this.getAt(idx);
        if (!ListNode) {
            return undefined;
        }
        return ListNode.value;
    }
    removeAt(idx: number): T | undefined {
        let ListNode = this.getAt(idx);
        if (!ListNode) {
            return undefined;
        } else {
            return this.removeListNode(ListNode)?.value;
        }
    }

    getAt(idx: number): ListNode<T> | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr;
    }
}
