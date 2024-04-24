const mongoose=require("mongoose")
const { boolean } = require("zod")

mongoose.connect("mongodb+srv://thinkofyash:18NovMonday@cluster0.xay1cqj.mongodb.net/TaskSphereDb")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


const todo=mongoose.model("todos",todoSchema)


module.exports={
    todo
}