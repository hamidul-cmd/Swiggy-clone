import React from "react";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Toprestaurant from "./Toprestaurant";
import Restaurantindelhi from "./Restaurantindelhi";

function Body({ posts, toprestaurantData, onlinerestaurantdata }) {
  return (
    <>
      <WhatsOnYourMind data={posts} />
      <Toprestaurant data={toprestaurantData} />
      <Restaurantindelhi data={onlinerestaurantdata} />
    </>
  );
}

export default Body;
