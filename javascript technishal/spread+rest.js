//--------------------------------spread
//etle array ne kyak thi lavi ne use karye
// let arr = [2,3,5,7]
// let arr1=[1,9,11,...arr,78,5]
// console.log(arr1)
//-------
// let sum=(a,b,c)=>{
//     return a+b+c
// }
// let arr=[2,3,4]
// console.log(...arr)
// console.log(sum(...arr))

//---------------------------------rest
//etle koi fun ma elements nakhe
//always used in argument of function
let fun=(...num)=>{
    console.log(num)
}
fun(1,2,3,4)