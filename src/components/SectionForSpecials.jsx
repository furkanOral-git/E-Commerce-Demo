
import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import "../assets/SectionForSpecials.scss"
import { RequestService, PageModel } from "../services/service.js"
import { ProductV2 } from "./Product.jsx";
import { useDataStore } from "./States";

function SectionForSpecials() {

    const [pageModelForMen, setPageModelMen] = useState(new PageModel())
    const [pageModelForWomen, setPageModelWomen] = useState(new PageModel())
    const { products } = useDataStore()
    const [refresh, setRefresh] = useState()



    useEffect(() => {
        
        if (!!products) {
            
            pageModelForMen?.createPages(3, 1, products, p => p.campaignId == 5)
            pageModelForWomen?.createPages(3, 1, products, p => p.campaignId == 4)
            setRefresh({})
        }
        
    }, [products])


    const renderLeftSide = () => {

        return pageModelForMen?.Data?.map((product, index) => (
            (product.campaignId == 5) ? < ProductV2 key={product.id} productJson={product} /> : undefined
        ))
    }
    const renderRightSide = () => {

        return pageModelForWomen?.Data?.map((product, index) => (
            product.campaignId == 4 ? <ProductV2 key={product.id} productJson={product} reversed={true} /> : undefined
        ))
    }


    return (
        <div className="App__Section__Specials">
            <button className="App__Section__Specials__LeftBtn Btn__Special">ERKEK REYONU</button>
            <div className="App__Section__Specials-Left">{renderLeftSide()}</div>
            <div className="App__Section__Specials-Right">{renderRightSide()}</div>
            <button className="App__Section__Specials__RightBtn Btn__Special">KADIN REYONU</button>
        </div>
    )
}
export default SectionForSpecials