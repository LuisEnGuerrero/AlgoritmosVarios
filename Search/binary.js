const binarySearch = (arr, n) => {
    let firstIndex = 0;
    let lastIndex = arr.length -1;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    while(arr[middleIndex] !== n && firstIndex <= lastIndex) {
        if(arr[middleIndex] > n) {
            //Apuntamos a la Izquierda
            lastIndex = middleIndex -1;
        } else {
            //Apuntamos a la Derecha
            firstIndex = middleIndex +1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }

    return arr[middleIndex] === n ? middleIndex : -1;
}

const numbers = [1, 2, 4, 6, 8, 15, 48, 57, 59, 61, 62, 63, 64, 67, 78];
console.log(binarySearch(numbers, 4));