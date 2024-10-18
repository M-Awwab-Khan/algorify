"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = quick_sort;
function partition(arr, lo, hi) {
    const pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; ++j) {
        if (arr[j] <= pivot) {
            i++;
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    arr[hi] = arr[i + 1];
    arr[i + 1] = pivot;
    return i + 1;
}
function qs(arr, lo, hi) {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        qs(arr, lo, p - 1);
        qs(arr, p + 1, hi);
    }
}
function quick_sort(arr) {
    qs(arr, 0, arr.length - 1);
}
