import { useState } from "react"

export const Counter = ({init}) => {

    const [count, setCount] = useState(init)  //this is array destructuring..

    const changeCounter = (value) => {
        setCount(value)
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button className="btn" onClick={() => changeCounter(count+1)}>Add</button>
            <button disabled={count === 0} className="btn" onClick={() => changeCounter(count-1)}>Subtract</button>
            <button disabled={count === 0} className="btn" onClick={() => changeCounter(count*2)}>Double</button>
        </>
    )

}