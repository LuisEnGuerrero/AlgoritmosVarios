// Dado un arreglo y un numero positivo k, revisa si el arreglo contiene numeros duplicados dentro del rango k ( <= k ). Si k es mayor que el tamaño del arreglo, tu algoritmo debería de revisar el arreglo completo

// Input
const nums = [5, 6, 8, 5, 8, 6, 6, 9];
const k = 3;

// Output
// Se encontraron duplicados
// El elemento 6 se repite a una distancia de 4 que entra en el rango de <= k

// numsObj = {
//    '5': 0,
//    '6': 1,
//    '8': 2,
// }

function findDuplicates(nums, range){ 
  let numsObj = {};  // complejidad: O(n)
  for(let i = 0; i < nums.length; i++) {
    if(numsObj[nums[i]] === undefined){
      numsObj[nums[i]] = i;
    }else if(numsObj[nums[i]] !== undefined && (i - numsObj[nums[i]]) <= range){
      console.log(`El numero ${nums[i]} está duplicado dentro del rango ${k} a una distancia de ${i - numsObj[nums[i]]}`);
      numsObj[nums[i]] = i;
    }
  }
}

// 3 - 0 <= 4

findDuplicates(nums, k);

// complejidad O(n)