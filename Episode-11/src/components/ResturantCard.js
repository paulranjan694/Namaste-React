import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";

const ResturantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info;
    const {deliveryTime} = sla;
    const data = useContext(UserContext);

    return (
        <div className='flex flex-col items-center m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
            <img alt="res-logo" className='rounded-lg h-40 w-[200px]' src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="w-50">{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes delivery</h4>
            <p>{data.loggedInUser}</p>
        </div>
    );
}

// Higher Order Component ==> takes input React component and gives output the enhanced component... doesn't change the existing component...

export const withDiscount = () => {
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg m-2 p-1">Flat Discount Available</label>
                <ResturantCard {...props}/>
            </div>
        );
    }
} 
 
export default ResturantCard;