/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 将字符串转数组，反转，进位计算
    let aArr = a.split('').reverse();
    let bArr = b.split('').reverse();
    let MaxLen = Math.max(aArr.length, bArr.length);
    let newArr = [];
    let upSeed = 0;
    for(let i=0;i<MaxLen;i++) {
        let sum = Number(aArr[i] || 0) + Number(bArr[i] || 0) + upSeed;
        if (sum > 1) {
            newArr.push(sum%2);
            upSeed = parseInt(sum/2);
        } else {
            newArr.push(sum);
            upSeed = 0;
        }
    }
    if (upSeed !== 0) {
        newArr.push(upSeed);
    }
    return newArr.reverse().join('');
};
addBinary("1010","1011");

// 精度不够
// return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
