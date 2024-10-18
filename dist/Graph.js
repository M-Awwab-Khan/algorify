"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = __importDefault(require("./Queue"));
class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = new Map();
        this.isDirected = isDirected;
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2, weight = 1) {
        var _a, _b;
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push({ to: vertex2, weight: weight });
        if (!this.isDirected) {
            (_b = this.adjacencyList
                .get(vertex2)) === null || _b === void 0 ? void 0 : _b.push({ to: vertex1, weight: weight });
        }
    }
    removeEdge(vertex1, vertex2) {
        var _a, _b;
        this.adjacencyList.set(vertex1, ((_a = this.adjacencyList
            .get(vertex1)) === null || _a === void 0 ? void 0 : _a.filter((edge) => edge.to !== vertex2)) || []);
        if (!this.isDirected) {
            this.adjacencyList.set(vertex2, ((_b = this.adjacencyList
                .get(vertex2)) === null || _b === void 0 ? void 0 : _b.filter((edge) => edge.to !== vertex1)) || []);
        }
    }
    removeVertex(vertex) {
        this.adjacencyList.delete(vertex);
        for (let [key, edges] of this.adjacencyList) {
            this.adjacencyList.set(key, edges.filter((edge) => edge.to !== vertex));
        }
    }
    getAdjacencyList() {
        return this.adjacencyList;
    }
    hasEdge(vertex1, vertex2) {
        var _a;
        return (((_a = this.adjacencyList
            .get(vertex1)) === null || _a === void 0 ? void 0 : _a.some((edge) => edge.to === vertex2)) || false);
    }
    bfs(source, target) {
        let q = new Queue_1.default();
        let seen = new Map();
        let prev = new Map();
        q.enqueue(source);
        seen.set(source, true);
        prev.set(source, -1);
        while (!q.isEmpty()) {
            let curr = q.deque();
            if (curr === target)
                break;
            let neighbors = this.adjacencyList.get(curr) || [];
            for (let neighbour of neighbors) {
                if (!seen.has(neighbour.to)) {
                    q.enqueue(neighbour.to);
                    seen.set(neighbour.to, true);
                    prev.set(neighbour.to, curr);
                }
            }
        }
        if (!prev.has(target))
            return null;
        let path = [];
        for (let at = target; at !== -1; at = prev.get(at)) {
            path.push(at);
        }
        path.reverse();
        return path;
    }
    walk(curr, seen, path, target) {
        if (curr === target) {
            path.push(curr);
            return true;
        }
        if (seen.has(curr))
            return false;
        seen.set(curr, true);
        path.push(curr);
        let neighbors = this.adjacencyList.get(curr) || [];
        for (let i = 0; i < neighbors.length; ++i) {
            let edge = neighbors[i];
            if (this.walk(edge.to, seen, path, target)) {
                return true;
            }
        }
        path.pop();
        return false;
    }
    dfs(source, target) {
        let seen = new Map();
        let path = [];
        if (this.walk(source, seen, path, target))
            return path;
        return null;
    }
}
exports.default = Graph;
