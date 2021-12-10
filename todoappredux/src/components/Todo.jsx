import {addToDo, deleteToDo, getToDo, toggleToDo } from '../Store/TodoStore/actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { EditTodo } from './EditTodo';
import styles from "./Todo.module.css"
import { Link, useHistory } from 'react-router-dom'
import { Total } from './Total';

export const Todo = () => {

    const [modal, setModal] = useState(false)
    const [datainmodal, setDatainmodal] = useState({})
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const { count,loading, data, error } = useSelector(store => store.todo.todos,shallowEqual);
    const {isAuth} = useSelector(store => store.auth,shallowEqual)
    const history = useHistory();

    console.log(isAuth)

    useEffect(() => {
        if (!isAuth) {
            history.push("/login")
        }else{
            getData()
        }
    }, [isAuth])


    // useEffect(() => {
    //     getData()
    // }, [])

    const showModal = () => {
        setModal(!modal)
    }

    const setDataforEditing = (data) => {
        setDatainmodal(data)
    }


    //below all the tasks are done using thunk, here we are calling a function inside dispatch we are declared in action
    // this functions were declared here onuly, later refactored and was taken in action.js 

    const getData = async () => {
        dispatch(getToDo());
    }

    const addTolist = async () => {

        dispatch(addToDo(todo));

        // dispatch(Actions(ADD_TODO_LOADING, ""))

        // const payload = {
        //     id: nanoid(4),
        //     title: todo,
        //     status: false
        // }

        // try {
        //     const res = await axios.post("http://localhost:3004/todos", payload)
        //     dispatch(Actions(ADD_TODO_SUCCESS, res.data))
        //     getData();
        // } catch (err) {
        //     dispatch(Actions(ADD_TODO_ERROR, err))
        // }

    }

    const toggleTask = async (e) => {

        dispatch(toggleToDo(e));

        // dispatch(Actions(UPDATE_TODO_LOADING, ""))

        // try {
        //     const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { status: !e.status })
        //     console.log(res.data)
        //     dispatch(Actions(UPDATE_TODO_SUCCESS, res.data))
        //     getData();
        // } catch (err) {
        //     dispatch(Actions(UPDATE_TODO_ERROR, err))
        // }

    }

    const deleteTask = async (e) => {

        dispatch(deleteToDo(e));

        // dispatch(Actions(DELETE_TODO_LOADING, ""))

        // try {
        //     const res = await axios.delete(`http://localhost:3004/todos/${e.id}`)
        //     console.log(res.data)
        //     dispatch(Actions(DELETE_TODO_SUCCESS, res.data))
        //     getData();
        // } catch (err) {
        //     dispatch(Actions(DELETE_TODO_ERROR, err))
        // }

    }


    return loading ?

        (<h1>Loading ...</h1>) : error ? (<h1>error</h1>) : (<div>

            <div style={{ filter: modal ? "blur(5px)" : "blur(0px)" }}>

                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

                <button onClick={addTolist}>Add TODO</button>

                <Total prop={count}/>

                {data.map((e) => {
                    return <div key={e.id} className={styles.todos}>
                        <Link to={`todo/${e.id}`}>
                            <h1>{e.title}-{e.status ? "Done" : "Not Done"}</h1>
                        </Link>

                        <button onClick={() => {
                            showModal()
                            setDataforEditing(e)
                        }}>Edit</button>

                        <button onClick={() => toggleTask(e)}>{e.status ? "Not Complete" : "Complete"}</button>
                        <button onClick={() => deleteTask(e)}>Delete</button>

                    </div>

                })}
            </div>

            {modal ? <EditTodo props={showModal} data={datainmodal} /> : ""}
        </div>
        )
}

