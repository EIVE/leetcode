/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// 异或运算 任何数与0异或等于它本身，相同的数异或为0，且a^b^c=a^c^b
var singleNumber = function(nums) {
    return nums.reduce((prev, cur) => cur ^ prev, 0);
};

// var singleNumber = function(nums) {
//     let arr = [];
//     for(let i = 0, len = nums.length; i < len; i++) {
//         const index = arr.indexOf(nums[i]);
//         if (index > -1) {
//             arr.splice(index, 1);
//         } else {
//             arr.push(nums[i]);
//         }
//     }
//     return arr[0];
// };
