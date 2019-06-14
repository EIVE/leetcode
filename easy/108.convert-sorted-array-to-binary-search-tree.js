/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function sorted (nums, start, end) {
        if (start > end) {
            return null;
        }
        let mid = Math.round((end + start) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = sorted(nums, start, mid-1);
        root.right = sorted(nums, mid+1, end);
        return root;
    }
    return sorted(nums, 0, nums.length-1);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([1,2,2,3,null,null,3,4,null,null,4]));

