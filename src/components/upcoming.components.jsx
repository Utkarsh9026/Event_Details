import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}?code=${
          import.meta.env.VITE_API_CODE
        }&type=${import.meta.env.VITE_API_TYPE}&page=${page}`
      );
      // console.log(response.data.events);
      setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-8 mt-48">
      <h1 className="text-2xl pl-20 font-semibold my-4">Upcoming Events</h1>
      <div className="flex gap-x-5 gap-y-10 flex-wrap w-full justify-center -mx-2">
        {events.map((event, index) => (
          <div key={index} className="p-2 border-2 border-gray-200 rounded-lg">
            <div className="min-w-[18rem] h-[12rem] relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
                className="rounded-lg w-full h-full object-cover"
                alt="Drive image is not loading"
              />
              <div className="absolute right-0 left-0 bg-black bg-opacity-60 px-2 py-1 bottom-0">
                <p className="text-[12px] text-white  font-semibold ">
                  {new Date(event.date).toDateString()}
                </p>
              </div>
            </div>
            <h4 className="font-semibold text-[16px] mt-4">
              {event.eventName}
            </h4>
            <div className="flex justify-between text-gray-500 items-center">
              <p className="text-[12px] flex items-center space-x-2 font-medium">
                <CiLocationOn /> {event.cityName}
              </p>
              <p className="text-[10px]">
                {event.weather} | {Math.round(event.distanceKm)} Km
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
