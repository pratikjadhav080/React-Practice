import '../styles/NewRestau.css';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export const NewRestau = ({ props, addData }) => {

    const [formData, SetformData] = useState({
        title: "",
        payment_methods: {
            cash: false,
            card: false,
            upi: false
        },
        cost_for_one: 0,
        total_votes: 0,
        reviews: 0,
        categories: [],
        image: "",
        stars: 0,
        cost_for_two: 0,
        time: 0
    })

    const restaurantData = [["title", 0], ["image", 0], ["reviews", 1], ["total_votes", 1], ["cost_for_one", 1],
    ["stars", 0], ["cost_for_two", 1], ["time", 1], ["categories", 0]]

    const paymentData = ["cash", "card", "upi"]


    const closeModal = () => {
        props()
    }

    const handleChange = (e) => {

        const { name, value, checked, id } = e.target;

        if (id === "payment") {

            SetformData((prev) => {
                return {
                    ...prev,
                    payment_methods: {
                        ...prev.payment_methods,
                        [name]: checked
                    }
                }
            })

        } else if (id === "categories") {

            SetformData((prev) => {
                return {
                    ...prev,
                    categories: [value]
                }
            })
        } else {

            SetformData({
                ...formData,
                [name]: value
            })
        }

    }

    const sendData = (e) =>{
        e.preventDefault()
        addData(formData)
        props()
    }



    return <>
        <div id='modalBox'>
            <div id='modal-info'>
                <div>
                    <span id="closeBtn"><IoMdClose onClick={closeModal} /></span>
                    <div id='modal-div'>
                        <p id="heading">Add A Dish</p>

                        <form id="formdata" onSubmit={sendData}>

                            {restaurantData.map((e) => {
                                return <div className="inputfields">
                                    <label>
                                        {e[0].toUpperCase()}:<br />
                                        <input id={e[0] === "categories" ? e[0] : ""} onChange={handleChange} type={e[1] ? "number" : "text"} name={e[0]} />
                                    </label><br />
                                </div>
                            })}

                            <div id="paymentdiv">
                                <p id="paymentmethod">PAYMENT METHOD :</p>
                                {paymentData.map((e) => {
                                    return <>
                                        <label>
                                            {e.toUpperCase()}:
                                            <input id="payment" onChange={handleChange} type="checkbox" name={e} />
                                        </label>
                                    </>
                                })}
                                <br />
                            </div>

                            <input id="inputbtn" type="submit" value="Submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

