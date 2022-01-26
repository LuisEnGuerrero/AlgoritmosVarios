// Dado un arreglo desordenado de enteros, encuentra el par de numeros que sumandolos de como resultado el objetivo

// Input
const nums = [8, 7, 2, 5, 3, 1];
const target = 4;


// Output
// 8 y 2
// ó
// 7 y 3

const findPair = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        console.log(`Par de numeros encontrados (${nums[i]},${nums[j]})`)
        return;
      }
    }
  }
  return console.log("Par no encontrado");
}

findPair(nums, target);

// Complejidad del algoritmos O(n^2)