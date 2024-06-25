//find nth highest term in arr 
// function findnhighestno(arr,pos)
// {
//     for(let i=0 ; i<arr.length-1 ; i++)
//     {
//         for(let j=0 ; j<arr.length-i-1 ; j++)
//         {
//             if(arr[j]<arr[j+1])
//             {
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     console.log(arr[pos-1])
// }
// var arr=[34,25,36,70,67,56]
// findnhighestno(arr,4)

//acr and apr
// function fac(n)
// {
//     if(n==0)
//     {
//         return 1
//     }
//     return n * fac(n-1)
// }
// function ncr(n,r)
// {
//     var ans = fac(n) / (fac(r) * fac(n-r))
//     console.log(ans)
// }
// function npr(n,r)
// {
//     var ans = fac(n) / fac(n-r)
//     console.log(ans)
// }
// ncr(6,4)
// npr(6,4)

//==================================EKTA MAM=============================
//remove value form array
let arr=[5,7,8,34,2,4]
let value = 34
// for(let i =0 ; i<arr.length ; i++)
// {
//     if(val == arr[i])
//     {
//         arr.splice(i,1)
//     }
// }
// console.log(arr)
let indx = arr.findIndex((val)=>(
    value==val
))
if(indx>0)
{
    arr.splice(indx,1)
}
console.log(arr)