import { Actions } from '../Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from '../Store/actionTypes';
import axios from "axios"

export const Todo = () => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(store => store.todos);


    useEffect(() => {
        getData()
    },[])

    const getData = async ()=>{
        dispatch(Actions(GET_TODO_LOADING, ""))

        try{
            const res = await axios.get("http://localhost:3004/todos")
            dispatch(Actions(GET_TODO_SUCCESS, res.data)) 
        }catch(err){
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

    return loading ?

        (<h1>Loading ...</h1>) : error ? (<h1>error</h1>) : (<div>

            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

            <button onClick={addTolist}>Add TODO</button>

            {data.map((e) => {
                return <div key={e.id}>
                    <h1>{e.title}</h1>
                </div>
            })}

        </div>
        )
}

//error ? <h1>{error}</h1> : 