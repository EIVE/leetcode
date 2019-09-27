/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const str1=n.toString(2);
    const arr1=str1.split("");
    // 手动补零
    while(arr1.length<32){
        arr1.unshift(0);
    }
    arr1.reverse();
    const str2=arr1.join("");
    return parseInt(str2,2);
};

// var reverseBits = function(n) {
//     let str = n.toString(2)
//     let index = 0, len = str.length
//     while(len < 32) {
//         str = '0' + str
//         len++
//     }
//     for (let i = 0; i < 32; i++) {
//         if (str[32 - i - 1] === '1') {
//         index = index + Math.pow(2, 32 - i - 1)
//         }
//     }
//     return index
// }

