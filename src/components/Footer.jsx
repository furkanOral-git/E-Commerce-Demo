import FooterBg from "../assets/imgs/Footer-bg.jpg"
import Logo from "../assets/svg/Logo.png"
import "../assets/Footer.scss"
import { footerDatas } from "../datas/datas"
import { useState } from "react"
export default function Footer() {
    const [activeTitle, setActiveTitle] = useState(0)

    
    return (
        <div className="App__Section__Footer">
            <div className="App__Section__Footer-bg" style={{ backgroundImage: `url(${FooterBg})`, objectFit: "cover" }}></div>
            <img className="Logo" src={Logo} />
            <div className="Contents">
                <ul className="App__Section__Footer__Contents Contents__Titles">
                    {footerDatas.map((value, index) => (
                        <li key={index}>
                            <button onClick={() => setActiveTitle(index)} className="Contents__Titles-title">{value.title}</button>
                        </li>
                    ))}
                </ul>
                <p className="Contents-content">{footerDatas[activeTitle]?.content}</p>
            </div>
        </div>
    )
}