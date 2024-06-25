// sumof 1st n numbers
// function sum(n)
// {
//     var s=0
//     for(var i=1; i<=n ; i++)
//     {
//         s = s + i
//     }
//     console.log(s)
// }
// sum(5)

// sum of sqares of odd only
function sum(n)
{
    var s=0
    for(var i=1; i<=n ; i++)
    {
        if(i%2!=0)
        {
            s = s + i*i
        }
    }
    console.log(s)
}
sum(10)