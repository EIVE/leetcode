/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let str = '';
    while(n > 0) {
        let temp1 = parseInt((n - 1)%26);
        n = parseInt((n - 1)/26);
        str = String.fromCharCode(temp1 + 65) + str;
    }
    return str;
};

