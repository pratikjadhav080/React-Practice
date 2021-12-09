import { useState } from "react"
import { TodoInput } from "./Todoinput"

export const Todo = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<string[]>([])

    return (
        <div>
            <input
                className="addtodo"
                data-testid="inputbox"
                type="text"
                placeholder="Enter Todo"
                onChange={(e) => setText(e.target.value)}
            />
            <button
                data-testid="addbtn"
                onClick={()=>{
                    setTodos([...todos,text]);
                }}
                >
                add todo
            </button>
            {todos.map((e,i)=>{
                return <TodoInput key={i} title={e}/>
            })}
        </div>
    )
}