import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../GlobalState";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ViewProduct from "../components/ViewProduct";
export default function DetailProduct(){

    const params = useParams();
    const state = useContext(GlobalState);
    const products = state.productAPI.products;
    const [detailProduct, setDetailProduct] = useState({});

    useEffect(()=>{
        if(params){
            products.forEach(product =>{
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params, products])
    console.log(detailProduct)
    return(
        <>
            <NavigationBar />
            <ViewProduct productInfo={detailProduct} />
        </>
    );
}