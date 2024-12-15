import { AVLTreeNode } from "./types";

export default class AVLTree<T> {
  private root?: AVLTreeNode<T>;
  private size: number;

  constructor() {
    this.root = undefined;
    this.size = 0;
  }

  insertHelper(root: AVLTreeNode<T> | undefined, value: T): AVLTreeNode<T> {
    if (!root) {
      return {
        value: value,
        left: undefined,
        right: undefined,
        height: 0,
      } as AVLTreeNode<T>;
    }
    if (value <= root.value) {
      root.left = this.insertHelper(root.left, value);
    } else {
      root.right = this.insertHelper(root.right, value);
    }
    root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
    const bf = this.balanceFactor(root);
    if (bf > 1 && value < (root.left as AVLTreeNode<T>).value) {
      return this.rightRotate(root);
    }
    if (bf < -1 && value > (root.right as AVLTreeNode<T>).value) {
      return this.leftRotate(root);
    }
    if (bf > 1 && value > (root.left as AVLTreeNode<T>).value) {
      root.left = this.leftRotate(root.left as AVLTreeNode<T>);
      return this.rightRotate(root);
    }
    if (bf < -1 && value < (root.right as AVLTreeNode<T>).value) {
      root.right = this.rightRotate(root.right as AVLTreeNode<T>);
      return this.leftRotate(root);
    }
    return root;
  }
  insert(value: T): void {
    this.root = this.insertHelper(this.root, value);
    this.size++;
  }

  private successor(node: AVLTreeNode<T>): AVLTreeNode<T> {
    if (!node.left) return node;
    return this.successor(node.left);
  }

  deleteHelper(
    root: AVLTreeNode<T> | undefined,
    value: T
  ): AVLTreeNode<T> | undefined {
    if (!root) return undefined;
    if (value < root.value) {
      root.left = this.deleteHelper(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteHelper(root.right, value);
    } else {
      if (!root.left || !root.right) {
        return root.left || root.right;
      }
      let min = this.successor(root.right);
      root.value = min.value;
      root.right = this.deleteHelper(root.right, min.value);
    }
    root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
    const bf = this.balanceFactor(root);
    if (bf > 1 && this.balanceFactor(root.left) >= 0) {
      return this.rightRotate(root);
    }
    if (bf < -1 && this.balanceFactor(root.right) <= 0) {
      return this.leftRotate(root);
    }
    if (bf > 1 && this.balanceFactor(root.left) < 0) {
      root.left = this.leftRotate(root.left as AVLTreeNode<T>);
      return this.rightRotate(root);
    }
    if (bf < -1 && this.balanceFactor(root.right) > 0) {
      root.right = this.rightRotate(root.right as AVLTreeNode<T>);
      return this.leftRotate(root);
    }
    return root;
  }

  delete(value: T): void {
    this.root = this.deleteHelper(this.root, value);
    this.size--;
  }
  rightRotate(node: AVLTreeNode<T>): AVLTreeNode<T> {
    const B = node.left as AVLTreeNode<T>;
    node.left = B.right;
    B.right = node;
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
    return B;
  }

  leftRotate(node: AVLTreeNode<T>): AVLTreeNode<T> {
    const B = node.right as AVLTreeNode<T>;
    node.right = B.left;
    B.left = node;
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
    return B;
  }

  balanceFactor(node: AVLTreeNode<T> | undefined): number {
    if (!node) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  height(node: AVLTreeNode<T> | undefined): number {
    if (!node) return -1;
    return node.height;
  }

  inOrderTraversal(): T[] {
    let path: T[] = [];
    this.traverseInOrder(this.root, path);
    return path;
  }

  traverseInOrder(node: AVLTreeNode<T> | undefined, path: T[]): void {
    if (!node) return;

    this.traverseInOrder(node.left, path);
    path.push(node.value);
    this.traverseInOrder(node.right, path);
  }

  preOrderTraversal(): T[] {
    let path: T[] = [];
    this.traversePreOrder(this.root, path);
    return path;
  }

  traversePreOrder(node: AVLTreeNode<T> | undefined, path: T[]): void {
    if (!node) return;

    path.push(node.value);
    this.traversePreOrder(node.left, path);
    this.traversePreOrder(node.right, path);
  }

  postOrderTraversal(): T[] {
    let path: T[] = [];
    this.traversePostOrder(this.root, path);
    return path;
  }

  traversePostOrder(node: AVLTreeNode<T> | undefined, path: T[]): void {
    if (!node) return;

    this.traversePostOrder(node.left, path);
    this.traversePostOrder(node.right, path);
    path.push(node.value);
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    this.root = undefined;
    this.size = 0;
  }

  findMin(): T | undefined {
    if (!this.root) return undefined;
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }

  findMax(): T | undefined {
    if (!this.root) return undefined;
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }

  contains(value: T): boolean {
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
