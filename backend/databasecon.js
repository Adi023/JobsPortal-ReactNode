const connection = require('./db');
var express=require('express')
// var router=express.Router()
var app =express();
var bodyparser=require('body-parser')

//npm i cors
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))



app.post('/add',(req,res)=>
{ 
    connection.query("insert into addjobs set ?",[req.body.e],(error,res)=>{})
     
     console.log("data inserted")   
})

app.get('/viewjobs',(req,res)=>
{
 connection.query("select * from addjobs",(error,result)=>{
    res.send(result);
 })
})

app.get('/view/:id',(req,res)=>
{
    console.log("==="+(req.params.id))
    
    connection.query("select * from  addjobs where id=?",[req.params.id],(error,result)=>{
      res.json(result)
 })
})


app.listen(8001)