import "./Title.css"

export default function Title(prop){
    return(
        <>
            <div className="Title">
                <h1>{prop.title}</h1>
            </div>
        </>
    )
}