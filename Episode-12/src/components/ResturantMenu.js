import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";
import RestuarantCategory from "./RestuarantCategory";

const ResturantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // get the dynamic path using useParams() hooks - useParams return an object likke this->{resId: '123'}
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
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

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //   console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/**Category Accordions */}
      {categories.map((category,index) => (
        // Controlled Component
        <RestuarantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
