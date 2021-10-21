import { useState } from "react"
import { Todoitem } from "./TodoItem"
import { Renderheader } from "./Tableheader"

export const Todo = () => {

    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const addTask = (e) => {
        setText(e.target.value)
    }

    const addTodo = () => {

        if (text.trim()) {
            setList([...list, text])
        }
        setText("")
    }

    const removeData = (index) => {
        setList(list.filter((data, i) => {
            return i !== index;
        }))
    };

    const strikeData = (index) => {

        setList(list.map((key, i) => {
            return i === index ? <strike id="striked">{key}</strike> : key
        }))

    }

    return <>
        <div id="inputdiv">
            <input value={text} type="text" onChange={addTask} placeholder="Add your task here" />
            <button onClick={addTodo}>+</button>
        </div>
        <div id="Tasklist">
            <table id='tasktable'>
                <thead>
                    <tr><Renderheader /></tr>
                </thead>
                <tbody>
                    <Todoitem list={list} del={removeData} strike={strikeData} />
                </tbody>
            </table>
        </div>
    </>
}

