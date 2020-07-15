// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
  let cur = head;
  let prev = null;
  while (cur) {
    let tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }
  head = prev;
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
