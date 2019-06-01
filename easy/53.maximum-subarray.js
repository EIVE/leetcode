/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    var maxSum = nums[0], curSum = nums[0];
    for(var i=1, len = nums.length; i<len;i++) {
        if(nums[i] > curSum + nums[i]) {
            curSum = nums[i];
        } else {
            curSum = curSum + nums[i];
        }
        if (maxSum < curSum) {
            maxSum = curSum;
        }
    }
    return maxSum;
};

