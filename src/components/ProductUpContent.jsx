import { useRef, useState } from "react"


export default function ProductUpContent({ images, name = "", v2 = false }) {

    const [activeIndex, setActiveIndex] = useState(0)
    const refContainer = useRef()

    const count = () => {

        const count = images.length - 4

        if (count > 0) {

            return `+ ${count}`
        }

    }


    const renderJsxElements = () => {

        const className = (v2) ? "ProductV2__Image" : "Product__Image"

        return images.map((image, key) => {

            if (activeIndex === key && key <= 3) {
                return <img key={key} style={{ border: "3px solid #F2BE22" }} src={image} className={className} />
            }
            else if (activeIndex !== key && key <= 3) {
                return <img key={key} onClick={() => { setActiveIndex(key) }} src={image} className={className} />
            }
        })

    }


    const v2Prefix = () => {
        if (!v2) {
            return (
                <>
                    <img src={images[activeIndex]} className="Product__Image--active" />
                    <span className="Product-name">{name}</span>
                    <div ref={refContainer} className="Product__SmallImages">
                        {renderJsxElements()}
                    </div>
                    <span className="Product-imageCount">{count()}</span>
                </>
            )
        }
        else {
            return (
                <>
                    <img src={images[activeIndex]} className="ProductV2__Image--active" />
                    <div ref={refContainer} className="ProductV2__SmallImages">
                        {renderJsxElements(true)}
                    </div>
                </>
            )
        }
    }


    return (
        <>
            {v2Prefix(v2)}
        </>
    )
}



