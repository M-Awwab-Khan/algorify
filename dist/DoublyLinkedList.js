"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = undefined;
        this.head = undefined;
    }
    prepend(item) {
        this.length++;
        const ListNode = { value: item };
        if (!this.head) {
            this.head = this.tail = ListNode;
            return;
        }
        ListNode.next = this.head;
        this.head.prev = ListNode;
        this.head = ListNode;
    }
    insertAt(item, idx) {
        if (idx > this.length || idx < 0) {
            throw new Error("Invalid index for insertion");
        }
        else if (idx === 0) {
            this.prepend(item);
        }
        else if (idx === this.length) {
            this.append(item);
        }
        else {
            let curr = this.getAt(idx);
            let ListNode = { value: item };
            ListNode.prev = curr.prev;
            ListNode.next = curr;
            curr.prev = ListNode;
            if (ListNode.prev) {
                ListNode.prev.next = ListNode;
            }
            this.length++;
        }
    }
    append(item) {
        this.length++;
        let ListNode = { value: item };
        if (!this.tail) {
            this.head = this.tail = ListNode;
            return;
        }
        ListNode.prev = this.tail;
        this.tail.next = ListNode;
        this.tail = ListNode;
    }
    remove(item) {
        var _a;
        let curr = this.head;
        while (curr) {
            // This replaces the for-loop
            if (curr.value === item) {
                return (_a = this.removeListNode(curr)) === null || _a === void 0 ? void 0 : _a.value; // Check if curr is not undefined
            }
            curr = curr.next;
        }
        return undefined; // Item not found
    }
    removeListNode(ListNode) {
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
        }
        else if (ListNode.prev && ListNode.next) {
            ListNode.prev.next = ListNode.next;
            ListNode.next.prev = ListNode.prev;
        }
        else if (ListNode.prev) {
            this.tail = ListNode.prev;
            this.tail.next = undefined;
        }
        else if (ListNode.next) {
            this.head = ListNode.next;
            this.head.prev = undefined;
        }
        ListNode.next = ListNode.prev = undefined; // Clear references
        return ListNode; // Always return the ListNode
    }
    get(idx) {
        const ListNode = this.getAt(idx);
        if (!ListNode) {
            return undefined;
        }
        return ListNode.value;
    }
    removeAt(idx) {
        var _a;
        let ListNode = this.getAt(idx);
        if (!ListNode) {
            return undefined;
        }
        else {
            return (_a = this.removeListNode(ListNode)) === null || _a === void 0 ? void 0 : _a.value;
        }
    }
    getAt(idx) {
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
exports.default = DoublyLinkedList;
