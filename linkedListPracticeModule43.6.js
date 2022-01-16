class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    get length() {
        let result = 0;
        let node = this.head;

        while(node){
            result++;
            node=node.next;
        }
        return result;
    }
    
    insertAtHead(value){
        this.head = new Node(value, this.head);
        return this;
    }

    insert(value){
        const newNode = new Node(value);

        if (this.head){
            let tail = this.head;

            while (tail.next){
                tail = tail.next;
            }
            tail.next = newNode;
        } else {
            this.insertAtHead(value);
        }
        return this;
    }

    find(isMatch) {
        let index = 0;
        let node = this.head;
        while (node){
            if (isMatch(node, index)) {
                return node;
            }
            index++;
            node = node.next;
        }
        return null;
    }
}

module.exports = LinkedList;