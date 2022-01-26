/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const values = {
        "1000": "M",
        "900": "CM",
        "500": "D",
        "400": "CD",
        "100": "C",
        "90": "XC",
        "50": "L",
        "40": "XL",
        "10": "X",
        "9": "IX",
        "5": "V",
        "4": "IV",
        "1": "I"
    };
    
    let result = "";
    
    let valuesRoman = Object.keys(values).reverse();
    
    for(let i = 0; i < valuesRoman.length; i++){
        while(num >= valuesRoman[i]){
            result += values[valuesRoman[i]];
            num -= valuesRoman[i];
        }
        if(num <= 0){
            break;
        }
    }
    return result;
};