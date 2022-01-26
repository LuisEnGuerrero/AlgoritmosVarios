const linearSearch = (arr, n) => {
    //Recorrer la lista

    for(let i = 0; i < arr.length; i++) {
        if ( n === arr[i]) {
            return i
        }}
    return -1
};

const numeros = [3, 4, 16, 5, 9, 2, 10, 12, 13, 18, 2, 14, 7];

console.log(linearSearch(numeros, 9));
