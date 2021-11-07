import { useState } from "react"
import { Decisions } from "./Decisions";
import '../styles/restaurant.css';
import { NewRestau } from "./NewRestauModal";
import { DisplayRes } from "./DisplayRestaurant";
const data = require('../data/restaurantdata.json');

export const Restaurant = () => {

    const [modal, setModal] = useState(false)
    const [dish, setDish] = useState(data)
    const [filter,setFilter] = useState([])


    const addnewDish = (newDish) => {
        
        setDish([...dish, newDish])
    }

    const showModal = () => {
        setModal(!modal)
    }

    const aboverating = (rating) =>{
        const newArray = dish.filter((e) => Number(e.stars)>rating).sort((a,b)=>Number(a.stars)-Number(b.stars))
        setFilter(newArray)
    }

    const paymentFilter = (item) =>{
        const newArray = dish.filter((e) => item==="all"?e.payment_methods.card&&e.payment_methods.cash&&e.payment_methods.upi:e.payment_methods[item])
        setFilter(newArray)
    }

    const sortFilter = (item) =>{

        const a = [...dish]

        const newArray = a.sort((a,b)=> item===1? Number(a.cost_for_two)-Number(b.cost_for_two) : Number(b.cost_for_two)-Number(a.cost_for_two))
        setFilter(newArray)
    }


    const list = filter.length?filter:dish

    return (
        <>
            <div className="outsidecontainer" style={{ filter: modal ? "blur(5px)" : "blur(0px)" }}>

                <Decisions className="outsideitem" props={showModal} rate={aboverating} paytype={paymentFilter} sorted={sortFilter}/>

                <div className="vl outsideitem"></div>

                <DisplayRes props = {list}/>

            </div>

            {modal ? <NewRestau props={showModal} addData={addnewDish} /> : ""}
        </>

    )
}