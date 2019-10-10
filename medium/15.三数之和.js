/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let res = [], size = nums.length;
    if (nums[0]<=0 && nums[size-1]>=0) { // 如果数组符号相同（同为正数或负数），无解
        for(let i=0; i<size-2;) {
            if(nums[i]>0) break; // 若最左侧的数字为正数，无解
            let first = i + 1, last = size - 1;
            do {
                if (first >= last || nums[i] * nums[last] > 0) break; // 两者相遇，或者三者同符号，则退出
                let result = nums[i] + nums[first] + nums[last];
                if (result === 0) { // 如果可以组队
                  res.push([nums[i], nums[first], nums[last]])
                }
                if (result <= 0) { // 数字不够大，把first往右移一位
                  while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
                } else { // 数字太大，把last那边左移一位
                  while (first < last && nums[last] === nums[--last]) {}
                }
            } while (first < last);
            while (nums[i] === nums[++i]) {};
        }
    }
    return res;
};
// @lc code=end

