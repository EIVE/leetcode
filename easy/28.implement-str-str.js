/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var h = haystack.length, n = needle.length;
    var j = 0;
    if(!n) {
        return 0;
    }
    for(var i=0;i<h;i++) {
        if(haystack[i] === needle[0] && haystack.substr(i,n) === needle) {
            return i;
        }
    }
    return -1;
};

// var arr = haystack.split(needle);
// if (arr.length > 1) {
//     return arr[0].length;
// } else {
//     return -1;
// }