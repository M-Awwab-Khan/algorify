"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item) {
        const node = { value: item, next: undefined };
        if (!this.tail) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    deque() {
        var _a;
        if (!this.head) {
            return undefined;
        }
        const headValue = this.head.value;
        this.head = (_a = this.head.next) !== null && _a !== void 0 ? _a : undefined;
        this.length--;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return headValue;
    }
    peek() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.length === 0;
    }
}
exports.default = Queue;
