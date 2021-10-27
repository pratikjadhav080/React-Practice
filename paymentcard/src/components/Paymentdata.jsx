
export const Paymentdata = ({ props, fun }) => {

    const arrowClick = () => {
        fun()
    }

    return (
        <div id="paymentcard" style={{ backgroundColor: props[5] }}>

            <div id="upper">
                <div>
                    <p>{props[0]}</p>
                    <button id="casestudy">Case Study</button>
                </div>
                <div>
                    <img src={props[3]}></img>
                </div>
            </div>

            <div id="middle">
                <h1>{props[1]} Gift</h1>
                <h1>{props[2]}</h1>
            </div>

            <div id="footer">
                <div>
                    <p>{props[4]} - Mobile</p>
                </div>
                <div>
                    <img src="arrow.png" onClick={arrowClick}></img>
                </div>

            </div>

        </div>
    )
}