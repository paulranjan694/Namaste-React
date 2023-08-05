import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredResturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  console.log("body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //  console.log(json);
    setListOfResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional Rendering
  /*if(listOfResturants.length === 0){
      return <Shimmer/>
    }*/


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>Looks like you're offline!! Please check your internet connection... </h1>);

  return (listOfResturants.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black border-solid"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-gray-300 px-4 py-1 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestuarants = listOfResturants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(filteredRestuarants);
              setFilteredResturants(filteredRestuarants);
            }}
          >
            Search
          </button>
        <button
          className="bg-green-300 px-4 py-1 m-2 rounded-lg"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturants.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/"+ resturant.info.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
