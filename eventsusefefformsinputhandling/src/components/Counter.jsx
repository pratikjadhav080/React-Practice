import { useEffect, useRef, useState } from "react"

export const Counter = () => {

    const [counter, Setcounter] = useState(0)
    const currentRef = useRef(null)

    useEffect(() => {
        runcounter()
    }, [])


    const runcounter = () => {
        currentRef.current = setInterval(() => {
            Setcounter((p) => p + 1)
        }, 1000)
    }

    return <div >
        <div>Timer: {counter}</div>
        <button onClick={() => {
            clearInterval(currentRef.current)
            currentRef.current = null;
        }}>Pause</button>

        <button onClick={() => {

            if (currentRef.current) {
                return;
            }
            runcounter()
        }}>Resume</button>

        <button onClick={() => {

            Setcounter(0)
        }}>Reset</button>

    </div>
}