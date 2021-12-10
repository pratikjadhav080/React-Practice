import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return <div id="navbar">
        <Link to="/">
            <h1>Home</h1>
        </Link>
        <Link to="/login">
            <h1>Login</h1>
        </Link>
        <Link to="/todo">
            <h1>TODO</h1>
        </Link>
    </div>
}
