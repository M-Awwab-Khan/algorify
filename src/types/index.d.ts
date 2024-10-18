export declare type Point = {
    x: number;
    y: number;
}

export declare type ListNode<T> = {
    value: T,
    next?: ListNode<T>,
    prev?: ListNode<T>,
}

export declare interface List<T> {
    get length(): number;
    removeAt(index: number): T | undefined;
    remove(item: T): T | undefined;
    get(index: number): T | undefined;
    prepend(item: T): void;
    append(item: T): void;
    insertAt(item: T, idx: number): void;
}

export declare type CompleteGraphEdge = { from: number; to: number; weight: number };
export declare type GraphEdge = { to: number; weight: number };
export declare type WeightedAdjacencyList = GraphEdge[][];
export declare type WeightedAdjacencyMatrix = number[][]; // A number means weight

export declare type AdjacencyList = number[][];
export declare type AdjacencyMatrix = number[][]; // A 1 means connected

export declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

export declare type GeneralNode<T> = {
    value: T;
    children: GeneralNode<T>[];
};

export declare interface ILRU<K, V> {
    update(key: K, value: V): void;
    get(key: K): V | undefined;
}

export declare type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

export declare interface Edge {
    to: number;
    weight: number;
}
export declare type TrieNode = {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
}
