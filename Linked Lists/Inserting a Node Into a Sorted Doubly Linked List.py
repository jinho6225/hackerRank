#!/bin/python3

import math
import os
import random
import re
import sys

class DoublyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = DoublyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node
            node.prev = self.tail


        self.tail = node

def print_doubly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

# Complete the sortedInsert function below.

#
# For your reference:
#
# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#
def sortedInsert(head, data):
    newNode = DoublyLinkedListNode(data)
    if head.data > newNode.data:
        newNode.next = head
        newNode.next.prev = newNode
        head = newNode
        return head
    else:
        current = head
        previous = None
        while current:
            if current.data >= newNode.data:
                temp = current
                current = newNode
                previous.next = current
                current.prev = previous
                current.next = temp
                temp.prev = current
                break;
            elif current.next == None and current.data < newNode.data:
                current.next = newNode
                newNode.prev = current
                break;
            previous = current
            current = current.next 
        return head
    
if __name__ == '__main__':