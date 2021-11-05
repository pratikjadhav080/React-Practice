import '../styles/NewRestau.css';
import { IoMdClose } from 'react-icons/io';

export const NewRestau = ({props}) =>{


    const closeModal = () =>{
        props()
    }


    return <>
        <div id='modalBox'>
        <div id='modal-info'>
            <div>
                <span id="closeBtn"><IoMdClose onClick={closeModal}/></span>
                <div id='modal-div'>
                    <p>Add Restaurant Details</p>
                </div>
            </div>
        </div>
    </div>
    </>
}

