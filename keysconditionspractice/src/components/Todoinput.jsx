import { useState } from "react"
import { nanoid } from 'nanoid'

export const Todoinput = ({prop}) => {

    const [text, setText] = useState("")

    const addText = (e) => {
        setText(e.target.value)
    }

    const addTolist = () =>{

        const data = {
            id:nanoid(4), 
            title : text,
            status:false
        }
        prop(data)
    }

    return (
    <div>
        <input value={text} type="text" onChange={addText} placeholder="Add your task here" />
        <button onClick={addTolist}>+</button>
    </div>
    )
}