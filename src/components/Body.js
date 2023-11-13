import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  
  // State Variable
  const [filteredData, setFilteredData] = useState([]);
  const [searchfilteredData, setSearchfilterData] = useState([]);
  //whenever state variable, treact triggers reconciliation cycle(re-renders the components)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setFilteredData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchfilterData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(it) => {
              setSearchText(it.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
               const searchfilteredData = filteredData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setSearchfilterData(searchfilteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
           
            setFilteredData(filteredData.filter((it) => it.info.avgRating > 4.2));
            setSearchfilterData(filteredData.filter((it) => it.info.avgRating > 4.2));
          }}
        >
          Top Rated Button
        </button>
      </div>

      <div className="restaurant-container">
        {
        searchfilteredData.map((it) => (
          <RestaurantCard key={it.info.id} resData={it.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
