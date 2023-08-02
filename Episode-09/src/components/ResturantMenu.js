import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () =>{
    // const [resInfo, setResInfo] = useState(null);

    // get the dynamic path using useParams() hooks - useParams return an object likke this->{resId: '123'}
    const {resId} = useParams();
    const resInfo = useResturantMenu(resId);
    // commenting as using custom hook to fetch data as per Single Rersposibility Principle
    // useEffect(() => {
    //     fetchMenu();
    // },[])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+resId);
        
    //     const json = await data.json();
    //     setResInfo(json?.data);
    // }
    
    // commenting out, took the return Shimmer component above the object dest. see below
    // const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {}; //nice hack - if resInfo is empty or null, fallback to empty object..

    if(resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}</li>)}
               
            </ul>
        </div>
    )
}

export default ResturantMenu;