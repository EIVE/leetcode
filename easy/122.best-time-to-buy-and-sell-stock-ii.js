/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let i = 0;
    let profits = 0;
    for (j = 1; j < prices.length; ) {
        if (prices[j] > prices[i]) {
            profits += prices[j] - prices[i];
            j++;
            i++;
        } else {
            i++;
            j++;
        }
    }
    return profits;
};

// var maxProfit = function(prices) {
//     var min = Number.MAX_VALUE;
//     var maxprofit = 0;  
//     prices.map((e,i)=>{
//         if(e<min) min = e;
//         else if(e-min>0){
//             maxprofit += e-min;
//             min = e;
//         }
//     })
//     return maxprofit;
// }

console.log(maxProfit([7,1,5,3,6,4]))

