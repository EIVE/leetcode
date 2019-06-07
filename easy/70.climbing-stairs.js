/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 动态规划
    if ([1,2].includes(n)) return n;
    let a = 1, b = 2;
    for (let i = 3; i < n+1; i++) {
        [a, b] = [b, a+b];
    }
    return b;
};

// 递归
// let map = new Map();
// if ([1,2].includes(n)) return n;
// if (map.has(n)) {
//     return map.get(n);
// }
// let value = climbStairs(n-1) + climbStairs(n-2);
// map.set(n, value);
// return value;
