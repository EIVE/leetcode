/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     const str1 = n.toString(2);
//     let sum = 0;
//     for (let i of str1) {
//         if (i === '1') {
//             sum++;
//         }
//     }
//     return sum;
// };

var hammingWeight = function(n) {
    let sum = 0;
    while (n) {
        if (n%2) sum++;
        n = parseInt(n/2);
    }
    return sum;
};


