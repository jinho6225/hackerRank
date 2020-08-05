class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""

#Recursively
def inOrder(root):
    #Write your code here
    lst = []
    def helper(root):
        if root is None:
            return
        if root.left:
            helper(root.left)
        lst.append(str(root.info))
        if root.right:
            helper(root.right)
    helper(root)
    print(" ".join(lst))

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""
#Iteratively
def inOrder(root):
    #Write your code here
    lst1 = []
    stack = []
    cur = root
    while True:
        while cur:
            stack.append(cur)
            cur = cur.left
        if len(stack) == 0: break
        cur = stack.pop()
        lst1.append(str(cur.info))
        cur = cur.right;
    print(" ".join(lst1))