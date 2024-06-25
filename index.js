let express = require("express");
let app = express();
require('dotenv').config()
//to convert data comming from frontend into json format
app.use(express.json());
//array for storing obj data from front end
let product =[] // koi bi specifict api ma nai banavta because badha api ma use karvanu hoi

app.post('/createproduct',(req,res)=>{
    try {
        //req.body is for taking data from frontend
        let obj=req.body;
        //for unique id
        obj.id = product.length+1;
        //for soft delete logic this is the flag
        obj.isdeleted = false;
        //for pushing into array
        product.push(obj)
        //print all products
        console.log(product)
        res.status(201).send({
            msg:"Product added successfully"
        })
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})

app.get('/getproduct',(req,res)=>{
    try {
        // res.send(product)
        let NotDeleted = product.filter((val)=>{
            if(val.isdeleted == false)
            {
                return true
            }
        })
        res.status(200).send(NotDeleted)
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})

app.put('/updateproduct',(req,res)=>{
    try {
        console.log(req.query)
        let id = req.query.id //id lave query apye ne ema thi
        let obj=req.body  //body lave update ma je body lakhi che postman ma
    
        let SearchPro=product.find((val)=>(val.id==id))
        if(!(SearchPro && SearchPro.productname) || (SearchPro && SearchPro.isdeleted == true))
        {
            res.status(404).send({
                msg:"Product not found"
            })
        }
        else
        {
            SearchPro.productname = obj.productname?obj.productname:SearchPro.productname;
            SearchPro.cost = obj.cost?obj.cost:SearchPro.cost;
            SearchPro.productdescription = obj.productdescription?obj.productdescription:SearchPro.productdescription;
            //product.push(SearchPro)
            res.status(200).send({
                msg:"Product updated successfully"
            })
        }
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})

app.delete('/deleteproduct',(req,res)=>{
    try {
        let id = req.query.id
    
        let SearchPro=product.find((val)=>(val.id==id))
        SearchPro.isdeleted = true
        
        res.status(200).send({
            msg:"Product deleted successfully"
        })
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})

app.get('/sortproduct',(req,res)=>{
    try {
        let ord=req.query.sort
        let ans = product.sort((a,b)=>{
            if(ord == "asc")
            {
                return a.cost - b.cost
            }
            else if(ord == "desc")
            
                {
                return b.cost - a.cost
            }
            else
            {
                res.status(404).send({
                    msg:"Wrong input , enter asc/desc"
                })
            }
        })
        res.status(200).send(ans)
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log("server running on port "+process.env.PORT)
    }
    else{
        console.log(err)
    }
});