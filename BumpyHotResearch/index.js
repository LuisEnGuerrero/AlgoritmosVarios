const LinkedList = require('./linked_list');

const myLinkedList = new LinkedList();

myLinkedList.insert(1);
myLinkedList.insert(5);
myLinkedList.insert(3);
myLinkedList.print();
myLinkedList.insertAfter(0,2);