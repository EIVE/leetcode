/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex == 0) return [1];
    let numArray = [];
    for(let i = 1; i <= rowIndex + 1; i++) {
        let tempArr = Array(i).fill(1);
        const tLen = tempArr.length;
        if (tLen > 2) {
            for(let j=2; j < tLen; j++) {
                tempArr[j-1] = numArray[i-2][j-2] + numArray[i-2][j-1];
            }
        }
        numArray.push(tempArr);
    }
    return numArray[rowIndex];
};

