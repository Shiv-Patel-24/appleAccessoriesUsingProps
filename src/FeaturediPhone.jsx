import "./FeaturediPhone.css";

export default function FeaturediPhone(prop) {
  return (
    <>
      <div className="FeaturedH1Tag">
        <h1>{prop.header}</h1>
        <div className="FeaturediPhone">
          <div className="FeaturedFirst">
            <img src={prop.image1} alt="" />
            <br />
            <br />
            <h3>{prop.firstTitle}</h3>
            <br />
            <h4>{prop.price1}</h4>
          </div>
          <br />
          <div className="FeaturedFirst">
            <img src={prop.image2} alt="" />
            <br />
            <br />
            <h3>{prop.secondTitle}</h3>
            <br />
            <h4>{prop.price2}</h4>
          </div>
          <br />
          <div className="FeaturedFirst">
            <img src={prop.image3} alt="" />
            <br />
            <br />
            <h3>{prop.lastTitle}</h3>
            <br />
            <h4>{prop.price3}</h4>
          </div>
        </div>
        <h3 className="MoreItems">{prop.moreItems}&nbsp;</h3>
      </div>
      <br />
      
    </>
  );
}
