import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import axios from 'axios';
import { DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "../Store/TodoStore/actionTypes";
import { useEffect, useState } from "react";
import { Actions } from "../Store/TodoStore/actions";
import { Link } from 'react-router-dom'


export const IndividualPost = () => {

    const obj = useParams();
    const dispatch = useDispatch();
    const { data } = useSelector(store => store.todos,shallowEqual);
    const [currentData, setCurrentdata] = useState({})
    const [deleteflag, setDeleteflag] = useState(false)

    useEffect(() => {
        setCurrentdata(data.filter((e) => {
            return e.id === obj.id
        })[0])
    }, [])

    const toggleTask = async (e) => {

        dispatch(Actions(UPDATE_TODO_LOADING, ""))

        try {
            const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { status: !e.status })
            dispatch(Actions(UPDATE_TODO_SUCCESS, res.data))
            setCurrentdata(res.data)
        } catch (err) {
            dispatch(Actions(UPDATE_TODO_ERROR, err))
        }

    }

    const deleteTask = async (e) => {

        dispatch(Actions(DELETE_TODO_LOADING, ""))

        try {
            const res = await axios.delete(`http://localhost:3004/todos/${e.id}`)
            dispatch(Actions(DELETE_TODO_SUCCESS, res.data))
            setDeleteflag(true)
        } catch (err) {
            dispatch(Actions(DELETE_TODO_ERROR, err))
        }

    }

    return <>
        <h1>{currentData.title}-{currentData.status ? "Done" : "Not Done"}</h1>
        {deleteflag ? "" : <button onClick={() => toggleTask(currentData)}>{currentData.status ? "Not Complete" : "Complete"}</button>}
        {deleteflag ? "" : <Link to={`/todo/edit/${currentData.id}`}>
            <button>Edit</button>
        </Link>}

        <button onClick={() => deleteTask(currentData)}>{deleteflag ? "Successfully Deleted" : "Delete"}</button>
        <Link to="/">
            <button>Home</button>
        </Link>
    </>
}