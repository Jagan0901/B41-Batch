var student = [
    {
        name : "j",
        marks : 50,
    },
    {
        name : "j",
        marks : 700,
    }
];
// const result = student.filter((e)=>e.marks>50);
// // const arr = ["jaganath", "jagan",];
// // const result = arr.filter((e)=> e.length<6);
// console.log(result);
const arr = [1,2,3,4];
// const result = arr.reduce((acc,value) => acc+value);
// console.log(result);
// const result = student.reduce((acc,curr)=> acc+curr.marks,0);
// console.log(result);
const result = arr.map((e)=>e*3).filter((e)=>e%2===0).reduce((acc,e)=>acc+e);
console.log(result);