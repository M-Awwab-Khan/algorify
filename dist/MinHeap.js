"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MinHeap {
    constructor() {
        this.length = 0;
        this.data = [];
    }
    buildHeap(array) {
        this.length = array.length;
        this.data = array;
        const startIdx = Math.floor(this.length / 2) - 1;
        for (let i = startIdx; i >= 0; --i) {
            this.heapifyDown(i);
        }
    }
    insert(value) {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete() {
        if (this.length === 0) {
            throw new Error("Heap is empty");
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }
    peak() {
        if (length === 0)
            return undefined;
        return this.data[0];
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    heapifyUp(idx) {
        if (idx === 0) {
            return;
        }
        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx];
        if (value < parentValue) {
            this.data[parentIdx] = value;
            this.data[idx] = parentValue;
            this.heapifyUp(parentIdx);
        }
    }
    heapifyDown(idx) {
        if (idx >= this.length)
            return;
        const value = this.data[idx];
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);
        let smallestIdx = idx;
        if (lIdx < this.length && this.data[lIdx] < this.data[smallestIdx]) {
            smallestIdx = lIdx;
        }
        if (rIdx < this.length && this.data[rIdx] < this.data[smallestIdx]) {
            smallestIdx = rIdx;
        }
        if (smallestIdx != idx) {
            this.data[idx] = this.data[smallestIdx];
            this.data[smallestIdx] = value;
            this.heapifyDown(smallestIdx);
        }
    }
    leftChild(idx) {
        return 2 * idx + 1;
    }
    rightChild(idx) {
        return 2 * idx + 2;
    }
    parent(idx) {
        return Math.floor((idx - 1) / 2);
    }
}
exports.default = MinHeap;
