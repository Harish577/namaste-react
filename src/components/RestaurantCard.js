import StyleCard from "./StyleCard";
import {RESTAURANT_URL} from "../../utils/constants.js"

const RestaurantCard = (props) => {
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
      <div className="res-card" style={StyleCard}>
        <img
          className="res-logo"
          src={
            RESTAURANT_URL +
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

  export default RestaurantCard;
  