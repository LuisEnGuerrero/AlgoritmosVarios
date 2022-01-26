// Dado un arreglo desordenado de enteros, encuentra el par de numeros que sumandolos de como resultado el objetivo

// Input
const nums = [8, 7, 2, 5, 3, 1];
const target = 4;


// Output
// 8 y 2
// ó
// 7 y 3

const findPair = (nums, target) => {
    
    nums.sort((a, b) => a - b);

    let low = 0;
    let high = nums.length - 1;

    while(low < high) {
        if(nums[low] + nums[high] === target){
            console.log(`par encontrado (${nums[low]}, ${nums[high]})`);
            return;
        }

        if(nums[low] + nums[high] < target) {
            low++;
        }else{
            high--;
        }
    }

    return console.log("No se ha encontrado el par!")
}

findPair(nums, target);

// Complejidad del algoritmos O(n log_n)