"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PriorityQueue {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }
    insert(value) {
        this.heap.push(value);
        this.siftUp();
    }
    extract() {
        if (this.heap.length === 0) {
            return null;
        }
        const result = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.siftDown();
        }
        return result;
    }
    siftUp() {
        let node = this.heap.length - 1;
        while (node > 0) {
            const parent = this.parent(node);
            if (this.compare(this.heap[node], this.heap[parent]) >= 0) {
                break;
            }
            [this.heap[node], this.heap[parent]] = [
                this.heap[parent],
                this.heap[node],
            ];
            node = parent;
        }
    }
    siftDown() {
        let node = 0;
        while (this.left(node) < this.heap.length) {
            let left = this.left(node);
            let right = this.right(node);
            let min = left;
            if (right < this.heap.length &&
                this.compare(this.heap[right], this.heap[left]) < 0) {
                min = right;
            }
            if (this.compare(this.heap[node], this.heap[min]) <= 0) {
                break;
            }
            [this.heap[node], this.heap[min]] = [
                this.heap[min],
                this.heap[node],
            ];
            node = min;
        }
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    left(i) {
        return 2 * i + 1;
    }
    right(i) {
        return 2 * i + 2;
    }
}
exports.default = PriorityQueue;
