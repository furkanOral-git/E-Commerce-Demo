import "../assets/Navigation.scss"
import Logo from "../assets/svg/Logo.png"
import Search from "./Search"

function Navigation({ datas }) {
    
    return (

        <ul className="App__Navigation">

            <li className="App__Navigation__Logo">
                <img src={Logo} alt="" className="Logo" />
            </li>
            <Search/>
            {datas.map((data, key) => {
                return (<li key={key} className="App__Navigation__Item">
                    <button key={key} className="btn btn--primary">{data.title}</button>
                </li>)

            })}
        </ul>
    )
}
export default Navigation