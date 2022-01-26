const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value) {
    //Actividad -> resolver el problema del puntero prev
    let node = new Node(value);
    if(this.head){
      this.head.prev = node;
      node.next = this.head;
    }

    if(!this.tail){
      this.tail = node;
    }

    this.head = node;
  }

  print() {
    let list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  printReverse(){
    let list = [];
    let currentNode = this.tail;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    console.log(list);
  }

}

module.exports = DoublyLinkedList;