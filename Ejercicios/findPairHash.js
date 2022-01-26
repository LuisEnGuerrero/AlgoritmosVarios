// Dado un arreglo desordenado de enteros, encuentra el par de numeros que sumandolos de como resultado el objetivo

// Input
const nums = [8, 7, 2, 5, 3, 1];
const target = 3;


// Output
// 8 y 2
// ó
// 7 y 3

const findPairHash = (nums, target) => {
    let d = {};
    nums.forEach((n) => {
        d[n] = true;
    });

    for(let i = 0; i < nums.length; i++){
        let resto = target - nums[i];
        console.log('target: '+target+' -> nums[i]: '+ nums[i]+ ' -> resto: '+resto);
        if(d[resto.toString()]){
            console.log(`Par encontrado (${nums[i]}, ${resto})`);
            return;
        }
    }
}

findPairHash(nums, target);

// Complejidad de tiempo para el algoritmo es O(n)
// Complejidad de espacio para el algoritmo es O(n)