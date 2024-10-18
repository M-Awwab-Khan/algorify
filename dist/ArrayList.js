"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayList {
    constructor(size = 0) {
        this.array = new Array(size);
        this.length = 0;
    }
    prepend(item) {
        for (let i = this.length - 1; i >= 0; --i) {
            this.array[i + 1] = this.array[i];
        }
        this.array[0] = item;
        this.length++;
    }
    insertAt(item, idx) {
        for (let i = this.length - 1; i >= idx; --i) {
            this.array[i + 1] = this.array[i];
        }
        this.array[idx] = item;
        this.length++;
    }
    append(item) {
        this.array[this.length] = item;
        this.length++;
    }
    remove(item) {
        let idx = this._search(item);
        if (idx != -1) {
            for (let i = idx; i < this.length - 1; ++i) {
                this.array[i] = this.array[i + 1];
            }
            this.array[this.length - 1] = undefined;
            this.length--;
            return item;
        }
        return undefined;
    }
    get(idx) {
        if (idx >= 0 && idx < this.length) {
            return this.array[idx];
        }
        return undefined;
    }
    removeAt(idx) {
        if (idx >= 0 && idx < this.length) {
            let element = this.array[idx];
            for (let i = idx; i < this.length - 1; ++i) {
                this.array[i] = this.array[i + 1];
            }
            this.array[this.length - 1] = undefined;
            this.length--;
            return element;
        }
        return undefined;
    }
    _search(item) {
        for (let i = 0; i < this.length; ++i) {
            if (this.array[i] === item) {
                return i;
            }
        }
        return -1;
    }
}
exports.default = ArrayList;
