import { useEffect, useState } from "react";

let id;

export function Counter({prop,endtime,stopcount,resumecount}) {
    const [count,setCount] = useState(prop);
    const [anotheresume,setAnotheresume] = useState(false)

    const intervalon = ()=>{

        console.log("here")
        id = setInterval(()=>{
            
            setCount((prev)=>{

                console.log(prev)
                if(prev===endtime){
                    clearInterval(id)
                    return 0;
                }
                return prev+1;
            })

        },1000)
    }

    useEffect(()=>{

        console.log("here")
       
        intervalon()

        return ()=>{
            clearInterval(id)
            console.log("interval stopped")
        }
    },[])

    useEffect(()=>{

        if(anotheresume){
            console.log("here")
            intervalon()
        }

    },[anotheresume])

    useEffect(()=>{
        window.localStorage.setItem('count',count)

        if(stopcount){
            clearInterval(id)
        }

    },[count])

    useEffect(()=>{
        if(resumecount){
            setAnotheresume(true)
        }else{
            setAnotheresume(false)
        }
    })

    return <h1>Count:{count}</h1>
}