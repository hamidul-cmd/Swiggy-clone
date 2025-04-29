import React from "react";
import { Link } from "react-router";

function ToprestaurantCird({ data,grid }) {
  return (
    <Link to={`/restaurantmenu/${data?.cta?.link.split("/")[5]}`}>
      <div className={`hover:scale-95 transition-all duration-200 ease-in cursor-pointer ${grid ? "w-full" : "w-[273px]"}`}>
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.info.cloudinaryImageId}`}
            style={{ height: "182px" }}
            alt=""
            className=" w-full h-[182px] block rounded-3xl mb-4"
          />
          <h3 className="text-white text-xl font-semibold absolute bottom-2 left-2 z-20">
            <span>{data?.info?.aggregatedDiscountInfoV3?.header}</span>{" "}
            <span>{data?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
          </h3>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black via-30% via-transparent to-transparent z-10"></div>
        </div>
        <div className="flex flex-col gap-1.5 mt-2">
          <h5 className="text-lg font-medium line-clamp-1">{data.info.name}</h5>
          <div className="flex gap-1.5 items-center text-base font-medium">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00a63e"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
            </svg>
            <span>{data?.info?.avgRating}</span>
            <span>{data?.info?.sla?.slaString}</span>
          </div>
          <p className="line-clamp-1 text-sm text-black/60">
            {data?.info?.cuisines.join(", ")}
          </p>
          <p className="text-sm font-medium">{data?.info?.locality}</p>
        </div>
      </div>
    </Link>
  );
}

export default ToprestaurantCird;
