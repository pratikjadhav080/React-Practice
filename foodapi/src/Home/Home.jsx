import { useState } from "react"
import axios from 'axios';
import { Dishecards } from "../DishCard/Dishcard";
import styles from "./Home.module.css"

export const Home = () => {

    const [dishname, setDishname] = useState("")
    const [dishes, setDishes] = useState([])
    const [noDish, setNoDish] = useState(false)

    const FindDishes = async () => {

        if (!dishname) return;

        const res = await axios.get(`${process.env.REACT_APP_URL}?s=${dishname}`)

        console.log(res.data)
        const { meals } = res.data

        if (!meals) {
            setNoDish(true)
            setDishes([])
        } else {
            setDishes(meals)
        }
    }

    return <div className={styles.home}>
        <input type="text" value={dishname} onChange={(e) => setDishname(e.target.value)} placeholder="Enter the dish name" />
        <button onClick={FindDishes}>Search</button>
        <div>
            {dishes.length > 0 ? <Dishecards props={dishes} /> : noDish ? "No Such Meal Available !!!" : ""}
        </div>
    </div>
}