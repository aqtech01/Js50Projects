// Find the sum of an array
 let array = [1,2,3,4,5,6,7];

 const sumofArray = array.reduce((previous,current)=>{
    sum = previous+current;
    return sum
 },0)
 console.log(sumofArray);
 
// let sum = 0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sum +=element;
    
    
// }
// console.log(sum);
