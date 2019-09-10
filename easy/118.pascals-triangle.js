/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    let numArray = [];
    for(let i = 1; i <= numRows; i++) {
        let tempArr = Array(i).fill(1);
        const tLen = tempArr.length;
        if (tLen > 2) {
            for(let j=2; j < tLen; j++) {
                tempArr[j-1] = numArray[i-2][j-2] + numArray[i-2][j-1];
            }
        }
        numArray.push(tempArr);
    }
    return numArray;
};
console.log(generate(5))

