import { forwardRef, useEffect, useState, useImperativeHandle } from "react"
import "../assets/SectionForFemale.scss"
import { RequestService, PageModel } from "../services/service.js"
import Product from "./Product.jsx";
import { useDataStore } from "./States";



function SectionForFemale() {

    const [pageModel, setPageModel] = useState(new PageModel())
    const { products } = useDataStore()
    const [refresh, setRefresh] = useState()

    useEffect(() => {
        
        if (!!products) {
            
            pageModel?.createPages(5, 1, products, p => p.campaignId == 3)
            setRefresh({})
        }

    }, [products])

    return (

        <div className="App__Section__SectionForFemale">
            <button className="App__Section__SectionForFemale-btn btn--primary">DAHA FAZLA İNCELE</button>
            <div className="App__Section__SectionForFemale-products">
                {pageModel?.Data?.map((product) => (
                    <Product key={product.id} productJson={product} />
                ))}
            </div>
        </div>
    )
}
export default SectionForFemale