import { useState, useRef } from "react"
import { useDataStore } from "./States"
import "../assets/Search.scss"

export default function Search() {
    const [term, setTerm] = useState("")
    const { products } = useDataStore()
    


    const getProductList = () => {

        return products.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
    }
    
    return (
        <>
            <div className="App__Navigation__Search">
                <input onChange={(e) => { setTerm(e.target.value) }} className="App__Navigation__Search-input" type="search" placeholder="Bir şeyler mi arıyorsunuz?" />
                <a className="material-symbols-outlined">search</a>
                <div tabIndex={1} className="App__Navigation__Search-window">
                </div>
            </div>
        </>

    )
}