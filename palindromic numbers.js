const n = 104;
var final = [];
//output should be 1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,101

        //result = n.toString();
        for(var i=0;i<=n;i++){
            var result = i.toString().split('').reverse().join('');
            var result = parseInt(result);
            //console.log(result);
            if(result === i){
                final.push(result);
            }
        }
    

console.log(final);
