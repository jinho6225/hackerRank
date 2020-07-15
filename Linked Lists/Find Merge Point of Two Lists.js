/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let nextA = headA;
  let nextB = headB;

  while (nextA !== nextB) {
    if (nextA.next) nextA = nextA.next;
    else nextA = headB;
    if (nextB.next) nextB = nextB.next;
    else nextB = headA;
  }

  return nextB.data;
}

function findMergeNode(headA, headB) {
    let map = new Map()
    while(headA) {
        map.set(headA, true)
        headA = headA.next
    }
    while (headB) {
        if (map.has(headB)) {
            return headB.data
        }
        headB = headB.next
    }
}


function findMergeNode(headA, headB) {
  let nextA = headA;
  while (nextA) {
    nextA.visited = true;
    nextA = nextA.next;
  }

  let nextB = headB;
  while (!nextB.visited) {
    nextB = nextB.next;
  }

  return nextB.data;
}
function main() {
