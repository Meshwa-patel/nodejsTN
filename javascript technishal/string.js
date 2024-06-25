//---------------------------string prgm
let str="I am an Indian"
console.log(str.split(" ").join('')) //remove space and join
//to print "I ma na naidnI"
// let arr=str.split(" ")
// arr.forEach((val,ind)=>{
//     arr[ind]=val.split(').reverse().join('')
// })
// console.log(arr.join(' '))


let arr=str.split(" ")
for(let i=0 ; i<arr.length ; i++)
{
    let arr1 = arr[i].split('')
    let arr2=[]
    let n=arr1.length
    for(let j=0 ; j<arr1.length ; j++)
    {
        arr2[j] = arr[n-1]
        n--
    }
    arr1[i] = arr[i].join('')
}
console.log(arr.join(' '))