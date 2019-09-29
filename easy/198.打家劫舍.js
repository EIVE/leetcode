/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划，“数组长度为n-2的结果+第n项”与“数组长度为n-1的结果”比较
var rob = function(nums) {
    let now = 0, last = 0;
    for(let i=0, len=nums.length; i < len; i++) {
        let temp = last;
        last = now;
        now = Math.max(temp + nums[i], now);
    }
    return now;
};

