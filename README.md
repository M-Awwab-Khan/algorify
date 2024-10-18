# Algorify

**Algorify** is a comprehensive TypeScript library that provides a collection of data structures and algorithms. It is designed to simplify the use of common structures like linked lists, trees, graphs, and more in TypeScript-based projects. Algorify is suitable for learning, development, and competitive programming scenarios.

## Features
- **Data Structures**: Includes commonly used data structures such as:
  - Linked Lists
  - Binary Search Trees
  - Disjoint Sets
  - Graphs (Adjacency Lists and Matrices)
  - LRU Cache, and more.

- **Algorithms**: Includes a wide range of algorithms for:
  - Sorting
  - Searching
  - Graph traversal (BFS, DFS)
  - Union-Find and others.

- **Fully TypeScript Supported**: Benefit from TypeScript's static typing, making code more reliable and maintainable.

## Installation

You can install Algorify via npm:

```bash
npm install algorify
```

## Usage

Import the relevant data structure or algorithm into your TypeScript file and use it as needed. For example, to use the `SinglyLinkedList`:

```typescript
import { SinglyLinkedList } from 'algorify';

const list = new SinglyLinkedList<number>();
list.append(1);
list.prepend(2);
list.insertAt(3, 1);

console.log(list.get(1)); // Output: 3
```

### Examples

#### 1. Disjoint Set (Union-Find):

```typescript
import { DisjointSet } from 'algorify';

const ds = new DisjointSet(5);
ds.makeSet(0);
ds.makeSet(1);
ds.union(0, 1);

console.log(ds.connected(0, 1)); // Output: true
```

#### 2. Binary Search Tree:

```typescript
import { BinarySearchTree } from 'algorify';

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(15)); // Output: true
```

## API Reference

### Data Structures

- **SinglyLinkedList**
  - `prepend(item: T)`: Adds an item to the start of the list.
  - `append(item: T)`: Adds an item to the end of the list.
  - `insertAt(item: T, idx: number)`: Inserts an item at the specified index.
  - `removeAt(index: number)`: Removes an item at the specified index.
  - `get(index: number)`: Retrieves the item at the given index.

- **DisjointSet**
  - `makeSet(i: number)`: Creates a set for element `i`.
  - `union(i: number, j: number)`: Merges the sets containing `i` and `j`.
  - `find(i: number)`: Finds the representative of the set containing `i`.
  - `connected(i: number, j: number)`: Checks if `i` and `j` are in the same set.

- **BinarySearchTree**
  - `insert(value: T)`: Inserts a value into the binary search tree.
  - `search(value: T)`: Checks if a value exists in the tree.
  - `remove(value: T)`: Removes a value from the tree.

### Algorithms

- **Sorting**
  - Quick Sort, Merge Sort, Insertion Sort, etc.

- **Graph Algorithms**
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Dijkstra's Algorithm, etc.

## Testing

To run the tests:

```bash
npm test
```

Tests are written in Jest, and the test files are located in the `__tests__` directory.

## Build

To build the library:

```bash
npm run build
```

This will compile the TypeScript files to JavaScript in the `dist` directory.

## License

This project is licensed under the ISC License.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests. Before submitting, ensure that your code follows the existing code style and all tests pass.

## Author

**Muhammad Awwab Khan**

---

Happy coding with **Algorify**!
