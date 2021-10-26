import { useState } from "react"

export const Form = () => {

    const [formData, SetformData] = useState({})

    const handleChange = (e) =>{

        const {name,value} = e.target;

        SetformData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit=(e) =>{
        e.preventDefault()
        console.log(formData)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="enter name" onChange={handleChange}/>
            <input name="age" type="number" placeholder="enter age" onChange={handleChange}/>
            <input  type="submit" value="Submit"/>
        </form>

    </div>
}