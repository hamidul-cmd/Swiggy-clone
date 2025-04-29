import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function Restaurantmenu() {
  const { id } = useParams();
  const mainid = id.split("-").at(-1).split("rest").at(-1);
  const [restaurantinfo, setrestaurantinfo] = useState([]);
  const [discoundData, setdiscoundData] = useState([]);
  const [menuData, setmenuData] = useState([]);
  console.log(restaurantinfo);

  async function fetchData() {
    try {
      const proxyUrl = "https://corsproxy.io/?";
      const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${mainid}&catalog_qa=undefined&submitAction=ENTER`;

      const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));

      const data = await res.json();
      // console.log(
      //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      //     ?.card
      // );
      setrestaurantinfo(data?.data?.cards[2]?.card?.card?.info);
      setdiscoundData(
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
      setmenuData(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="max-w-[1000px] m-auto pt-12.5">
        <p className="text-sm font-medium text-black/60">
          <Link to="/" className="hover:text-black">
            Home
          </Link>{" "}
          / <span>{restaurantinfo?.city}</span> /{" "}
          <span>{restaurantinfo?.name}</span>
        </p>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-3">
            {restaurantinfo?.name}
          </h2>
          <div className="rounded-xl p-5 bg-linear-to-t from-[#dddce3] to-transparent">
            <div className="rounded-xl bg-white border border-gray-70 p-4">
              <div className="flex gap-1 items-center mb-3 text-base font-semibold">
                <div>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#00a63e"
                  >
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                </div>
                <span>{restaurantinfo?.avgRating}</span>
                <span>({restaurantinfo?.totalRatingsString})</span>
                <span>.</span>
                <span>{restaurantinfo?.costForTwoMessage}</span>
              </div>
              <div className="mb-3">
                <span className="flex text-sm font-medium text-orange-400 underline">{restaurantinfo?.cuisines}</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col items-center w-fit">
                  <span className="block h-2.5 w-2.5 rounded-full bg-[#c3c3c3]"></span>
                  <span className="h-[15px] w-0.5 bg-[#c3c3c3] block"></span>
                  <span className="block h-2.5 w-2.5 rounded-full bg-[#c3c3c3]"></span>
                </div>
                <div>
                  <div className="flex gap-3 text-sm font-medium">
                    <h3>outlate</h3>
                    <h5 className="text-black/60">{restaurantinfo?.locality}</h5>
                  </div>
                  <h3 className="text-sm font-medium">{restaurantinfo?.sla?.slaString}</h3>
                </div>
              </div>
              <div className="flex gap-2 pt-3 border-t border-gray-70 text-sm font-medium">
                <div>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.5 21C3.01472 21 1 18.9853 1 16.5C1 14.0147 3.01472 12 5.5 12C7.98528 12 10 14.0147 10 16.5C10 18.9853 7.98528 21 5.5 21ZM5.5 19C6.88071 19 8 17.8807 8 16.5C8 15.1193 6.88071 14 5.5 14C4.11929 14 3 15.1193 3 16.5C3 17.8807 4.11929 19 5.5 19ZM18.5 21C16.0147 21 14 18.9853 14 16.5C14 14.0147 16.0147 12 18.5 12C20.9853 12 23 14.0147 23 16.5C23 18.9853 20.9853 21 18.5 21ZM18.5 19C19.8807 19 21 17.8807 21 16.5C21 15.1193 19.8807 14 18.5 14C17.1193 14 16 15.1193 16 16.5C16 17.8807 17.1193 19 18.5 19ZM11.023 10.3054L13 12V18H11V13L8.28117 10.7343C8.18221 10.6661 8.08802 10.588 8 10.5C7.21895 9.71895 7.21895 8.45262 8 7.67157L10.8284 4.84315C11.6095 4.0621 12.8758 4.0621 13.6569 4.84315L15.0711 6.25736C16.1746 7.36086 17.5548 8.01891 18.9884 8.23151L18.978 10.2474C17.0335 10.0218 15.1485 9.16323 13.6569 7.67157L11.023 10.3054ZM16 5C14.8954 5 14 4.10457 14 3C14 1.89543 14.8954 1 16 1C17.1046 1 18 1.89543 18 3C18 4.10457 17.1046 5 16 5Z"></path>
                  </svg>
                </div>
                <span>4.5km</span>
                <span>|</span>
                <span className="line-clamp-1">{restaurantinfo?.slugString}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurantmenu;
