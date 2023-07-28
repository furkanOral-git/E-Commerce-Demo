import "../assets/CollectionSection.scss"
import Product from "./Product.jsx";
import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import { RequestService, PageModel } from "../services/service.js"
import { useDataStore } from "./States";


export default function SectionCollection() {
    const { products } = useDataStore()
    const [pageModel, setPageModel] = useState(new PageModel())
    const [refresh, setRefresh] = useState()

    useEffect(() => {

        if (!!products) {

            pageModel?.createPages(12, 1, products, p => p.campaignId == 2)
            setRefresh({})
        }


    }, [products])


    return (
        <>

            <div className="App__Section__Collections">
                <div className="App__Section__Collections-products">
                    {pageModel?.Data?.map((product) => (
                        <Product key={product.id} productJson={product} />
                    ))}
                </div>
                <div className="App__Section__Collections-rightSide">HEMEN GÖZ AT</div>
            </div>
        </>

    )
}
