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
    if(index === 0){
        this.head = this.head.next;
        this.size--;
        return this.print();
      }
    let tempNode = this.transversalNode(index - 1);
    let nextNode = tempNode.next;

    tempNode.next = nextNode.next;
    this.size--;
    return this.print();
    
  }


  insertAfter(index, value){
    //Actividad
    let tempNode = this.transversalNode(index);
    let nextNode = tempNode.next;

    let node = new Node(value);

    tempNode.next = node;

    node.next = nextNode;
    this.size++;

    return this.print();
  }

  insertBefore(index, value){
    //Actividad
    if(index <= 0 || index >= this.size) return console.log("Ingresa un indice correcto");
    let tempNode = this.transversalNode(index - 1);
    let nextNode = tempNode.next;
    let node = new Node(value);
    tempNode.next = node;
    node.next = nextNode;
    this.size++;
    return this.print();
    
  }

  transversalNode(index){
    let currentNode = this.head;
    let count = 0;
    while(currentNode !== null){
      if(count === index){
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
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