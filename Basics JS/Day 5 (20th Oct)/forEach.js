let arr = [1,2,3,4,5]

arr.forEach((element)=> console.log(element*2))

//[2,4,6,8,10]

const fruits = ["apple","orange","cherry"]

fruits.forEach((element)=> console.log(element))

fruits.forEach((value,element)=> console.log(element,value))

fruits.forEach((element,index)=> console.log(index+2))

// wat we give at first parameter it takes a s a string
// second one is index number 
// we can use any word a keyword(index, value, element etc)