import AVLTree from "../AVLTree";

describe("AVL Tree", () => {
  let tree: AVLTree<number>;

  beforeEach(() => {
    tree = new AVLTree<number>();
  });

  test("Insert elements and maintain balance", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    expect(tree.inOrderTraversal()).toEqual([10, 20, 30]);
    expect(tree.preOrderTraversal()).toEqual([20, 10, 30]); // Balanced
  });

  test("Delete a leaf node", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.delete(30);
    expect(tree.inOrderTraversal()).toEqual([10, 20]);
  });

  test("Delete a node with one child", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(15);
    tree.delete(20);
    expect(tree.inOrderTraversal()).toEqual([10, 15]);
  });

  test("Delete a node with two children", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    tree.insert(15);
    tree.insert(30);
    tree.delete(20);
    expect(tree.inOrderTraversal()).toEqual([5, 10, 15, 30]);
  });

  test("Find minimum and maximum", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    expect(tree.findMin()).toEqual(5);
    expect(tree.findMax()).toEqual(20);
  });

  test("Check size and isEmpty", () => {
    expect(tree.isEmpty()).toBe(true);
    tree.insert(10);
    expect(tree.getSize()).toBe(1);
    expect(tree.isEmpty()).toBe(false);
  });

  test("Clear the tree", () => {
    tree.insert(10);
    tree.insert(20);
    tree.clear();
    expect(tree.isEmpty()).toBe(true);
    expect(tree.inOrderTraversal()).toEqual([]);
  });

  test("Balance factor after insertions", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    expect(tree.preOrderTraversal()).toEqual([20, 10, 30]); // Right rotation
  });

  test("Balance factor after deletions", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.delete(10);
    expect(tree.preOrderTraversal()).toEqual([30, 20, 40]); // Rebalance
  });
});
