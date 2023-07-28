import "../assets/Flag.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Flag({ datas }) {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false
    }

    return (
        <div  className="App__Flag">
            <Slider {...settings}>
                {datas.map((item, key) => {
                    return (
                        <span key={key} className="App__Flag__Item">{item}</span>
                    )
                })}
            </Slider>
        </div>
    )
}