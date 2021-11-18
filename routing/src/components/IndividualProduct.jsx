import { useEffect, useState } from "react";
import '../styles/product.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router";

export const SingleProduct = () =>{

    const obj = useParams();
    const [singledata,setSingleData] = useState({})
    const history = useHistory();

    useEffect(()=>{
        getSingleProduct()
    },[])

    const getSingleProduct = () =>{
        axios.get(`http://localhost:3004/products/${obj.id}`)
        .then(function (response) {
            setSingleData(response.data)
        }).catch((err)=>{
            history.push("/notfound");
        })
    }

    return <div>
            <h1>{singledata.name}</h1>
            <h1>{singledata.price}</h1>
            <Link to={`/products`}>
            <button>Back</button>
            </Link>
        </div> 
}