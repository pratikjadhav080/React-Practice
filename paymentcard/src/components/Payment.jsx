import { useState } from "react"
import {Paymentdata} from "./Paymentdata"


export const Payment = () => {

    const [card, setCard] = useState({
        Amazon: ["28/10/2020","Amazon","Pay","/amazon-logo-png.png","Desktop","rgb(235, 157, 13)"],
        Apple: ["12 Sep 2020", "Apple","Payment","/pngegg.png", "MacOS","rgb(202, 191, 191)"]
    })

    const [flag, setFlag] = useState(true)

    const flagSet =() =>{
        setFlag(!flag)
    }

    return (
        <>
            <Paymentdata props={flag?card.Amazon:card.Apple}  fun ={flagSet}/>
        </>
    )
}

