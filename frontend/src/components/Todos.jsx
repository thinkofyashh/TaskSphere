// array destructing 
// remember only one element can be return at a time. you cant return more than one element simultaneously.
export function Todos({todos}){
   
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
               <h2>{todo.description}</h2>
               <button>{todo.completed == true? "Completed":"Mark as Complete"}</button>
            </div>
        })}
    </div>
}