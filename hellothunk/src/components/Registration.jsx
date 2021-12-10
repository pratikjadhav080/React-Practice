
import { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router"
import { registerUser } from "../Store/RegistrationStore/action";


export const Registration = () => {

    const dispatch = useDispatch();
    const { registered, error } = useSelector(store => store.registration, shallowEqual)

    const [registrationData, setregistrationData] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    })

    const handleData = (e) => {
        const { value, name } = e.target;
        setregistrationData({
            ...registrationData,
            [name]: value
        })
    }

    const submitData = (e) => {
        e.preventDefault()
        dispatch(registerUser(registrationData))
    }


    return <>
        {
            error ? <h1>You are already A User, Please click on the login Tab</h1> :

                <div>
                    <form onSubmit={submitData}>
                        <input type="text" name="name" onChange={handleData} placeholder="name"/><br />
                        <input type="email" name="email" onChange={handleData} placeholder="email" /><br />
                        <input type="password" name="password" onChange={handleData} placeholder="password" /><br />
                        <input type="text" name="username" onChange={handleData} placeholder="username"/><br />
                        <input type="number" name="mobile" onChange={handleData} placeholder="mobile"/><br />
                        <input type="text" name="description" onChange={handleData} placeholder="description"/><br />

                        <input type="submit" value="SUBMIT" />
                    </form>
                </div>
        }
    </>
}



// {
//     "name": "MASAI School",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!"
//   }
//pratikjadhav9911