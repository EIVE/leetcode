/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 从两头开始查找
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (numbers[left] + numbers[right] !== target) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        }
    }
    return [left + 1, right + 1];
};

// 利用map
// var twoSum = function(numbers, target) {
//     let map = new Map(), result = [];
//     for (let i = 0, len = numbers.length; i < len; i++) {
//         if (map.has(numbers[i])) { 
//             result.push(map.get(numbers[i]));
//             result.push(i+1);
//         }
//         map.set(target - numbers[i], i+1);
//     }
//     return result;
// };

