import { useState } from "react"

const data = require('../data/restaurantdata.json');

export const Restaurant = () =>{
    const [dish,setDish] = useState(data)

    const dishList=dish.map((e)=>{
        return (
            <div>
                <h1>{e.name}</h1>
                <img src={e.image_url}></img>
                <p>{e.ratings}</p>
                <p>{e.reviews}</p>
                <p>{e.votes}</p>
            </div>
        )
      })

    return (
    <div>
        <h1>Restaurant</h1>
        {dishList}
    </div>
    )
}