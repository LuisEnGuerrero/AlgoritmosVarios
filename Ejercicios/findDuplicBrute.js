// Dado un arreglo y un numero positivo k, revisa si el arreglo contiene numeros duplicados dentro del rango k ( <= k ). Si k es mayor que el tamaño del arreglo, tu algoritmo debería de revisar el arreglo completo

// Input
const nums = [5, 6, 8, 8, 5, 6, 6, 9];
const k = 2;

// Output
// Se encontraron duplicados
// El elemento 6 se repite a una distancia de 4 que entra en el rango de <= k

function findDuplicates(nums, range){
  let distance = range;
  for(let i = 0; i < nums.length; i++){ // O(n)
    distance = i + range;
    if(distance > (nums.length - 1)){
      distance = nums.length - 1;
    }
    for(let j = i + 1; j <= distance; j++){ // O(n-1)/2
      if(nums[i] === nums[j]){
        console.log(`El numero duplicado es ${nums[i]} se encuentra a una distancia de ${j - i}`)
      }
    }
  }
}


findDuplicates(nums, k);

// Complejidad del algoritmos O(n * ((n-1)/2)) => O(n^2)