import { useState } from "react"
import { Decisions } from "./Decisions";
import '../styles/restaurant.css';
import { Transaction } from "./Transactiontype";
const data = require('../data/restaurantdata.json');

export const Restaurant = () => {
    const [dish, setDish] = useState(data)

    const dishList = dish.map((e) => {
        return (
            <div className="insideitems">
                <h1>{e.title}</h1>
                <img src={e.image}></img>
                <h1 id="stars">{e.stars}</h1>
                <p>{e.total_votes} votes</p>
                <p>{e.reviews} reviews</p>
                <p>{e.categories.join(",")}</p>
                <p>Cost ₹{e.cost_for_two} for one</p>
                <p>Min ₹{e.cost_for_one}</p>
                <p>Up to {e.time} min</p>
                <Transaction prop={e.payment_methods}/>
            </div>
        )
    })

    return (
        <div className="outsidecontainer">
            <Decisions className="outsideitem"/>
            <div className="insidecontainer outsideitem">
                {dishList}
            </div>

        </div>
    )
}