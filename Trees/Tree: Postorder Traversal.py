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
def postOrder(root):
    #Write your code here
    lst=[]
    def helper(root):
        if root is None:
            return
        helper(root.left)
        helper(root.right)
        lst.append(str(root.info))

    helper(root)
    print(" ".join(lst))



"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""
#Iteratively
def postOrder(root):
    #Write your code here
    lst=[]
    stack=[]
    stack.append(root)
    while len(stack):
        cur = stack.pop()
        lst.insert(0,str(cur.info))
        if cur.left: stack.append(cur.left)
        if cur.right: stack.append(cur.right)
    print(' '.join(lst))

