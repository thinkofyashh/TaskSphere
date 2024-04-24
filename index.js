const express=require("express")
const bodyParser=require("body-parser")
const { string } = require("zod")
const { createTodo, updateTodo } = require("./Backend/types")

const app=express()
app.use(express.json())
//body {
  //  title:string
   // description:String
//}
app.post("/todo",function(req,res){
    const newtodo=req.body.newtodo
    const validatetodo=createTodo.safeParse(newtodo)
    if(!validatetodo.success){
        res.status(411).json({
            msg:"Invalid Todo  "
        })
        return ;
    }else{

    }


})

app.get("/todos",function(req,res){

})
app.put("/completed",function(req,res){
    const todoId=req.body.todoId
    const validateiD=updateTodo.safeParse(todoId)
    if(!validateiD.success){
        res.status(411).json({
            msg:"Invalid Todo id"
        })
        return ;
    }else{

    }


})

app.listen(3000)