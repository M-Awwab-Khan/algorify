"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Deque {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity); // Pre-allocate buffer with given capacity
        this.head = 0; // Points to the next item to be dequeued
        this.tail = 0; // Points to the next available spot for enqueue
        this.length = 0; // Number of items in the buffer
    }
    enqueueBack(item) {
        if (this.isFull()) {
            throw new Error("Buffer Overflow");
        }
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.length++;
    }
    dequeueFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        let element = this.buffer[this.head];
        this.buffer[this.head] = undefined;
        this.head = (this.head + 1) % this.capacity;
        this.length--;
        return element;
    }
    enqueueFront(item) {
        if (this.isFull()) {
            throw new Error("Buffer Overflow");
        }
        this.head = (this.head - 1 + this.capacity) % this.capacity;
        this.buffer[this.head] = item;
        this.length++;
    }
    dequeueBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.tail = (this.tail - 1 + this.capacity) % this.capacity;
        let element = this.buffer[this.tail];
        this.buffer[this.tail] = undefined;
        this.length--;
        return element;
    }
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.buffer[this.head];
    }
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.buffer[(this.tail - 1 + this.capacity) % this.capacity];
    }
    isFull() {
        return this.length == this.capacity;
    }
    isEmpty() {
        return this.length == 0;
    }
}
exports.default = Deque;
