/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */

// 只要需要知道质因数含有 5 的数字有多少个
var trailingZeroes = function(n) {
    let count = 0;
    while(5 <= n) {
        n = Math.floor(n/5);
        count+=n;
    }
    return count;
};

