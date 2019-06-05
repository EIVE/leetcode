/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 二分法
    if([0,1,2].includes(x)) return x;
    let left = 1, right = Number.MAX_SAFE_INTEGER;
    while (true) {
        mid = left + (right - left)/2;
        if (mid > x/mid) {
            right = mid - 1;
        } else {
            if (mid + 1 > x/(mid + 1))
                return mid;
            left = mid + 1;
        }
    }
};

// 原生方法
// return parseInt(Math.sqrt(x));

// 牛顿迭代法
// var candidate = x / 3;
// while(Math.abs(x - candidate * candidate) > 0.01){
//     candidate = (candidate + x / candidate) / 2;
// }
// return parseInt(candidate);