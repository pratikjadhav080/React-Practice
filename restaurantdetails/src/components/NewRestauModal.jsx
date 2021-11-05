import '../styles/NewRestau.css';
import { IoMdClose } from 'react-icons/io';

export const NewRestau = ({ props }) => {

    const restaurantData = ["title", "image", "reviews", "total_votes", "cost_for_one", "stars", "cost_for_two", "time"]

    const closeModal = () => {
        props()
    }


    return <>
        <div id='modalBox'>
            <div id='modal-info'>
                <div>
                    <span id="closeBtn"><IoMdClose onClick={closeModal} /></span>
                    <div id='modal-div'>
                        <p id="heading">Add Restaurant Details</p>

                        <form id="formdata">

                            {restaurantData.map((e) => {
                                return <div className="inputfields">
                                    <label>
                                        {e.toUpperCase()}:<br />
                                        <input type="text" name={e} />
                                    </label><br />
                                </div>
                            })}
                            <div id="paymentdiv">
                                <p id="paymentmethod">PAYMENT METHOD :</p>
                                <label>
                                    Cash:
                                    <input type="checkbox" name="cash" />
                                </label>
                                <label>
                                    Card:
                                    <input type="checkbox" name="card" />
                                </label>
                                <label>
                                    UPI:
                                    <input type="checkbox" name="upi" />
                                </label>
                                <br />
                            </div>
                            <input id="inputbtn" type="submit" value="Submit" disabled/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

