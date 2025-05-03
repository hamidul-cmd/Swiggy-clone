import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Visibility } from "../context/contextApi";

function Header() {
  const navlinks = [
    {
      name: "swiggy Corporate",
      path: "#",
      icon: (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 15V19H20V15H4ZM11 11V13H13V11H11ZM9 3V5H15V3H9Z"></path>
        </svg>
      ),
    },
    {
      name: "search",
      path: "#",
      icon: (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
        </svg>
      ),
    },
    {
      name: "offers",
      path: "#",
      icon: (
        <svg
          className="h-5 w-5"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <title>offer</title>
          <path d="M13.7,49.54,8,33.63a3.47,3.47,0,0,1,2.1-4.44,3.93,3.93,0,0,1,.81-.18L27.3,27.3,29,10.79a3.47,3.47,0,0,1,3.81-3.1,2.9,2.9,0,0,1,.71.15l16,4.11L58.8,1.21A3.49,3.49,0,0,1,63.7.83a3.91,3.91,0,0,1,.61.68l9,12.17,15.91-5.8A3.48,3.48,0,0,1,93.69,10a3.44,3.44,0,0,1,.19.83l1.7,16.51L112.09,29a3.47,3.47,0,0,1,2.71,5.09l-7.3,13.77,14,10.83a3.46,3.46,0,0,1,.62,4.87,3.18,3.18,0,0,1-.72.7L109.2,73.33,115,89.24a3.48,3.48,0,0,1-2.08,4.45,3.44,3.44,0,0,1-.83.19l-16.51,1.7L93.88,112a3.48,3.48,0,0,1-3.81,3.1,3.61,3.61,0,0,1-1.27-.38L75,107.49l-10.85,14a3.46,3.46,0,0,1-5.57-.1l-9.08-12.25-15.91,5.74A3.47,3.47,0,0,1,29,112.05L27.3,97.29,10.53,93.82a3.46,3.46,0,0,1-2.7-4.09A2.62,2.62,0,0,1,8,89.11L13.7,73.34,1.4,64.23a3.48,3.48,0,0,1-.72-4.86,3.42,3.42,0,0,1,.77-.75L13.7,49.54Zm62.39-6.2L55.66,78.86a6.86,6.86,0,0,1-.67,1,2.76,2.76,0,0,1-.82.71,3.14,3.14,0,0,1-1.1.31,10.25,10.25,0,0,1-1.31.07H47.9a1.16,1.16,0,0,1-1.16-1.15,1.18,1.18,0,0,1,.21-.67L67.39,43.57a7.2,7.2,0,0,1,.65-1l0-.06a2.84,2.84,0,0,1,.78-.65A3.15,3.15,0,0,1,70,41.59h0a10,10,0,0,1,1.29-.07h3.85a1.16,1.16,0,0,1,1.16,1.15,1.18,1.18,0,0,1-.21.67Zm-7.4,36.07c-1.72-1.8-2.59-4.56-2.59-8.28s.87-6.48,2.59-8.28,4.52-2.7,8.4-2.7,6.68.9,8.4,2.7,2.58,4.56,2.58,8.28-.86,6.48-2.58,8.28-4.52,2.7-8.4,2.7-6.68-.9-8.4-2.7Zm6-11.44v8h1.3a16.21,16.21,0,0,0,3.27-.26c.22-.18.33-.67.33-1.46v-8h-3a3,3,0,0,0-1.58.26c-.21.18-.32.67-.32,1.46ZM37.39,60q-2.58-2.7-2.58-8.28t2.58-8.28q2.58-2.7,8.4-2.7t8.4,2.7q2.58,2.7,2.58,8.28T54.19,60q-2.58,2.7-8.4,2.7T37.39,60Zm6-11.44v8h3a2.93,2.93,0,0,0,1.57-.27c.22-.18.33-.67.33-1.46v-8H46.93a15.28,15.28,0,0,0-3.26.27c-.22.17-.33.66-.33,1.45ZM16,35.46l5,14a3.48,3.48,0,0,1-1.14,4.13L9.3,61.44,19.9,69.3a3.48,3.48,0,0,1,1.2,4L15.84,87.84,31,91a3.48,3.48,0,0,1,3,3.05l1.49,12.9,14.05-5.06A3.47,3.47,0,0,1,53.59,103l7.91,10.68,9.74-12.61A3.48,3.48,0,0,1,75.69,100l11.81,6.21L89,92.1A3.47,3.47,0,0,1,92.06,89L107,87.43,101.8,73.32a3.46,3.46,0,0,1,1.18-4l10.67-7.92-12.52-9.67A3.5,3.5,0,0,1,100,47.18l6.26-11.8L92.1,33.93A3.48,3.48,0,0,1,89,30.82L87.43,15.93,73.32,21.08a3.48,3.48,0,0,1-4-1.18L61.24,9l-7.8,9.07a3.48,3.48,0,0,1-3.5,1.1L35.5,15.5,33.92,30.78a3.47,3.47,0,0,1-3.1,3.14L16,35.46Z" />
        </svg>
      ),
    },
    {
      name: "help",
      path: "#",
      icon: (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
        </svg>
      ),
    },
    {
      name: "sign in",
      path: "#",
      icon: (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
        </svg>
      ),
    },
    {
      name: "cart",
      path: "#",
      icon: (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
        </svg>
      ),
    },
  ];
  const { searchbaropen, setsearchbaropen } = useContext(Visibility);
  const [searchdata, setsearchdata] = useState([]);
  async function fetchData(value) {
    if(value.length===0){
      setsearchdata([]);
      return;
    }
    try {
      const proxyUrl = "https://corsproxy.io/?";
      const targetUrl =(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}`);

      const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      console.log(data?.data);

      setsearchdata(data?.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  async function fatchLatandLng(id) {
    console.log(id);
      const proxyUrl = "https://corsproxy.io/?";
      const targetUrl =(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`);

      const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const placedata = await res.json();
      console.log(placedata);

  }
  return (
    <>
      <header className="select-none">
        <div className="flex justify-between items-center max-w-wrapper m-auto py-3">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                alt=""
                className="h-12.5"
              />
            </Link>
            <div
              onClick={() => setsearchbaropen(!searchbaropen)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span className="text-base font-medium no-select">other</span>
              <span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ff5d0d"
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-7.5">
            {navlinks.map((data, index) => {
              return (
                <Link
                  to={data.path}
                  key={index}
                  className="flex items-center gap-2 cursor-pointer group no-select"
                >
                  <span>{data.icon}</span>
                  <span className="text-base font-medium group-hover:text-[#ff5d0d] transition-all duration-200 ease-in">
                    {data.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
      <section
        className={`fixed p-7.5 top-0 left-0 h-screen w-[40vw] bg-white z-[500] transition-all duration-300 ease-linear ${
          searchbaropen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div
          onClick={() => setsearchbaropen(!searchbaropen)}
          className="absolute top-7.5 right-7.5 cursor-pointer"
        >
          <svg
            className="h-7.5 w-7.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for restaurants"
            className="py-3 px-2.5 outline-none border-2 border-gray-70 active:shadow-md rounded-md"
            onChange={(e) => fetchData(e.target.value)}
          />
          <ul className="space-y-5 mt-7.5">
            {searchdata?.map((data, index) => {
              return (
                <li onClick={()=>fatchLatandLng(data.place_id)} key={index} className="">
                  <span className="block text-base font-medium">
                    {data.structured_formatting.main_text}
                  </span>{" "}
                  <span className="text-sm font-medium text-gray-60">
                    {data.structured_formatting.secondary_text}
                  </span>  
                </li>
                
              );
            })}
          </ul>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Header;
