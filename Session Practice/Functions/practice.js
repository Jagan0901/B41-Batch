// //Functions

// // const total = +500;
// // function percentage(a,b,c,d,e){
// //     output = ((a+b+c+d+e)/total) * 100;
// //     return output;
// // };
// // console.log(percentage(96,95,77,81,93)+ "%"); 

// //input([1,2,3,4],3)

// function compute(arr,n){
//     if(n==null){
//         return arr[0];
//     }else if(n<0){
//         return [];
//     }else{
//         for(let i=0; i<n;i++){
//             emt = [];
//             output = emt.push(arr[i]);
//         }
//         return output;
//     }
// }
// console.log(compute([1,2,3,4],3));


function test_prime(arr){
   for(let i in arr){
    if(arr[i] === 1){
        return `${arr[i]} is not a prime`;
    }else{
        for(let j=2; j< Math.max(...arr); i++){
            if(arr[i]%j === 0){
                return `${arr[i]} is not a prime`;
            }
        }
    
    }
   } 
}


console.log(test_prime([41,55,91,101]));