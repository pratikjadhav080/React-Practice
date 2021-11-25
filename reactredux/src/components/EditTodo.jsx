import { useState } from "react"
import { useDispatch } from 'react-redux';
import { EDIT_TODO_ERROR, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS } from "../Store/TodoStore/actionTypes"
import axios from "axios"
import { Actions } from '../Store/TodoStore/actions';
import { IoMdClose } from 'react-icons/io';
import styles from "./Edit.module.css"

export const EditTodo = ({props,getdata,data}) =>{

    const [edit,setEdit] = useState("")
    const dispatch = useDispatch();

    const gettingData = ()=>{
        getdata()
    }

    const closeModal = () => {
        props()
    }

    const editTodo = async (e) => {

        dispatch(Actions(EDIT_TODO_LOADING, ""))

        try {
            const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { title: edit})
            dispatch(Actions(EDIT_TODO_SUCCESS, res.data))
            gettingData();
            closeModal()
        } catch (err) {
            dispatch(Actions(EDIT_TODO_ERROR, err))
        }

    }

    return <>
    <div className={styles.modalBox}>
        <div className={styles.modal_info}>
            <div>
                <span className={styles.closeBtn}><IoMdClose onClick={closeModal} /></span>
                <div className={styles.modal_div}>
                  <input type="text" onChange={(e)=>setEdit(e.target.value)} placeholder="edit todo"/>
                  <button onClick={()=>editTodo(data)}>Edit</button>
                </div>
            </div>
        </div>
    </div>
</>
}