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
def preOrder(root):
    #Write your code here
    lst = []
    def helper(node):
        if node is None:
            return
        lst.append(str(node.info))
        helper(node.left)
        helper(node.right)
    helper(root)    
    print(' '.join(lst))




"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""
#Iteratively
def preOrder(root):
    #Write your code here
    stack=[]
    lst=[]
    while True:
        stack.append(root)
        while len(stack):
            cur = stack.pop()
            lst.append(str(cur.info))
            if cur.right: stack.append(cur.right)
            if cur.left: stack.append(cur.left) #[x, x, x, x, x, x, x]
        if len(stack) == 0: break;
    print(" ".join(lst))

