"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = linear_search;
function linear_search(haystack, needle) {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
