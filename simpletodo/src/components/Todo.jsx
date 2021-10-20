import { useState } from "react"

export const Todo = () => {

    const [text,setText] = useState("")
    const [list,setList] = useState([])

    const addTask = (e) => {
        setText(e.target.value)
    }

    const addTodo = () => {
        setList([...list,text])
        setText("")
    }

    const itemList=list.map((item)=>{
        return <h1 key={item}>{item}</h1>
      })

    return <>
        <input value={text} type="text" onChange={addTask} />
        <button onClick={addTodo}>Add</button>
        <div>{itemList}</div>
    </>
}