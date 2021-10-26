import { Todoinput } from "./Todoinput"
import { useState } from "react"
import { Todolist } from "./Todolist"
import { Form } from "./Formpractice"

export const Todo = () => {

    const [list, setList] = useState([])
    const [flag, setFlag] = useState(false)

    const addTodo = (data) => {

        if (data.title.trim()) {
            setList([...list, data])
        }
    }

    const toggleStatus = (id) => {
        const new_list = list.map((e) => {
            return e.id === id ? { ...e, status: !e.status } : e
        });
        setList(new_list)
    }


    return (
        <div>
            <Todoinput prop={addTodo} />
            <Todolist passlist={flag ? list.filter((e) => !e.status): list} toggle={toggleStatus}/>
            <button onClick={() => setFlag(!flag)}> {flag?"Show All":"Show Not Completed"}</button>
            <Form/>
        </div>
    )
}