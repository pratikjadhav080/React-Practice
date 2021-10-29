import { useEffect, useState } from "react";

export function Counter({prop}) {
    const [count,setCount] = useState(prop);

    useEffect(()=>{
        const id = setInterval(()=>{

            console.log("interval running")
            setCount((prev)=>{

                if(prev===1){
                    clearInterval(id)
                    return 0;
                }
                return prev-1;
            })
        },400)

        return ()=>{
            clearInterval(id)
            console.log("interval stopped")
        }
    },[])

    useEffect(()=>{
        window.localStorage.setItem('count',count)
    },[count])

    return <h1>Count:{count}</h1>
}