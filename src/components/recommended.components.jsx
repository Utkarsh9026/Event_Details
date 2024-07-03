import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import InfiniteScroll from "react-infinite-scroller";

const RecommendedShow = () => {
  const [shows, setShows] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMoreShows();
  }, []);

  const loadMoreShows = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_RECOMMENDED_API);
      // console.log(response.data.events);
      setShows(response.data.events);
      if (response.data.lenght === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
      setHasMore(false);
    }
  };

  const truncateTitle = (title) => {
    return title.length > 10 ? `${title.slice(0, 10)}...` : title;
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Recommended Shows
      </h2>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {}}
        hasMore={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        horizontal
        useWindow={false}
      >
        <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
          {shows.map((show, index) => (
            <div
              key={index}
              className="flex-none w-[13rem] h-[19rem] bg-gray-300 rounded-md relative"
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
                alt={show.eventName}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 px-3 pb-2 bg-gray-50  bg-opacity-10">
                <div className="flex justify-between text-white items-center">
                  <p className=" font-semibold text-sm">
                    {truncateTitle(show.eventName)}
                  </p>
                  <p className="text-[10px]">
                    {new Date(show.date).toDateString()}
                  </p>
                </div>
                <div className="flex justify-between text-white items-center">
                  <p className="flex items-center space-x-2 text-[10px]">
                    <CiLocationOn />
                    {show.cityName}
                  </p>
                  <p className="text-[10px]">
                    {show.weather} | {Math.round(show.distanceKm)}Km
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default RecommendedShow;
