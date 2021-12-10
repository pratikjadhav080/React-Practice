import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { deleteToDo, toggleToDo } from "../Store/TodoStore/actions";
import { Link } from 'react-router-dom'


export const IndividualPost = () => {

    const obj = useParams();
    const dispatch = useDispatch();
    const { data } = useSelector(store => store.todo.todos,shallowEqual);
    const [currentData, setCurrentdata] = useState({})
    const [deleteflag, setDeleteflag] = useState(false)

    useEffect(() => {
        setCurrentdata(data.filter((e) => {
            return e.id === obj.id
        })[0])
    }, [])

    const toSetCurrentData = (data) =>{
        setCurrentdata(data)
    }

    const toSetFlag = () =>{
        setDeleteflag(true)
    }

    const toggleTask = async (e) => {

        dispatch(toggleToDo(e,toSetCurrentData));

        // dispatch(Actions(UPDATE_TODO_LOADING, ""))

        // try {
        //     const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { status: !e.status })
        //     dispatch(Actions(UPDATE_TODO_SUCCESS, res.data))
        //     // setCurrentdata(res.data)
        //     toSetCurrentData(res.data)
        // } catch (err) {
        //     dispatch(Actions(UPDATE_TODO_ERROR, err))
        // }

    }


    const deleteTask = async (e) => {

        dispatch(deleteToDo(e,toSetFlag));

        // dispatch(Actions(DELETE_TODO_LOADING, ""))

        // try {
        //     const res = await axios.delete(`http://localhost:3004/todos/${e.id}`)
        //     dispatch(Actions(DELETE_TODO_SUCCESS, res.data))
        //     setDeleteflag(true)
        // } catch (err) {
        //     dispatch(Actions(DELETE_TODO_ERROR, err))
        // }

    }

    return <>
        <h1>{currentData.title}-{currentData.status ? "Done" : "Not Done"}</h1>
        {deleteflag ? "" : <button onClick={() => toggleTask(currentData)}>{currentData.status ? "Not Complete" : "Complete"}</button>}
        {deleteflag ? "" : <Link to={`/todo/edit/${currentData.id}`}>
            <button>Edit</button>
        </Link>}

        {deleteflag?<h1>"Successfully Deleted"</h1>:<button onClick={() => deleteTask(currentData)}>Delete</button>}

        
        <Link to="/todo">
            <button>BACK TO YOUR TODO</button>
        </Link>
    </>
}