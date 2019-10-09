/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, max = 0;
    while(i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
        if (height[i] > height[j]) { 
            j--;
        } else {
            i++;
        }
    }
    return max;
};
// @lc code=end

