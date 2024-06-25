function calc(a,b,op)
{
    if(op == '+')
    {
        console.log(a+b);
    }
    else if(op == '-')
    {
        console.log(a-b)
    }
    else if(op == '*')
    {
        console.log(a*b)
    }
    else if(op == '/')
    {
        console.log(a/b)
    }
    else
    {
        console.log("wrong operator")
    }
}
calc(8,2,'/')