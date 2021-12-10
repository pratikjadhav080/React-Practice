import { shallowEqual, useSelector } from "react-redux"


export const Home = () => {

    const { isAuth } = useSelector(store => store.auth, shallowEqual)

    return <>
        <h1>Welcome to Your ToDo application.</h1>
        {isAuth ? <><h1>You are already logged in, please click on ToDo tab.</h1>
        </> : <h1>Please click on login tab to proceed and create your own ToDo Tracker.</h1>}
    </>
}