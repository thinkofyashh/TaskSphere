import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div>

        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Title" onChange={function(e){
            const value=e.target.value
            setTitle(e.target.value)
        }} /> <br />

        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Description" onChange={function(e){
            const value=e.target.value
            setDescription(e.target.value)
        }} /> <br />

      

        <button style={{
            padding:10,
            margin:10,
            
        }} onClick={()=>{fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(async function(e){
            const data=await e.json()
            alert("Todo Added")
        })}} >Add a ToDo</button>


    </div>
}