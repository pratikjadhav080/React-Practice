import { Transaction } from "./Transactiontype";

export const DisplayRes = ({ props }) => {

    return (
    <div className="insidecontainer outsideitem">
        {props.map((e) => (

            <div className="insideitems container">

                <div className="items">
                    <img src={e.image}></img>
                </div>

                <div id="dishdetails" className="items">
                    <h1 id="title">{e.title}</h1>
                    <p className="similar">{e.categories.join(", ")}</p>
                    <p className="similar">Cost ₹{e.cost_for_two} for two</p>
                    <p className="similarfont">Min ₹{e.cost_for_one} &#8194; <span> &#x25cf; Up to {e.time} min</span> </p>
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
        ))}
    </div>
    )
}