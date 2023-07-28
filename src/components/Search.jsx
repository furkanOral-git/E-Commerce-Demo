import { useState, useRef, useEffect } from "react"
import { useDataStore } from "./States"
import "../assets/Search.scss"
import { ProductMin } from "./Product"
import { render } from "react-dom"

export default function Search() {
    const [term, setTerm] = useState("")
    const { products } = useDataStore()
    const [render, setRender] = useState(null)

    useEffect(() => {

    }, [])
    const createRender = () => {

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
        setRender(filtered)
    }
    const onChange = (e) => {

        setTerm(e.target.value)
        if (e.target.value == "") {
            setRender(null)
        }
        else {
            createRender()
        }

    }
    const renderProducts = () => {

        if (render?.length != 0) {

            return render?.map((product) =>
            (
                <ProductMin key={product.id} productJson={product} />
            )
            )
        }
        else {
            return <div className="App__Navigation__Search-empty">Sonuç bulunamadı</div>
        }

    }
    return (
        <>
            <div className="App__Navigation__Search">
                <input onChange={(e) => { onChange(e) }} className="App__Navigation__Search-input" type="search" placeholder="Bir şeyler mi arıyorsunuz?" />
                <a className="material-symbols-outlined">search</a>
                <div tabIndex={1} className="App__Navigation__Search__Window">
                    <div className="App__Navigation__Search-result">{render?.length > 0 && `${render?.length} adet ürün bulundu`}</div>
                    {renderProducts()}
                </div>
            </div>
        </>

    )
}