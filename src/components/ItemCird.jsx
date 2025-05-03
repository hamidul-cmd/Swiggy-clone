import React from "react";

function ItemCird({ data }) {
  console.log(data);

  return (
    <div className="p-5 w-full flex gap-2 overflow-hidden justify-between border-b border-gray-400">
      <div className="w-[70%] space-y-2">
        {data.itemAttribute.vegClassifier === "VEG" ? (
          <img
            src="https://www.nicepng.com/png/detail/261-2619376_big-image-egg-veg-or-non-veg.png"
            alt=""
            className="h-3 w-3"
          />
        ) : (
          <img
            src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png"
            alt=""
            className="h-3 w-3"
          />
        )}

        <h3 className="text-lg font-semibold">{data.name}</h3>
        <h5 className="text-base font-medium">
          ₹{data.price && data.price / 100}
          {data.defaultPrice && data.defaultPrice / 100}
        </h5>
        <div className="flex gap-1 text-sm font-medium">
          <span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFD700"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
            </svg>
          </span>
          {data.ratings.aggregatedRating.rating && (
            <span>{data.ratings.aggregatedRating.rating}</span>
          )}

          {data.ratings.aggregatedRating.ratingCountV2 ? (
            <span>({data.ratings.aggregatedRating.ratingCountV2})</span>
          ) : (
            <span>(0)</span>
          )}
        </div>
        <p className=" text-sm font-medium text-gray-35">{data.description}</p>
      </div>
      <div className="relative w-[30%]">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`}
          alt=""
          className="h-[200px] w-[300px] rounded-xl"
        />
        <button className="text-xl font-bold text-green-500 bg-white py-3 px-6 rounded-lg absolute bottom-2 cursor-pointer left-1/2 translate-x-[-50%] uppercase drop-shadow translate-y-[30%]">
          Add
        </button>
      </div>
    </div>
  );
}

export default ItemCird;
