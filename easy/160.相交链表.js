/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * 思路： 如果两个链表相交，那么相交点之后的长度是相同的。
 * 让两个链表从同距离末尾同等距离的位置开始遍历。这个位置只能是较短链表的头结点位置。
 * 为此，我们必须消除两个链表的长度差
 * 1. 指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
 * 2. 如果 pA 到了末尾，则 pA = headB 继续遍历
 * 3. 如果 pB 到了末尾，则 pB = headA 继续遍历
 * 4. 比较长的链表指针指向较短链表head时，长度差就消除了
 */
// var getIntersectionNode = function(headA, headB) {
//     if (!headA || !headB) return null;
//     let p = headA, q = headB;
//     while (p !== q) {
//         p = p === null ? headB : p.next;
//         q = q === null ? headA : q.next;
//     }
//     return p;
// };

var getIntersectionNode = function(headA, headB) {
    
}
