import "../assets/Banner.scss"
import bg from "/src/assets/imgs/Banner-bg.jpg"

export default function Banner({ datas }) {


    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }} className="App__Banner">
            <div className="App__Banner__Item">
                <span className="App__Banner__Item-title">{datas[0].Title}</span>
                <span className="App__Banner__Item-message">{datas[0].Message}</span>
                <button className="App__Banner__Item-btn btn--banner">HEMEN GÖZ AT</button>
            </div>
            <div className="App__Banner__Item">
                <span className="App__Banner__Item-title">{datas[1].Title}</span>
                <span className="App__Banner__Item-message">{datas[1].Message}</span>
                <button className="App__Banner__Item-btn btn--banner">HEMEN GÖZ AT</button>
            </div>
        </div>




    )
}