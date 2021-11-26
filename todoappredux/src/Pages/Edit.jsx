import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Actions } from "../Store/TodoStore/actions"
import { EDIT_TODO_ERROR, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS } from "../Store/TodoStore/actionTypes"
import { Link } from 'react-router-dom'


export const Edit = () => {

    const [edit, setEdit] = useState("")
    const dispatch = useDispatch();
    const obj = useParams();
    const { data } = useSelector(store => store.todos,shallowEqual);
    const [currentData, setCurrentdata] = useState({})
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setCurrentdata(data.filter((e) => {
            return e.id === obj.id
        })[0])
    }, [])


    const editTodo = async (e) => {

        dispatch(Actions(EDIT_TODO_LOADING, ""))

        try {
            const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { title: edit })
            dispatch(Actions(EDIT_TODO_SUCCESS, res.data))
        } catch (err) {
            dispatch(Actions(EDIT_TODO_ERROR, err))
        }

    }


    return <>
        {flag ? <>
            <h1>"Successfully Edited" </h1>
            <Link to="/">
                <button>Home</button>
            </Link>
        </>
            : <>
                <input type="text" onChange={(e) => setEdit(e.target.value)} placeholder="edit todo" />
                <button onClick={() => {
                    editTodo(currentData)
                    setFlag(true)
                }}>Save</button>
            </>}
    </>
}