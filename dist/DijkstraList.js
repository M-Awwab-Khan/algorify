"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dijkstra_list;
const MinHeap_1 = __importDefault(require("./MinHeap"));
function dijkstra_list(source, target, graph) {
    const dist = new Array(graph.length).fill(Infinity);
    const prev = new Array(graph.length).fill(-1);
    const visited = new Array(graph.length).fill(false);
    const queue = new MinHeap_1.default();
    dist[source] = 0;
    queue.insert(source);
    while (!queue.isEmpty()) {
        const current = queue.delete();
        if (current === target)
            break;
        visited[current] = true;
        for (const neighbor of graph[current]) {
            const { to, weight } = neighbor;
            if (visited[to])
                continue;
            const newDist = dist[current] + weight;
            if (newDist < dist[to]) {
                dist[to] = newDist;
                prev[to] = current;
                queue.insert(to);
            }
        }
    }
    if (dist[target] === Infinity)
        return [];
    let current = target;
    let path = [];
    while (prev[current] !== -1) {
        path.push(current);
        current = prev[current];
    }
    path.push(source);
    return path.reverse();
}