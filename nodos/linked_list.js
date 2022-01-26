const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insert(value){
    if(!value) return;

    let node = new Node(value);

    if(this.head){
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  remove(value){
    let currentNode = this.head;

    if(this.head.value === value){
      this.head = currentNode.next;
      this.size--;
      return;
    }

    while(currentNode !== null){
      if(currentNode.next){
        let next = currentNode.next;

        if(next.value === value) {
          currentNode.next = next.next;
          this.size--;
          break;
        }
      }
    }
  }

  removeAtIndex(index){
    //Actividad
  }

  insertAfter(index, value){
    //Actividad
  }

  insertBefore(index, value){
    //Actividad
  }

  print(){
    let list = [];
    let currentNode = this.head;

    while(currentNode !== null){
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list.join(','));
  }
}

module.exports = LinkedList;