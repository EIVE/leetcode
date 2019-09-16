/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     const str1 = s.replace(/[^0-9|A-Z|a-z]/ig,"").toLocaleLowerCase();
//     const str2 = str1.split('').reverse().join('');
//     if (str1 === str2) {
//         return true;
//     }
//     return false;
// };

var isPalindrome = function(s) {
    const str1 = s.toLocaleLowerCase().replace(/\W*|\D*/g,"");
    for (let i=0, len=str1.length; i<len/2; i++) {
        if (str1[i] !== str1[len - i - 1]) {
            return false;
        }
    }
    return true;
};
 

