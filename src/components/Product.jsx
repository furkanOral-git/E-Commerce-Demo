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
export function ProductMin({ productJson }) {
    return (
        <div className="ProductMin">
            <img src={productJson?.imageUrls[3]} className="ProductMin-image" />
            <div className="ProductMin__Details">
                <span className="ProductMin__Details-name">{productJson?.name}</span>
                <span className="ProductMin__Details-code">(0001101)</span>
                <span className="ProductMin__Details-price">{productJson?.price} TL</span>
                <div className="ProductMin__Details__Rate">
                    {!productJson?.rate && <span>Ürün değerlendirmesi yok</span>}
                </div>
            </div>
        </div>
    )
}

