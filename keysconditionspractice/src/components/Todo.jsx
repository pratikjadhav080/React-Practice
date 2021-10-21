import { Todoinput } from "./Todoinput"
import { useState } from "react"
import { Todolist } from "./Todolist"

export const Todo = () => {

    const [list, setList] = useState([])

    const addTodo = (data) => {

        if (data.title.trim()) {
            setList([...list, data])
        }
    }

    const toggleStatus = (id, title) => {
       const new_list = list.map((e) => {
            return e.id === id ? {...e,status:!e.status}:e
        });
        setList(new_list)
    }


    return (
        <div>
            <Todoinput prop={addTodo}/>
            <Todolist passlist={list} toggle={toggleStatus}/>
        </div>
    )
}