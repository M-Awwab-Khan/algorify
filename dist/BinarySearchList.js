"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bs_list;
function bs_list(haystack, needle) {
    let lo = 0;
    let hi = haystack.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (haystack[mid] == needle) {
            return true;
        }
        else if (needle < haystack[mid]) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return false;
}
