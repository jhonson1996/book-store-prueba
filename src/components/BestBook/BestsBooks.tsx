import React, {useEffect, useState} from "react";
import Axios from "axios";
import Card from "../Card/Card";
/* import {ProductM} from "../templates/TemplateProducts"; */

export default function Bestsellers() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/bestsellers')
            .then(response => {
                // shuffleArray(response.data);
                setProducts(response.data.splice(0, 5));
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    return (
        <div className="bestsellers-wrap">
            <h1>Bestsellers</h1>

            <div className="bestsellers-product-container">
                <div className="bestsellers-product-wrap">
                    {products.map((i,product) => <Card product={product} key={i}/>)}
                </div>
            </div>

        </div>
    )
};

