/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 快慢指针 只要有闭合p1=p2
    if (!head || !head.next) return false;
    let p1 = head, p2 = head.next;
    while(p2 && p2.next) {
        if (p1 === p2) return true;
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return false;
};

// var hasCycle = function(head) {
//     let cur = head;
//     while(cur !== null) {
//         if (!cur.next) return false;
//         if (cur.next.checked) return true;
//         else cur.next.checked = true;
//     }
//     return false;
// }

