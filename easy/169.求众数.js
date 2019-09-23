/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/* for of 遍历，假设第一个数为众数，count计1，
其后的数字若相同则count 加1，否则count减1，
当count减为0时，假设此时新的num为众数，继续判断，
众数出现次数始终大于或等于所有元素个数的一半，
如果存在众数，最终一定存在一个num，使得count大于0
*/
var majorityElement = function(nums) {
    let result = nums[0], count = 0;
    for (let num of nums) {
        if (count === 0) {
            result = num;
        }
        num === result ? count++: count--;
    }
    return result;
};

// 用对象计数
// var majorityElement = function(nums) {
//     let count = {};
//     for (let num of nums) {
//         if (count.hasOwnProperty(num)) {
//             count[num]++
//         } else {
//             count[num] = 1;
//         }
//         if (count[num] > parseInt(nums.length / 2)) {
//             return num;
//         }
//     }
// };

