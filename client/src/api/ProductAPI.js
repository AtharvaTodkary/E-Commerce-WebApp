import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductAPI(){

    const [products, setProducts] = useState([]);

    const getProducts = async()=>{
        const res = await axios.get('/api/products')
        setProducts(res.data.products);
        // console.log(res.data);
    }
    useEffect(()=>{
        getProducts()
    },[])
    return{
        products: products
    }
}