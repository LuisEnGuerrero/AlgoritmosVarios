class Node {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
  
    insert(value){
      let newNode = new Node(value);
  
      if(!this.root){
        this.root = newNode;
      }else{
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Izquierdo
            if(currentNode.left === null){
              currentNode.left = newNode;
              return;
            }
            currentNode = currentNode.left;
          }else{
            //Derecho
            if(currentNode.right === null){
              currentNode.right = newNode;
              return;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  
    search(value){
      let currentNode = this.root;
      if(currentNode.value === value){
        return currentNode.value;
      }
  
      while(currentNode){
        if(value < currentNode.value){
          //Izquierdo
          if(currentNode.left && value === currentNode.left.value){
            return currentNode.left.value;
          }
          currentNode = currentNode.left;
        }else{
          //Derecho
          if(currentNode.right && value === currentNode.right.value){
            return currentNode.right.value;
          }
          currentNode = currentNode.right;
        }
      }
      return false;
    }
  
    breadthSearchFirst(){
      let currentNode = this.root;
      let queue = []; //Queue
      let list = [];
  
      queue.push(currentNode);
  
      while(queue.length > 0){
        currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
          queue.push(currentNode.left);
        }
        if(currentNode.right){
          queue.push(currentNode.right);
        }
      }
  
      return list;
    }
  
    
  bfsTransversal(){
    let currentNode = this.root;
    let queue = []; //Queue
    let list = [];

    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  bfsTransversalR(queue, list){
    if(queue.length === 0){
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left){
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
    return this.bfsTransversalR(queue, list);
  }

  dfsTPreorder(list){
    return preOrder(this.root, list);
  }

  dfsTPostOrder(list){
    return postOrder(this.root, list);
  }

  dfsTInOrder(list){
    return inOrder(this.root, list);
  }


  
preOrder(node, list){
  console.log(node.value);
  list.push(node.value);

  if(node.left){
    preOrder(node.left, list);
  }

  if(node.right){
    preOrder(node.right, list);
  }

  return list;
}

postOrder(node, list){

  if(node.left){
    postOrder(node.left, list);
  }

  if(node.right){
    postOrder(node.right, list);
  }
  list.push(node.value);

  return list;
}

inOrder(node, list){

  if(node.left){
    inOrder(node.left, list);
  }

  list.push(node.value);

  if(node.right){
    inOrder(node.right, list);
  }

  return list;
}


  remove(){

  }
}


  const tree = new BinarySearchTree();
  
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  tree.search(179);
  // console.log(JSON.stringify(traverse(tree.root)));
  
  //     9   
  //  4      20
  //1   6  15   170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
