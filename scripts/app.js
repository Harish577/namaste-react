import React from "react";
import ReactDOM from "react-dom/client";
import "../css/app.css";
import { data as swiggyRestaurantList } from "../resource/card.js";

const HeaderComponent = () => {
  
  return (
    <div className="header-container">
        <div className="logo-container">
            <img className="logo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100797/94312688-food-delivery-logo.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  const {
    name: restaurantName,
    cuisines: cuisine,
    avgRating: starRating,
    cloudinaryImageId: restaurantImage,
    costForTwo,
    locality
  } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantImage
        }
        alt="Sample Image"
      />
      <div style={{fontSize: 15}}>
                <h3 style={{margin: 3}}>{restaurantName}</h3>
                <h5 style={{margin: 2}}>{cuisine.join(", ")}</h5>
                <h5 style={{margin: 2}}>{starRating} Stars</h5>
                <h5 style={{margin: 2}}>{costForTwo}</h5>
                <h5 style={{margin: 2}}>{locality}</h5>
            </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="restaurant-container">
        {swiggyRestaurantList.card.gridElements.infoWithStyle.restaurants.map(
          (it) => (
            <RestaurantCardComponent key={it.info.id} resData={it.info} />
          )
        )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
