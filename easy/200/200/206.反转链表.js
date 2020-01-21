const LinkList = require('../../../linklist/linklist')
let linklist = new LinkList.LinkList()
linklist.push(2)
linklist.push(3)
linklist.push(2)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let p = null
  let h = head
  while(h) {
    let pre=h.next
    console.log(h)
    h.next=p
    pre.next=h
      p=h
      console.log(h)
  }
  h.print()
};
reverseList(linklist)