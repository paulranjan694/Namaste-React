import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info;
    const {deliveryTime} = sla;

    return (
        <div className='res-card'>
            <img alt="res-logo" className='res-logo' src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes delivery</h4>
        </div>
    );
}

export default ResturantCard;