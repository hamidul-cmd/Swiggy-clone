import React from "react";
import ToprestaurantCird from "./ToprestaurantCird";

function Restaurantindelhi({ data }) {
  return (
    <>
      <section className="max-w-[1500px] m-auto mt-12.5">
        <h2 className="text-2xl font-semibold text-black">
          Restaurants with online food delivery in Delhi
        </h2>
        <div className="grid grid-cols-4 gap-x-20 gap-y-5 mt-12.5">
          {data.map((data) => {
            return <ToprestaurantCird data={data} key={data.info.id} grid={true} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Restaurantindelhi;
