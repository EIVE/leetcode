/*
 * @lc app=leetcode id=836 lang=javascript
 *
 * [836] Rectangle Overlap
 */
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    if (rec1[0] >= rec2[2] || rec2[0] >= rec1[2] || rec1[1] >= rec2[3] || rec2[1] >= rec1[3]) {
        return false;
    }
    return true;
};

// var y = rec2[3] - rec1[3];
// var x = rec2[2] - rec1[2];
// var square = Math.pow(x,2) + Math.pow(y,2);
// var rec1Square = Math.pow(rec1[3] - rec1[1], 2) + Math.pow(rec2[3] - rec2[1], 2);
// if (rec1Square > square) {
//     return true;
// }
// return false;
