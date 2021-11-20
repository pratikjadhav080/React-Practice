import '../styles/navbar.css'
import { NavbarData } from './NavbarData'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return <div id="navbar">
        {NavbarData.map((e) => {
           return <Link key={e.title} to={e.path}>
                <h1>{e.title}</h1>
            </Link>
        })}
    </div>
}