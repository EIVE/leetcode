/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    let index = this.min.findIndex(item => x <= item);
    if (index > -1) {
        this.min.splice(index,0,x)
    } else {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let temp = this.stack.pop();
    let index = this.min.findIndex(item => item === temp);
    this.min.splice(index,1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

