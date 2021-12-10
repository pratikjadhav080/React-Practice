import styles from "./navbar.module.css"
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Store/AuthStore/action';

export const Navbar = () => {
    const dispatch = useDispatch();

    const logout = ()=>{
        dispatch(logoutUser())
        // return <Redirect to="/"/>
    }

    return <div className={styles.navbar}>
        <Link to="/">
            <h1>Home</h1>
        </Link>
        <Link to="/login">
            <h1>Login</h1>
        </Link>
        <Link to="/todo">
            <h1>TODO</h1>
        </Link>

        <button className={styles.btn} onClick={logout}>LOGOUT</button>

    </div>
}
