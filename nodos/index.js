const LinkedList = require('./linked_list');

const myLinkedList = new LinkedList();

myLinkedList.insert(30);
myLinkedList.insert(40);
myLinkedList.insert(50);
myLinkedList.print();
myLinkedList.remove(40);
myLinkedList.print();
myLinkedList.remove(50);
myLinkedList.print();