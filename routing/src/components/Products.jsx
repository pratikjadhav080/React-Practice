import { useEffect, useState } from "react";
import '../styles/product.css'
import { Link } from "react-router-dom"
import axios from 'axios';

export const Product = () =>{

    const [data,setData] = useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = () =>{
        axios.get('http://localhost:3004/products')
        .then(function (response) {
            setData(response.data)
        })
    }


    return <table>
        <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Details</th>
        </tr>
    {data.map((e)=>(
        <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <Link to={`/products/${e.id}`}>
            <button>More Details</button>
            </Link>
        </tr>
    ))}
    </table>
}