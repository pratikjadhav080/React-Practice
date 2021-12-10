import styles from "./Login.module.css"
import { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router"
import { loginUser } from "../Store/AuthStore/action";

export const Login = () => {

    const dispatch = useDispatch();
    const {isAuth} = useSelector(store => store.auth,shallowEqual)

    const [loginData, setLoginData] = useState({
        password: "",
        username: ""
    })

    const handleData = (e) => {
        const { value, name } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const submitData = (e) => {
        e.preventDefault()
        dispatch(loginUser(loginData))
    }

    
    if (isAuth) {
        return <Redirect to="/dashboard" />
    }

    return <>
        <div className={styles.login}>
            <form onSubmit={submitData}>
                <input type="text" name="username" onChange={handleData} /><br />
                <input type="password" name="password" onChange={handleData} /><br />
                <input className={styles.btn} type="submit" value="SUBMIT" />
            </form>
        </div>

    </>
}