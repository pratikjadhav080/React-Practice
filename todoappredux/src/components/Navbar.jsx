import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return <div id="navbar">
        <Link to="/">
            <h1>Home</h1>
        </Link>
    </div>
}
