//---------------------------------using for each multiply values
let arr=[10,20,30,40,50]
let m=1
arr.forEach((val, idx)=>{
    //console.log(val,idx) //remeber val will always come first and idx always after
    m = m * val
})
console.log(m)