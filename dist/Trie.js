"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trie {
    constructor() {
        this.root = { children: new Map(), isEndOfWord: false };
    }
    insert(item) {
        let curr = this.root;
        for (const char of item) {
            if (!curr.children.has(char)) {
                curr.children.set(char, { children: new Map(), isEndOfWord: false });
            }
            curr = curr.children.get(char);
        }
        curr.isEndOfWord = true;
    }
    getMatches(node, partial, matches) {
        if (node.isEndOfWord) {
            matches.push(partial);
        }
        for (const [char, n] of node.children.entries()) {
            this.getMatches(n, partial + char, matches);
        }
    }
    find(partial) {
        let matches = [];
        let curr = this.root;
        for (const char of partial) {
            if (!curr.children.has(char)) {
                return [];
            }
            curr = curr.children.get(char);
        }
        this.getMatches(curr, partial, matches);
        return matches;
    }
    isWord(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            if (!curr.children.has(char))
                return false;
            curr = curr.children.get(char);
        }
        return curr.isEndOfWord;
    }
    delete(item) {
        this.deleteRecursive(this.root, item, 0);
    }
    deleteRecursive(node, word, depth) {
        if (depth === word.length) {
            if (!node.isEndOfWord)
                return false;
            node.isEndOfWord = false;
            return node.children.size === 0;
        }
        if (!node.children.get(word[depth])) {
            return false;
        }
        const shouldDeleteChildNode = this.deleteRecursive(node.children.get(word[depth]), word, depth + 1);
        if (shouldDeleteChildNode) {
            node.children.delete(word[depth]);
            return node.children.size === 0 && !node.isEndOfWord;
        }
        return false;
    }
}
exports.default = Trie;
