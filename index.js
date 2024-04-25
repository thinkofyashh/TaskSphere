const express=require("express")
const bodyParser=require("body-parser")
const { string } = require("zod")
const { createTodo, updateTodo } = require("./Backend/types")
const { todo } = require("./Backend/db")
const cors=require("cors")

const app=express()
app.use(bodyParser.json())
app.use(cors())

app.post("/todo",async function(req,res){
    const newtodo=req.body
    console.log(newtodo)
    const validatetodo=createTodo.safeParse(newtodo)
    if(!validatetodo.success){
        res.status(411).json({
            msg:"Invalid Todo  "
        })
        return ;
    }else{
        // put a new todo in the database 
        await todo.create({
            title:newtodo.title,
            description:newtodo.description,
            completed: false
        })
    }
    return res.json({
        msg:"Todo have been Created . "
    })


})

app.get("/todos",async function(req,res){
const response=await todo.find({})
return res.json({
    Todos:response
})

})
app.put("/completed",async function(req,res){
    const todoId=req.body
    const validateiD=updateTodo.safeParse(todoId)
    if(!validateiD.success){
        res.status(411).json({
            msg:"Invalid Todo id"
        })
        return ;
    }else{
       await  todo.updateOne({
        _id:req.body.id
       },{
        completed:true
       })
       res.json({
        msg:"Todo marked as Completed"
       })

    }


})

app.listen(3000)