export function CreateTodo(){
    return <div>

        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Title" /> <br />
        
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Description" /> <br />

        <button style={{
            padding:10,
            margin:10,
            
        }} >Add a ToDo</button>


    </div>
}