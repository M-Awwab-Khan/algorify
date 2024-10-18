"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RingBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity); // Pre-allocate buffer with given capacity
        this.head = 0; // Points to the next item to be dequeued
        this.tail = 0; // Points to the next available spot for enqueue
        this.length = 0; // Number of items in the buffer
    }
    // Add an item to the buffer
    enqueue(item) {
        if (this.isFull()) {
            throw new Error("Buffer Overflow");
        }
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.length++;
    }
    // Remove an item from the buffer
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let element = this.buffer[this.head];
        this.buffer[this.head] = undefined;
        this.head = (this.head + 1) % this.capacity;
        this.length--;
        return element;
    }
    // Peek at the next item to be dequeued without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.buffer[this.head];
    }
    // Check if the buffer is full
    isFull() {
        return this.length == this.capacity;
    }
    // Check if the buffer is empty
    isEmpty() {
        return this.length == 0;
    }
}
exports.default = RingBuffer;
