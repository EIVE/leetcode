/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for(let i=0; i<k; i++){
//         const temp = nums.pop();
//         nums.unshift(temp);
//     }
// };

var rotate = function(nums, k) {
    k %= nums.length
    nums.unshift(...nums.splice(nums.length - k, k));
};