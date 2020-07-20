'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let arr1 = [], arr2 = []
    while(head1) {
        arr1.push(head1.data)
        head1 = head1.next
    }
    while(head2) {
        arr2.push(head2.data)
        head2 = head2.next
    }
    let result = arr1.concat(arr2)
    result = result.sort((a,b) => a-b)

    let node = new SinglyLinkedListNode(result[0])
    let cur = node
    let i = 1
    while ( i < result.length) {
        cur.next = new SinglyLinkedListNode(result[i])
        cur = cur.next
        i++
    }
    return node
}

function main() {



// Another solution added
// Complete the mergeLists function below.
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let node = new SinglyLinkedListNode();
    let currentNode = node;
    while (head1 !== null && head2 !== null) {
        if (head1.data <= head2.data) {
        currentNode.next = new SinglyLinkedListNode(head1.data);
        head1 = head1.next;
        } else {
        currentNode.next = new SinglyLinkedListNode(head2.data);
        head2 = head2.next;
        }
        currentNode = currentNode.next;
    }
    if (head2 !== null) {
        currentNode.next = head2;
    }
    if (head1 !== null) {
        currentNode.next = head1;
    }
    node = node.next;
    return node;
}

function main() {
