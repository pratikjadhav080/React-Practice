import { useState } from "react"
import axios from 'axios';
import { Dishcards } from "../DishCard/Dishcard";
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

        setDishname("")
    }

    return <div className={styles.home}>
        <input type="text" value={dishname} onChange={(e) => setDishname(e.target.value)} placeholder="Enter the dish name" />
        <button onClick={FindDishes}>Search</button>

        <div className={styles.dishContainer}>
            {dishes.length > 0 ? <Dishcards props={dishes} /> : noDish ? "No Such Meal Available !!!" : ""}
        </div>

    </div>
}