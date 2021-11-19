import { ActiveUsers } from "./ActiveUsers"
import { Navbar } from "./Navbar"
import '../styles/main.css'

export const Main = () => {
    return <div id="main-container">
        <Navbar />
        <ActiveUsers />
    </div>
}