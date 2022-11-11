function foo(a,b,...bar){
    console.log(a)
    console.log(b)
    console.log(bar)
}
foo("hi","hello","welcome","how","are","you")

function foo1(...bar){//rest
    //console.log(a)
    // console.log(b)
    console.log(...bar)//
}
foo1("hi","hello","welcome","how","are","you")

//sum of elements in an array

function sum(...numbers){
var sum=0;
numbers.forEach((element) =>{
sum += element;    
});
return sum;
}
console.log(sum(2,3,4))