import { useState } from "react"
import { Decisions } from "./Decisions";
import '../styles/restaurant.css';

import { NewRestau } from "./NewRestauModal";
import { DisplayRes } from "./DisplayRestaurant";
const data = require('../data/restaurantdata.json');

export const Restaurant = () => {

    const [modal, setModal] = useState(false)
    const [dish, setDish] = useState(data)

    const showModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="outsidecontainer" style={{ filter: modal ? "blur(5px)" : "blur(0px)" }}>

                <Decisions className="outsideitem" props={showModal} />

                <div class="vl outsideitem"></div>

                <DisplayRes props = {dish}/>
                
            </div>

            {modal ? <NewRestau props={showModal} /> : ""}
        </>

    )
}