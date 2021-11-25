import { Actions } from '../Store/TodoStore/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from '../Store/TodoStore/actionTypes';
import axios from "axios"
import { EditTodo } from './EditTodo';

export const Todo = () => {

    const [modal, setModal] = useState(false)
    const [datainmodal, setDatainmodal] = useState({})
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(store => store.todo.todos);

    useEffect(() => {
        getData()
    }, [])

    const showModal = () => {
        setModal(!modal)
    }

    const setDataforEditing = (data) => {
        setDatainmodal(data)
    }

    const getData = async () => {
        dispatch(Actions(GET_TODO_LOADING, ""))

        try {
            const res = await axios.get("http://localhost:3004/todos")
            dispatch(Actions(GET_TODO_SUCCESS, res.data))
        } catch (err) {
            dispatch(Actions(GET_TODO_ERROR, err))
        }
    }

    const addTolist = async () => {

        dispatch(Actions(ADD_TODO_LOADING, ""))

        const payload = {
            id: nanoid(4),
            title: todo,
            status: false
        }

        try {
            const res = await axios.post("http://localhost:3004/todos", payload)
            dispatch(Actions(ADD_TODO_SUCCESS, res.data))
            getData();
        } catch (err) {
            dispatch(Actions(ADD_TODO_ERROR, err))
        }

    }

    const toggleTask = async (e) => {

        dispatch(Actions(UPDATE_TODO_LOADING, ""))

        console.log(e)

        try {
            const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { status: !e.status })
            console.log(res.data)
            dispatch(Actions(UPDATE_TODO_SUCCESS, res.data))
            getData();
        } catch (err) {
            dispatch(Actions(UPDATE_TODO_ERROR, err))
        }

    }

    const deleteTask = async (e) => {

        dispatch(Actions(DELETE_TODO_LOADING, ""))

        console.log(e)

        try {
            const res = await axios.delete(`http://localhost:3004/todos/${e.id}`)
            console.log(res.data)
            dispatch(Actions(DELETE_TODO_SUCCESS, res.data))
            getData();
        } catch (err) {
            dispatch(Actions(DELETE_TODO_ERROR, err))
        }

    }


    return loading ?

        (<h1>Loading ...</h1>) : error ? (<h1>error</h1>) : (<div>

            <div style={{ filter: modal ? "blur(5px)" : "blur(0px)" }}>

                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

                <button onClick={addTolist}>Add TODO</button>

                {data.map((e) => {
                    return <div key={e.id}>
                        <h1>{e.title}-{e.status ? "Done" : "Not Done"}</h1>

                        <button onClick={() => {
                            showModal()
                            setDataforEditing(e)
                        }}>Edit</button>

                        <button onClick={() => toggleTask(e)}>{e.status ? "Not Complete" : "Complete"}</button>
                        <button onClick={() => deleteTask(e)}>Delete</button>

                    </div>
                })}
            </div>
            
            {modal ? <EditTodo props={showModal} getdata={getData} data={datainmodal} /> : ""}
        </div>
        )
}

