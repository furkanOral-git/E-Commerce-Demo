import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import "../assets/SectionCategories.scss"
import Product from "./Product"
import { PageModel, RequestService } from "../services/service"
import { useDataStore } from "./States"


const SectionCategories = forwardRef((props, ref) => {

    const [activeTitle, setActiveTitle] = useState({ id: 0, name: "HEPSİ" })
    const [pageModel, setPageModel] = useState(new PageModel())
    const { products, categories, campaigns } = useDataStore()
    const [refresh, setRefresh] = useState({})
    const [pageNumber, setPageNumber] = useState()


    const updatePage = (page = 1, size = 15) => {

        setPageNumber(page)
        if (activeTitle.id == 0) {

            pageModel?.createPages(size, page, products)
            return;
        }
        let isCategory = categories?.some(c => c.name == activeTitle?.name)

        if (isCategory) {

            pageModel?.createPages(size, page, products, p => p.categoryId == activeTitle.id)
        }
        else {
            pageModel?.createPages(size, page, products, p => p.campaignId == activeTitle.id)
        }


    }
    const next = () => {

        if (pageModel.HasNext) {
            const number = pageModel.CurrentPage + 1
            pageModel.getPage(number)
            setPageNumber(number)
        }
    }
    const previous = () => {


        if (pageModel.HasPrevious) {

            const number = pageModel.CurrentPage - 1
            pageModel.getPage(number)
            setPageNumber(number)
        }
    }

    useEffect(() => {
        updatePage()
        setRefresh({})
    }, [activeTitle])

    useEffect(() => {
        if (!!products) {

            pageModel?.createPages(15, 1, products)
            setRefresh({})
        }
    }, [products])

    useEffect(() => {

        updatePage()
        setRefresh({})

    }, [pageModel])




    return (

        <div className="App__Section__Categories">
            <div className="App__Section__Categories__SideBar">
                <span className="App__Section__Categories__SideBar-title">KATEGORİLER</span>
                <div className="App__Section__Categories__SideBar__Container">
                    {categories?.map((value, index) => {
                        return <span key={index} onClick={() => { setActiveTitle(value) }} className="App__Section__Categories__SideBar-category">{value?.name}</span>
                    })}
                </div>
                <span className="App__Section__Categories__SideBar-title">ÖZEL PARÇALAR</span>
                <div className="App__Section__Categories__SideBar__Container">
                    {campaigns?.map((value, index) => {
                        return <span key={index} onClick={() => { setActiveTitle(value) }} className="App__Section__Categories__SideBar-category">{value?.name}</span>
                    })}
                </div>
            </div>
            <div className="App__Section__Categories__Showcase">
                <div className="App__Section__Categories__Showcase-title"><span>{activeTitle?.name}</span></div>
                <div className="App__Section__Categories__Showcase__Tools">
                    <span className="App__Section__Categories__Showcase__Tools-searchResult">{pageModel?.Total} adet ürün bulundu.</span>
                    <div className="App__Section__Categories__Showcase__Tools-navigation navigation">
                        <span onClick={() => previous()} className="navigation-previous material-symbols-outlined">arrow_back</span>
                        <span className="navigation-active">{pageModel.PageCount == 0 ? 0 : pageNumber}/{pageModel.PageCount}</span>
                        <span onClick={() => next()} className="navigation-next material-symbols-outlined">arrow_forward</span>
                    </div>
                    <span className="App__Section__Categories__Showcase__Tools-filter material-symbols-outlined ">tune</span>
                </div>
                <div className="App__Section__Categories__Showcase-products">
                    {pageModel?.Data?.map((product) => {
                        return <Product key={product.id} productJson={product} />
                    })}
                </div>

            </div>
        </div>
    )
})











export default SectionCategories

