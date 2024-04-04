/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead: ListNode = new ListNode();
  let current: ListNode | null = dummyHead;
  let carry: number = 0;
 
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    let sum = v1 + v2 + carry;
    carry = sum >= 10 ? 1 : 0;

    current.next = new ListNode(sum % 10);
    current = current.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  // If there's a remaining carry, add a new node with carry-over value
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}