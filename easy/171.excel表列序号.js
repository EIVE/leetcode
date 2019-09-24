/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let arr = s.split('').reverse(), base = 1, sum = 0;
    for(let item of arr) {
        sum += (item.charCodeAt() - 64) * base;
        base *= 26;
    }
    return sum;
};

