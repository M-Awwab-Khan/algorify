"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.head = undefined;
        this.length = 0;
    }
    push(item) {
        this.length++;
        const head = { value: item, next: this.head };
        this.head = head;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = head.next;
        this.length--;
        return head.value;
    }
    peek() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
}
exports.default = Stack;
