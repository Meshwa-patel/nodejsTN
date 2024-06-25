
//--------------------------------------callback
//converts asyncronous function to syncronous function 
//asyncronous fun etle game te fun game tyare work kare . etle bija function na complete thavanu wait na kare
//syncronous fun etle game te print na thai line ma aj thai . wait kare jya sudhi working fun pate na 
// let add=(a,b, afteradd)=>{
//     console.log(a+b)
//     afteradd(a+b)
// }
// add(2,3, (result)=>{
//     console.log("after add",result)
// })

//another example
const sum=(a,b,addcompleted)=>{
    console.log(a+b)
    addcompleted()
    return a+b
}
const addcompleted=()=>{
    console.log("add completed")
}
console.log(sum(2,3,addcompleted))