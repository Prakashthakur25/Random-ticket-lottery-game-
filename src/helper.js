function lotary(n){
let array = new Array (n); // we use here constructor of array

for ( let i=0 ; i<n ; i++ ){
array[i]= Math.floor(Math.random()*10);
};

return array ;

}
function sum(array){
     return array.reduce((acc, cur) => acc + cur, 0);
        //array.some((el)=>el===5) 
        // array.every((el)=>el===5)  // condition tbhi tru hogi jb number k har digit 5 hoga tb winn hoga lotery

}

export  {lotary , sum}