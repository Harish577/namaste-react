import RestaurantCard from "./RestaurantCard.js";
import { data as swiggyRestaurantList } from "../../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  let filteredDataJs =
    swiggyRestaurantList.card.gridElements.infoWithStyle.restaurants;

  // State Variable
  const [filteredData, setFilteredData] = useState(filteredDataJs);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           
            setFilteredData(filteredData.filter((it) => it.info.avgRating > 4.4));
          
          }}
        >
          Top Rated Button
        </button>
      </div>

      <div className="restaurant-container">
        {
        filteredData.map((it) => (
          <RestaurantCard key={it.info.id} resData={it.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
