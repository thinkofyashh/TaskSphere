const zod=require("zod")
/*

1. route 
body{
    title:String
    Description:String
}

2. we dont need input we simply have to return the list of todos from the backend.

3.
{
    id:String
}

*/
    const CreateTodo =Zod.object({
        title:Zod.string(),
        description:Zod.string()
    })

    const UpdateTodo=Zod.object({
        id:zod.string()
    })

    module.exports={
        createTodo : CreateTodo,
        updateTodo : UpdateTodo
    }
   