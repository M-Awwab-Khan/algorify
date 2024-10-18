"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinarySearchTree {
    constructor() {
        this.root = undefined;
        this.size = 0;
    }
    findParent(node, value) {
        if (value <= node.value) {
            if (!node.left)
                return node;
            return this.findParent(node.left, value);
        }
        else {
            if (!node.right)
                return node;
            return this.findParent(node.right, value);
        }
    }
    insert(value) {
        let node = {
            value: value,
            left: undefined,
            right: undefined,
        };
        if (!this.root) {
            this.root = node;
            this.size++;
            return;
        }
        let parent = this.findParent(this.root, value);
        if (!parent)
            throw new Error("Unable to find insertion position.");
        if (value <= parent.value) {
            parent.left = node;
        }
        else {
            parent.right = node;
        }
        this.size++;
    }
    exist(node, value) {
        if (!node)
            return false;
        if (node.value === value)
            return true;
        if (value <= node.value) {
            return this.exist(node.left, value);
        }
        return this.exist(node.right, value);
    }
    contains(value) {
        return this.exist(this.root, value);
    }
    findNode(node, value) {
        if (!node)
            return undefined;
        if (node.value === value)
            return node;
        if (value <= node.value)
            return this.findNode(node.left, value);
        return this.findNode(node.right, value);
    }
    remove(value) {
        const originalSize = this.size;
        this.root = this.removeNode(this.root, value);
        if (this.size === originalSize) {
            throw new Error("Specified value was not found");
        }
    }
    removeNode(node, value) {
        if (!node)
            return undefined;
        if (value > node.value) {
            node.right = this.removeNode(node.right, value);
        }
        else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
        }
        else {
            this.size--;
            if (!node.left && !node.right) {
                return undefined;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            let successor = this.findSuccessor(node);
            if (successor) {
                node.value = successor.value;
                node.right = this.removeNode(node.right, successor.value);
            }
        }
        return node;
    }
    findSuccessor(node) {
        let successor = node.right;
        while (successor.left) {
            successor = successor.left;
        }
        return successor;
    }
    findMin() {
        if (!this.root)
            return undefined;
        let curr = this.root;
        while (curr.left) {
            curr = curr.left;
        }
        return curr.value;
    }
    findMax() {
        if (!this.root)
            return undefined;
        let curr = this.root;
        while (curr.right) {
            curr = curr.right;
        }
        return curr.value;
    }
    traverseInOrder(node, path) {
        if (!node)
            return;
        this.traverseInOrder(node.left, path);
        path.push(node.value);
        this.traverseInOrder(node.right, path);
    }
    inOrderTraversal() {
        let path = [];
        this.traverseInOrder(this.root, path);
        return path;
    }
    traversePreOrder(node, path) {
        if (!node)
            return;
        path.push(node.value);
        this.traversePreOrder(node.left, path);
        this.traversePreOrder(node.right, path);
    }
    preOrderTraversal() {
        let path = [];
        this.traversePreOrder(this.root, path);
        return path;
    }
    traversePostOrder(node, path) {
        if (!node)
            return;
        this.traversePostOrder(node.left, path);
        this.traversePostOrder(node.right, path);
        path.push(node.value);
    }
    postOrderTraversal() {
        let path = [];
        this.traversePostOrder(this.root, path);
        return path;
    }
    getSize() {
        return this.size;
    }
    calculateHeight(node) {
        if (!node)
            return 0;
        return (1 +
            Math.max(this.calculateHeight(node.left), this.calculateHeight(node.right)));
    }
    getHeight() {
        return this.calculateHeight(this.root);
    }
    isEmpty() {
        return this.size === 0;
    }
    clear() {
        this.root = undefined;
        this.size = 0;
    }
}
exports.default = BinarySearchTree;
