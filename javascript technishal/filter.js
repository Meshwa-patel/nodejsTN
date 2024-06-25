
//--------------------------------filter
let arr=[10,20,30,40,50]
let arr1=arr.filter((val)=>{
    if(val%2!=0)   //odd nu gotva mate aa lakhye etle ema true store thai jya bi store hoi true te element print thase
    {
        return true
    }
})
console.log(arr1)


//---------------------------------using filter find sal greater than 1500
// let arr=[
//         {name:"A",salary:1000},
//         {name:"B",salary:1500},
//         {name:"C",salary:2000},
//         {name:"D",salary:1800},
//         {name:"E",salary:2100}
//     ]
// let array=arr.filter((val)=>
//     {
//         if(val.salary>1500)
//         {
//             return true
//         }
//     })
// console.log(array)
