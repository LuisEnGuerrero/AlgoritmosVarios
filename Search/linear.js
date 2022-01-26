const linearSearch = (arr, n) => {
    //Recorrer la lista
    arr = arr.sort();

    if (n < arr[arr.length-1] || n > arr[0]) {
        for(let i = 0; i < arr.length; i++) {
            if ( n <= arr[i]) {
                if ( n === arr[i]) {
                    return i
                }
            else {
                return -1;
            }
        };
    }}
    else {
        return -1;
    }
    return -1;
}

const numeros = [3, 4, 16, 5, 9, 2, 10, 12, 13, 18, 2, 14, 7];

console.log(linearSearch(numeros, 9));
