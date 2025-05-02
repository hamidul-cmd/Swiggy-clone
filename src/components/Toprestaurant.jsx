import React, { useState, useEffect, useRef } from "react";
import ToprestaurantCird from "./ToprestaurantCird";

function Toprestaurant() {
  const [translate, setTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [toprestaurantData, settoprestaurantData] = useState([]);

  async function fetchData() {
    try {
      const proxyUrl = "https://corsproxy.io/?";
      const targetUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      settoprestaurantData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  // Calculate the maximum number of slides
  const cardWidth = 273; // Width of each card
  const gapWidth = 24; // Gap between cards
  const itemWidth = cardWidth + gapWidth; // Total width of each item including gap

  // Calculate how many cards are visible in the container
  const getVisibleCards = () => {
    if (!containerRef.current || !data) return 1;

    const containerWidth = containerRef.current.clientWidth;
    const visibleCards = Math.floor(containerWidth / itemWidth);
    return Math.min(visibleCards, data.length); // Never show more than available data
  };

  // Handle next slide
  function handleNext() {
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, data.length - visibleCards);
    const isCurrentlyAtEnd = currentIndex >= maxIndex;

    if (isCurrentlyAtEnd) {
      setCurrentIndex(0);
      setTranslate(0);
    } else {
      const nextIndex = Math.min(currentIndex + 1, maxIndex);
      setCurrentIndex(nextIndex);
      setTranslate(-nextIndex * itemWidth);
    }
  }

  // Handle previous slide
  function handlePrev() {
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, data.length - visibleCards);
    const isCurrentlyAtStart = currentIndex === 0;

    if (isCurrentlyAtStart) {
      setCurrentIndex(maxIndex);
      setTranslate(-maxIndex * itemWidth);
    } else {
      const prevIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(prevIndex);
      setTranslate(-prevIndex * itemWidth);
    }
  }

  return (
    <>
      <section className="max-w-[1500px] m-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold select-none pointer-events-none capitalize">
            top restaurant chines in delhi
          </h3>
          <div className="flex gap-5">
            <div
              onClick={handlePrev}
              className={`p-3 cursor-pointer rounded-full transition-colors bg-gray-70`}
            >
              <svg
                className={`h-7.5 w-7.5`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
            </div>
            <div
              onClick={handleNext}
              className={`p-3 cursor-pointer rounded-full transition-colors bg-gray-70`}
            >
              <svg
                className={`h-7.5 w-7.5`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-hidden h-[380px] mt-12.5 mb-10">
          <div
            style={{ transform: `translateX(${translate}px)` }}
            className="absolute top-0 left-0 flex gap-6 transition-all duration-150 ease-in"
          >
            {toprestaurantData.map((data) => {
              return <ToprestaurantCird data={data} key={data.info.id} />;
            })}
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}

export default Toprestaurant;
