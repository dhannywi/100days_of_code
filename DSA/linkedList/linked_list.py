class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def unshift(self, val):
        # insert item @ beginning of linked list
        node = Node(val, self.head)
        self.head = node

    def push(self, val):
        # insert item @ end of linked list
        new_node = Node(val)
        current = self.head
        if self.head:
            while current.next: # traverse to last element
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
                
    def pop(self):
        # remove item @ end of linked list
        current = self.head
        while current.next:
            current = current.next
        current.val = None

    def get_Nth_val(self, position):
        """
        Get an element from a particular position.
        Assume the first position is "1".
        Return "None" if position is not in the list.
        """
        count = 1
        current = self.head
        while current: # Loop while end of linked list is not reached
            if count == position:
                return current
            current = current.next
            count += 1
        return None

    def insert_at(self, val, position):
        """
        Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements.
        """
        current = self.head
        new_node = Node(val)
        if position < 1:
            print("Invalid position")
        if position == 1:
            new_node.next = current
            self.head = new_node
        else: # traverse through LL and find elements at position
            prv_node = self.get_Nth_val(position-1)
            nxt_node = self.get_Nth_val(position)
            prv_node.next = new_node
            new_node.next = nxt_node

    # need to redo delete function
    # def delete(self, value):
    #     # Delete the first node with a given value
    #     current = self.head
    #     prev = None
    #     # traverse LL to find matching value
    #     while (current.val != value) and (current.next):
    #         prev = current
    #         current = current.next
    #     # there is a match
    #     if current.val == value:
    #         if prev:
    #             prev.next = current.next
    #         else:
    #             self.head = current.next

    def print(self):
        temp = self.head
        if(temp != None):
            print("The list contains:", end=" ")
            while (temp != None):
                print(temp.val, end="-> ")
                temp = temp.next
            print()
        else:
            print("The list is empty.")
    

if __name__ == '__main__':
    ll = LinkedList()
    ll.push(5)
    ll.push(9)
    ll.push(7)
    ll.push(20)
    ll.print()
    ll.delete(7)
    ll.print()
