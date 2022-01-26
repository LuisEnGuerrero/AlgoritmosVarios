class Graph {
    constructor(){
      this.adjacentList = {};
      this.numberNodes = 0;
    }
  
    addVertex(node){
      this.adjacentList[node] = [];
      this.numberNodes++;
    }
  
    addEdge(node1, node2){
      //Directed
      this.adjacentList[node1].push(node2);
    }
  
    showConnections(){
      const allNodes = Object.keys(this.adjacentList);
      for (let node of allNodes) {
        let nodeConnections = this.adjacentList[node];
        let connections = "";
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        }
        console.log(node + "-->" + connections);
      }
    }
  }
  
  const newGraph = new Graph();
  
  newGraph.addVertex(0);
  newGraph.addVertex(1);
  newGraph.addVertex(2);
  newGraph.addVertex(3);
  newGraph.addEdge(0, 1);
  newGraph.addEdge(0, 3);
  newGraph.addEdge(1, 3);
  newGraph.addEdge(2, 0);
  newGraph.addEdge(2, 1);
  newGraph.addEdge(3, 2);
  newGraph.showConnections();
  