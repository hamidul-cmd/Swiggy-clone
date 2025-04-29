import React, { useState, useEffect, useRef } from "react";

function WhatsOnYourMind({ data = [] }) {
  const [translate, setTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef(null);

  // Calculate the maximum number of slides
  const cardWidth = 270; // Width of each card
  const gapWidth = 24; // Gap between cards
  const itemWidth = cardWidth + gapWidth; // Total width of each item including gap

  // Update boundary states when currentIndex or data changes
  useEffect(() => {
    if (!data || data.length === 0) return;

    setIsAtStart(currentIndex === 0);
    setIsAtEnd(currentIndex >= data.length - getVisibleCards());
  }, [currentIndex, data]);

  // Calculate how many cards are visible in the container
  const getVisibleCards = () => {
    if (!containerRef.current) return 1;

    const containerWidth = containerRef.current.clientWidth;
    return Math.floor(containerWidth / itemWidth);
  };

  // Handle next slide
  function handleNext() {
    if (isAtEnd) {
      // If at the end, go back to the first slide
      setCurrentIndex(0);
      setTranslate(0);
    } else {
      // Move to the next slide
      const nextIndex = Math.min(
        currentIndex + 1,
        data.length - getVisibleCards()
      );
      setCurrentIndex(nextIndex);
      setTranslate(-nextIndex * itemWidth);
    }
  }

  // Handle previous slide
  function handlePrev() {
    if (isAtStart) {
      // If at the start, go to the last possible position
      const lastPossibleIndex = Math.max(0, data.length - getVisibleCards());
      setCurrentIndex(lastPossibleIndex);
      setTranslate(-lastPossibleIndex * itemWidth);
    } else {
      // Move to the previous slide
      const prevIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(prevIndex);
      setTranslate(-prevIndex * itemWidth);
    }
  }

  // These functions are now handled directly in handleNext and handlePrev

  return (
    <>
      <section className="mt-12.5 max-w-[1500px] m-auto px-4 select-none">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold select-none pointer-events-none">
            What's on your mind?
          </h3>
          <div className="flex gap-5">
            <div
              onClick={handlePrev}
              className={`p-3 ${
                isAtStart ? "bg-[#f0f0f0]" : "bg-[#e1e1e2]"
              } cursor-pointer rounded-full transition-colors`}
              title={isAtStart ? "Go to last slide" : "Previous slide"}
            >
              <svg
                className={`h-7.5 w-7.5 ${
                  isAtStart ? "text-gray-400" : "text-gray-700"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
            </div>
            <div
              onClick={handleNext}
              className={`p-3 ${
                isAtEnd ? "bg-[#f0f0f0]" : "bg-[#e1e1e2]"
              } cursor-pointer rounded-full transition-colors`}
              title={isAtEnd ? "Go to first slide" : "Next slide"}
            >
              <svg
                className={`h-7.5 w-7.5 ${
                  isAtEnd ? "text-gray-400" : "text-gray-700"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="w-full overflow-x-hidden mt-12.5 relative h-[336px]"
        >
          <div
            style={{ transform: `translateX(${translate}px)` }}
            className="flex gap-6 absolute top-0 left-0 w-fit transition-all duration-300 ease-in-out"
          >
            {data && data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="w-[270px] h-[336px]">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                    alt={item.entityType}
                    className="w-[270px] h-[336px] block rounded-xl object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/270x336?text=Image+Not+Found";
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="text-center w-full py-8">No items to display</div>
            )}
          </div>
        </div>
        <hr className="my-12.5 bg-gray-40" />
      </section>

      {/* Add custom CSS to prevent text selection */}
      <style jsx>{`
        .select-none {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </>
  );
}

export default WhatsOnYourMind;
