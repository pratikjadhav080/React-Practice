import { Actions } from '../Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import { ADD_TODO } from '../Store/actionTypes';

export const Todo = () => {

    const [todo,setTodo] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);

    const addTolist = () =>{

        const data = {
            id:nanoid(4), 
            title : todo,
            status:false
        }

        dispatch(Actions(ADD_TODO, data))
    }

    return <div>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>

        <button onClick={addTolist}>Add TODO</button>

        {todos.map((e) => {
           return <div key={e.id}>
               <h1>{e.title}</h1>
           </div>
        })}

    </div>
}