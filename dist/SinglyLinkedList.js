"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    prepend(item) {
        let n = { value: item };
        n.next = this.head;
        this.head = n;
        this.length++;
        if (this.length === 1) {
            this.tail = n;
        }
    }
    insertAt(item, idx) {
        if (idx === 0) {
            this.prepend(item);
        }
        else if (idx === this.length) {
            this.append(item);
        }
        else if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        else {
            let current = this.head;
            for (let i = 0; i < idx - 1; ++i) {
                current = current.next;
            }
            let n = { value: item };
            n.next = current === null || current === void 0 ? void 0 : current.next;
            current.next = n;
            this.length++;
        }
    }
    append(item) {
        const n = { value: item };
        if (!this.tail) {
            this.head = n;
            this.tail = n;
        }
        else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length++;
    }
    remove(item) {
        if (!this.head)
            return undefined;
        if (this.head.value === item) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.length--;
            if (this.length === 0) {
                this.tail = undefined;
            }
            return removedValue;
        }
        let prev = this.head;
        let current = this.head.next;
        while (current) {
            if (current.value === item) {
                prev.next = current.next;
                if (current === this.tail) {
                    this.tail = prev;
                }
                this.length--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }
        return undefined;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; i < idx; ++i) {
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return current === null || current === void 0 ? void 0 : current.value;
    }
    removeAt(idx) {
        var _a, _b, _c, _d;
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }
        if (idx === 0) {
            const value = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            this.length--;
            if (this.length === 0) {
                this.tail = undefined;
            }
            return value;
        }
        let prev = this.head;
        for (let i = 0; i < idx - 1; ++i) {
            prev = prev.next;
        }
        const removedValue = (_c = prev.next) === null || _c === void 0 ? void 0 : _c.value;
        prev.next = (_d = prev.next) === null || _d === void 0 ? void 0 : _d.next;
        if (prev.next === undefined) {
            this.tail = prev;
        }
        this.length--;
        return removedValue;
    }
    reverse() {
        let prev = undefined;
        let current = this.head;
        let next = undefined;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }
}
exports.default = SinglyLinkedList;
