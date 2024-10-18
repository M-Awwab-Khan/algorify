"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LRU {
    constructor(capacity) {
        this.head = this.tail = undefined;
        this.length = 0;
        this.capacity = capacity;
        this.lookup = new Map();
        this.reverseLookup = new Map();
    }
    update(key, value) {
        let node = this.lookup.get(key);
        if (!node) {
            node = { value };
            this.prepend(node);
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
            this.length++;
            this.trimCache();
        }
        node.value = value;
        this.detach(node);
        this.prepend(node);
    }
    get(key) {
        let node = this.lookup.get(key);
        if (!node)
            return undefined;
        this.detach(node);
        this.prepend(node);
        return node.value;
    }
    detach(node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (this.head === node) {
            this.head = node.next;
        }
        if (this.tail === node) {
            this.tail = node.prev;
        }
        node.next = node.prev = undefined;
    }
    prepend(node) {
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }
    trimCache() {
        if (this.length > this.capacity) {
            const node = this.tail;
            this.tail = node.prev;
            if (this.tail) {
                this.tail.next = undefined;
            }
            const key = this.reverseLookup.get(node);
            this.lookup.delete(key);
            this.reverseLookup.delete(node);
            this.length--;
        }
    }
}
exports.default = LRU;
