import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WhatsOnYourMind from "./components/WhatsOnYourMind";
import Toprestaurant from "./components/Toprestaurant";
import Restaurantindelhi from "./components/Restaurantindelhi";
import Body from "./components/Body";
import Restaurantmenu from "./components/Restaurantmenu";

function App() {
  const [posts, setPosts] = useState([]);
  const [toprestaurantData, settoprestaurantData] = useState([]);
  const [onlinerestaurantdata, setonlinerestaurantdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Disable design mode to prevent text selection/editing
  useEffect(() => {
    document.designMode = "off";
  }, []);

  // Fallback data in case the API call fails
  const fallbackData = [
    {
      id: "750580",
      imageId: "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    },
    {
      id: "750592",
      imageId:
        "v1675667625/PC_Creative%20refresh/3D_bau/banners_new/Biryani.png",
    },
    {
      id: "750582",
      imageId:
        "v1675667625/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    },
    {
      id: "750223",
      imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    },
    {
      id: "750588",
      imageId:
        "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    },
    {
      id: "750644",
      imageId:
        "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    },
  ];

  async function fetchData() {
    try {
      setLoading(true);
      const proxyUrl = "https://corsproxy.io/?";
      const targetUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      const imageGridCards =
        data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      // console.log(
      //   data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );

      if (imageGridCards && Array.isArray(imageGridCards)) {
        setPosts(imageGridCards);
      } else {
        console.warn("API response structure unexpected, using fallback data");
        setPosts(fallbackData);
      }
      settoprestaurantData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setonlinerestaurantdata(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Using fallback data.");
      setPosts(fallbackData);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          path="/"
          element={
            <Body
              posts={posts}
              toprestaurantData={toprestaurantData}
              onlinerestaurantdata={onlinerestaurantdata}
            />
          }
        ></Route>
        <Route path="/restaurantmenu/:id" element={<Restaurantmenu/>} />
      </Route>
    </Routes>
  );
}

export default App;
