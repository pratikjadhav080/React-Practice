import '../styles/NewRestau.css';
import { IoMdClose } from 'react-icons/io';

export const NewRestau = ({ props }) => {

    const restaurantData = [["title",0], ["image",0], ["reviews",1], ["total_votes",1], ["cost_for_one",1], ["stars",1], ["cost_for_two",1], ["time",1]]

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
                                        {e[0].toUpperCase()}:<br />
                                        <input type={e[1]?"number":"text"} name={e[0]} />
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

