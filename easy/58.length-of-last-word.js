/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastStr = s.trim().split(' ').pop();
    return lastStr.length;
};

// let arr = s.split(' ');
// for (var i=arr.length-1; i>0; i--) {
//     if(arr[i] !== '') {
//         return arr[i].length;
//     }
// }