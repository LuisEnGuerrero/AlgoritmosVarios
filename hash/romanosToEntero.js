var romanToInt = function(s) {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    const exceptions = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    };
    
    let result = 0;
    
    for(let i = 0; i < s.length; i++){
        if((i+1 <= s.length) && exceptions[s[i] + s[i+1]] !== undefined){
            result += exceptions[s[i] + s[i+1]]; 
            i = i + 1;
        }else if((i+1 <= s.length) && exceptions[s[i] + s[i+1]] === undefined){
            result += romans[s[i]];
        }
    }
    return result;
};

console.log(romanToInt('MCDXXII'));