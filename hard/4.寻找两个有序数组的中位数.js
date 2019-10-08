/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 合并两个数组，排序后取中位数
var findMedianSortedArrays = function(nums1, nums2) {
    for (let i=0; i<nums2.length; i++) {
        nums1.push(nums2[i]);
    }
    nums1 = nums1.sort((a,b) => a - b);
    if (nums1.length % 2 === 0) {
        return (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2
    }
    return nums1[(nums1.length - 1) / 2]
};

// @lc code=end

