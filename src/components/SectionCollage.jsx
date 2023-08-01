import "../assets/SectionCollage.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductMin } from "./Product"
import { useDataStore } from "./States";


export default function SectionCollage() {
    const { products } = useDataStore()

    const settings = {

        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 4000,
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,


    }
    return (
        <div className="App__Section__Collage">
            <Slider {...settings}>
                <CollageItem product={products[0]} />
                <CollageItem product={products[1]} />
                <CollageItem product={products[2]} />
                <CollageItem product={products[3]} />
            </Slider>
        </div>
    )
}
function CollageItem({ product }) {
    return (
        <div className="App__Section__Collage__Item">
            <div className="App__Section__Collage__Item__Container App__Section__Collage__Item__Container-1">
                <img className="Container__Background" src="/src/assets/imgs/kolaj1.jpg" />
                <ProductMin productJson={product} />
                <div className="Container__Consumer">
                    <span className="Container__Consumer-name">H**** S***</span>
                    <p className="Container__Consumer-commit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores esse neque sint officia animi sit. Voluptate, cumque explicabo. Qui, fugiat molestiae? Repellendus cum laboriosam atque ullam deleniti deserunt magni? Beatae vel sunt rem modi unde incidunt culpa tenetur, ducimus veritatis eligendi dolorem, neque harum nisi ipsam? Et ea soluta ut, nisi ratione, possimus voluptas rem, exercitationem odio inventore ipsa aliquid consectetur commodi magnam. Fugiat ut nam possimus cum earum porro ab id quaerat officiis commodi excepturi magnam officia sapiente doloribus ratione ipsam, veniam tempore exercitationem. Esse optio quod, odit, veniam modi est odio maiores ea laboriosam ratione, voluptates dolor?</p>
                </div>
            </div>
            <div className="App__Section__Collage__Item__Container App__Section__Collage__Item__Container-2">
                <img className="Container__Background" src="/src/assets/imgs/kolaj2.jpg" />
                <ProductMin productJson={product} />
                <div className="Container__Consumer">
                    <span className="Container__Consumer-name">H**** S***</span>
                    <p className="Container__Consumer-commit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores esse neque sint officia animi sit. Voluptate, cumque explicabo. Qui, fugiat molestiae? Repellendus cum laboriosam atque ullam deleniti deserunt magni? Beatae vel sunt rem modi unde incidunt culpa tenetur, ducimus veritatis eligendi dolorem, neque harum nisi ipsam? Et ea soluta ut, nisi ratione, possimus voluptas rem, exercitationem odio inventore ipsa aliquid consectetur commodi magnam. Fugiat ut nam possimus cum earum porro ab id quaerat officiis commodi excepturi magnam officia sapiente doloribus ratione ipsam, veniam tempore exercitationem. Esse optio quod, odit, veniam modi est odio maiores ea laboriosam ratione, voluptates dolor?</p>
                </div>
            </div>
            <div className="App__Section__Collage__Item__Container App__Section__Collage__Item__Container-3">
                <img className="Container__Background" src="/src/assets/imgs/kolaj3.jpg" />
                <ProductMin productJson={product} />
                <div className="Container__Consumer">
                    <span className="Container__Consumer-name">H**** S***</span>
                    <p className="Container__Consumer-commit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores esse neque sint officia animi sit. Voluptate, cumque explicabo. Qui, fugiat molestiae? Repellendus cum laboriosam atque ullam deleniti deserunt magni? Beatae vel sunt rem modi unde incidunt culpa tenetur, ducimus veritatis eligendi dolorem, neque harum nisi ipsam? Et ea soluta ut, nisi ratione, possimus voluptas rem, exercitationem odio inventore ipsa aliquid consectetur commodi magnam. Fugiat ut nam possimus cum earum porro ab id quaerat officiis commodi excepturi magnam officia sapiente doloribus ratione ipsam, veniam tempore exercitationem. Esse optio quod, odit, veniam modi est odio maiores ea laboriosam ratione, voluptates dolor?</p>
                </div>
            </div>
            <div className="App__Section__Collage__Item__Container App__Section__Collage__Item__Container-4">
                <img className="Container__Background" src="/src/assets/imgs/kolaj4.jpg" />
                <ProductMin productJson={product} />
                <div className="Container__Consumer">
                    <span className="Container__Consumer-name">H**** S***</span>
                    <p className="Container__Consumer-commit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores esse neque sint officia animi sit. Voluptate, cumque explicabo. Qui, fugiat molestiae? Repellendus cum laboriosam atque ullam deleniti deserunt magni? Beatae vel sunt rem modi unde incidunt culpa tenetur, ducimus veritatis eligendi dolorem, neque harum nisi ipsam? Et ea soluta ut, nisi ratione, possimus voluptas rem, exercitationem odio inventore ipsa aliquid consectetur commodi magnam. Fugiat ut nam possimus cum earum porro ab id quaerat officiis commodi excepturi magnam officia sapiente doloribus ratione ipsam, veniam tempore exercitationem. Esse optio quod, odit, veniam modi est odio maiores ea laboriosam ratione, voluptates dolor?</p>
                </div>
            </div>
        </div>
    )
}