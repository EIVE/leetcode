/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length;i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i,1);
            i--;
        }
    }
};


// var arr = [];
// var seen;
// for(var i=0,len=nums.length; i<len;i++) {
//     if (!i || seen !== nums[i]) {
//         arr.push(nums[i]);
//     }
//     seen = nums[i];
// }
// return arr;

// return nums.filter(function(item, index, array){
//     return !index || item !== array[index - 1]
// })