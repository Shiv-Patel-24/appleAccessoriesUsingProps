export default function ItemProduct(prop){
    return(
        <div className="ItemProduct">
            <img src="{prop.image}" alt="" />
            <h3>{prop.model}</h3>
        </div>
    )
}