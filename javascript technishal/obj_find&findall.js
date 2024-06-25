//------------------------------------find & findall
//find etle filter jevu aj bas filter ma array ave and find ma khali ek aj value ave je first
let arr=[
            {name:"A",salary:1000},
            {name:"B",salary:1500},
            {name:"C",salary:2000},
            {name:"D",salary:1800},
            {name:"E",salary:1500}
        ]
// let arr1=arr.find((val)=>{
//     if(val.salary == 1500)
//         {
//             return true
//         }
// })
// console.log(arr1["name"])   //returns name of the output not the whole obj

let arr1=arr.find((val)=>(val.salary==1500))
console.log(arr1)

//----------------------find index
let arr2=arr.findIndex((val)=>{
    if(val.salary == 1500)
        {
            return true
        }
})
console.log(arr2)