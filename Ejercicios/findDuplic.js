// Dado un arreglo y un numero positivo k, revisa si el arreglo contiene numeros duplicados dentro del rango k ( <= k ). Si k es mayor que el tamaño del arreglo, tu algoritmo debería de revisar el arreglo completo

// Input
const nums = [5, 6, 8, 2, 4, 6, 9];
const k = 3;

// Output
// Se encontraron duplicados
// El elemento 6 se repite a una distancia de 4 que entra en el rango de <= k

function findDuplicates(nums, range){
        for (let i = 0; i<nums.length; i++){
            if(range < nums.length){
                let maxI = nums.length - range -1;
                    for (let j = i+1; j<nums.length - maxI; j++){
                        if(i<maxI){
                            if(i==j){
                                console.log(`Se encontraron numeros duplicados: (${nums[i]})`);
                                return;
                            }else{
                                console.log('no hay duplicados en el rango dado');
                                return;
                            }
                        }else{
                            if(maxI>0)
                            {maxI--}
                            else {maxI=0}
                        }
                    }
           }else{
                for (let j = 1; j<range; j++){
                    if(i==j){
                        console.log(`Se encontraron numeros duplicados: (${nums[i]})`);
                        return;
                    }else{
                        console.log('no hay duplicados en el rango dado');
                        return;
                    }
                }
            }
    
        }
    }




findDuplicates(nums, k); //INTENTO FALLIDO!!!
