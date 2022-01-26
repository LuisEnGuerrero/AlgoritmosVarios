function createMinimalBST(arr, start, end){
    // Ejercicio
    // Dado un arreglo de numeros enteros unicos ordenado de // forma ascendente, escribe un algoritmo para crear un // árbol binario de busqueda con el minimo de altura
    if(end < start){
      return null;
    }
  
    let mid = Math.floor((start + end) / 2);
    let treeNode = new Node(arr[mid]);
    treeNode.left = createMinimalBST(arr, start, mid - 1);
    treeNode.right = createMinimalBST(arr, mid + 1, end);
    return treeNode;
  }
  
  let arrN = [30, 35, 39, 45, 50, 60, 65, 89, 90];
  console.log(JSON.stringify(createMinimalBST(arrN, 0, arrN.length -1 )));
  