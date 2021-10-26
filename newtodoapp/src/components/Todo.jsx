import { useState } from "react"
import { Todoitem } from "./Todoitem"
import { Todolist } from "./Todolist"
import '../styles/todo.css';

export const Todo = () => {

    const [list, setList] = useState([])
    const [flag, setFlag] = useState(false)

    const handlelist = (data) => {

        if (data.title.trim()) {
            setList([...list, data])
        }
    }

    const handletoggle = (id) => {

        const new_list = list.map((e) => {
            return e.id === id ? { ...e, status: !e.status } : e
        });

        setList(new_list)
    }

    const handleDelete = (id) => {

        const new_list = list.filter((e) => {
            return e.id !== id
        });

        setList(new_list)
    }

    return <div id="todo">
        <Todoitem prop={handlelist} />
        <Todolist passlist={flag ? list.filter(e => !e.status) : list} toggle={handletoggle} deleteTask={handleDelete} attr="todotasks" />
        <hr/>
        <button id="buttonShow" onClick={() => setFlag(!flag)}> {flag ? "Show All" : "Show Completed TO-DOs"}</button>
        <Todolist passlist={flag ? list.filter(e => e.status) : []} toggle={handletoggle} deleteTask={handleDelete} attr="completedtodotasks"/>
    </div>
}
