/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const size = nums.length;
    if (size < 3) {
        return null;
    }
    nums.sort((a,b) => a - b);
    let res = target - (nums[0] + nums[1] + nums[2]);
    for(let i=0; i<size-2; i++) {
        let first = i + 1, last = size - 1;
        while (first < last) {
            let sum = nums[i] + nums[first] + nums[last];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                while (nums[first] === nums[++first]);
            } else {
                while (nums[last] === nums[--last]);
            }
            // 保存与target最近的值
            if (Math.abs(sum-target) < Math.abs(res)) {
                res = target - sum;
            }
        }
    }
    return target - res;
};
// @lc code=end

