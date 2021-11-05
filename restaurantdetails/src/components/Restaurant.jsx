import { useState } from "react"
import { Decisions } from "./Decisions";
import '../styles/restaurant.css';
import { Transaction } from "./Transactiontype";
import { NewRestau } from "./NewRestauModal";
const data = require('../data/restaurantdata.json');

export const Restaurant = () => {

    const [modal, setModal] = useState(false)
    const [dish, setDish] = useState(data)

    const showModal = () => {
        setModal(!modal)
    }

    const dishList = dish.map((e) => {
        return (

            <div className="insideitems container">

                <div className="items">
                    <img src={e.image}></img>
                </div>

                <div id="dishdetails" className="items">
                    <h1 id="title">{e.title}</h1>
                    <p className="similar">{e.categories.join(", ")}</p>
                    <p className="similar">Cost ₹{e.cost_for_two} for one</p>
                    <p className="similarfont">Min ₹{e.cost_for_one} &#8194; <span> &#8226; Up to {e.time} min</span> </p>
                    <Transaction prop={e.payment_methods} />
                </div>

                <div id="feedback" className="items">
                    <h1 id="stars">{e.stars}</h1>
                    <p className="votes">{e.total_votes} votes</p>
                    <p className="votes">{e.reviews} reviews</p>
                </div>

                <div>
                    <button id="orderbtn" disabled>Order Online</button>
                </div>

                <div>
                    <button id="favbtn">Add to favourite</button>
                </div>

            </div>
        )
    })

    return (
        <>
            <div className="outsidecontainer" style={{ filter: modal ? "blur(5px)" : "blur(0px)" }}>

                <Decisions className="outsideitem" props={showModal} />

                <div class="vl outsideitem"></div>

                <div className="insidecontainer outsideitem">
                    {dishList}
                </div>
            </div>

            {modal ? <NewRestau props={showModal} /> : ""}
        </>

    )
}