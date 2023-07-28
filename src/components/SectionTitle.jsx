import "../assets/SectionTitle.scss"

export default function SectionTitle({ properties }) {

    let content;
    if (properties.reverse === false) {
        content = <Content title={properties.title} underline={properties.underline} />
    }
    else {
        content = <ContentReversed title={properties.title} underline={properties.underline} />
    }

    return (
        <div className="App__Section__SectionTitle">
            {content}
        </div>
    )
}
function underlineResolver(underline,title) {
    if(underline === true){

        return <div style={{ backgroundImage: "linear-gradient(to bottom,transparent 90%,#CFD2CF 90%)" }} className="App__Section__SectionTitle-title">{title}</div>
    }
    else
    {
        return <div className="App__Section__SectionTitle-title">{title}</div>
    }
}
function Content({ title, underline }) {

    let titleCom = underlineResolver(underline,title)

    return (
        <>
            {titleCom}  
            <div className="App__Section__SectionTitle-blank"></div>
        </>
    )
}
function ContentReversed({ title, underline }) {

    let titleCom = underlineResolver(underline, title)

    return (
        <>
            <div className="App__Section__SectionTitle-blank"></div>
            {titleCom}
        </>
    )
}