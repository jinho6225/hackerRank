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

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    let newNode = new DoublyLinkedListNode(data)
    if (head.data > newNode.data) {
        newNode.next = head
        newNode.next.prev = newNode
        head = newNode
        return head
    } else {
        let curr = head
        let previous = null
        while (curr) {
            if (curr.data >= newNode.data) {
                let temp = curr
                curr = newNode
                previous.next = curr
                curr.prev = previous
                curr.next = temp
                temp.prev = curr
                break;
            } else if (!curr.next && curr.data < newNode.data) {
                curr.next = newNode
                newNode.prev = curr
                break;
            }
            previous = curr
            curr = curr.next
        }
        return head
    }
}

function main() {