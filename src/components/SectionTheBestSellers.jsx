import "../assets/TheBestSellers.scss"
import Slider from "react-slick";
import Product from "./Product";
import { RequestService, PageModel } from "../services/service.js"
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDataStore } from "./States";

function SectionTheBestSellers() {

    const [pageModel, setPageModel] = useState(new PageModel())
    const [refresh, setRefresh] = useState()
    const { products } = useDataStore()

    useEffect(() => {

        if (!!products) {
            pageModel.createPages(30, 1, products, p => p.campaignId == 1)
            setRefresh({})
        }

    }, [products])

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    }

    return (
        <div className="App__Section__TheBestSellers">
            <Slider {...settings}>
                {pageModel?.Data?.map((product) => (
                    <Product key={product.id} productJson={product} />
                ))}
            </Slider>
        </div>
    )
}
export default SectionTheBestSellers