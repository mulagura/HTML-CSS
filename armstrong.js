// armstrong
// 123 output: 1^3+2^3+3^3 = 1+8+27 = 36

const number = 123;

//console.log(Math.pow(number,3)); Math.pow(base,exponent)

//console.log(number.toString().length);

let lengthOfNumber = number.toString().length;
var result = 0;

for(var i=0;i<lengthOfNumber;i++){
    var eachNumberArray = number.toString().split('');
    //console.log(eachNumberArray);  
    eachNumberArray[i] =  Math.pow(Number(eachNumberArray[i]),lengthOfNumber);
    result+=eachNumberArray[i];
    
}

console.log(result);
