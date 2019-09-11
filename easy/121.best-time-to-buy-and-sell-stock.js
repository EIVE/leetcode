/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    for (let i=0,len=prices.length; i<len; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        const calProfit = prices[i] - min;
        if (calProfit > profit) {
            profit = calProfit;
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))

