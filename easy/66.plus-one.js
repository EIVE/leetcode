/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    step(digits.length-1);
    return digits;
    function step(n) {
        if (digits[n] === 9) {
            digits[n] = 0;
            if (n === 0) {
                digits.unshift(1);
            } else {
                step(n-1);
            }
        } else {
            digits[n]++;
        }
    }
};

// 有问题，因为number的最大安全正数为2^53 - 1,大于它的位数会显示0
// let num = Number(digits.join('')) + 1;
// return num.toString().split('');
