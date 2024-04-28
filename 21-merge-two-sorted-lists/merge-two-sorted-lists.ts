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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  // Create a dummy node to serve as the head of the merged list
  const dummy: ListNode = new ListNode();
  let current: ListNode | null = dummy;

  // Merge the lists until one of them becomes null
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Append the remaining nodes of list1 or list2
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the head of the merged list (excluding the dummy node)
  return dummy.next;
}
