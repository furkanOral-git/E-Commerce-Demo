import { useEffect } from "react";
import "../assets/Product.scss"
import ProductUpContent from "./ProductUpContent.jsx";

export default function Product({ productJson }) {


    return (
        <div className="Product">
            <ProductUpContent images={productJson.imageUrls} name={productJson.name} />
            <span className="Product-description">{productJson.description}</span>
            <span className="Product-price">{productJson.price} TL</span>
        </div>
    )
}



export function ProductV2({ productJson, reversed = false }) {



    const reversePrefix = () => {
        if (reversed) {

            return (
                <div className="ProductV2 ProductV2__Reversed">
                    <span className="ProductV2__Reversed-name">{productJson.name}</span>
                    <span className="ProductV2__Reversed-description">{productJson.description}</span>
                    <span className="ProductV2__Reversed-price">{productJson.price} TL</span>
                    <ProductUpContent images={productJson.imageUrls} v2={true} />
                </div>
            )
        }
        else {
            return (
                <div className="ProductV2">
                    <ProductUpContent images={productJson.imageUrls} v2={true} />
                    <span className="ProductV2-name">{productJson.name}</span>
                    <span className="ProductV2-description">{productJson.description}</span>
                    <span className="ProductV2-price">{productJson.price} TL</span>
                </div>
            )
        }
    }
    return (

        <>
            {reversePrefix()}
        </>

    )
}
