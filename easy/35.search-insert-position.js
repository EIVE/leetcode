/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (var i=0,len=nums.length;i<len;i++) {
        if(nums[i] === target || target < nums[0]) {
            return i;
        } else if ((nums[i] < target && nums[i+1] > target) || (target > nums[i] && i === len-1)) {
            return i+1;
        }
    }
};
searchInsert([1,3,5,6],7);

// var index = nums.indexOf(target),
//     arr;
// if ( index !== -1) {
//     return index;
// } else {
//     arr = nums.push(target).sort((x,y) => x-y);
//     return arr.indexOf(target);
// }