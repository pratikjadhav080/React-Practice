import { useState } from "react"
import { nanoid } from 'nanoid'

export const Todoitem = ({prop}) =>{

    const [text,setText] = useState("")

    const addtext = (e) =>{
        setText(e.target.value)
    }

    const addTolist = () =>{

        const data = {
            id:nanoid(4), 
            title : text,
            status:false
        }
        prop(data)

        setText("")
    }

    
    return <div id="todoinput">
        <input value={text} type="text" placeholder="Add a to-do..." onChange={addtext}></input>
        <button onClick={addTolist}>+</button>
    </div>
}