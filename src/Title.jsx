import "./Title.css"

export default function Title(prop){
    return(
        <>
            <div className="Title">
                <div className="TitleInside">
                    <h1>{prop.title}</h1>
                </div>
            </div>
        </>
    )
}