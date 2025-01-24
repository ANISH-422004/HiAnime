import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearch = async () => {
    if (query.trim() === "") {
      setSearches([]);
      return;
    }
    try {
      const response = await axios.get(`/search/multi?query=${query}`);
      setSearches(response.data.results);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      getSearch();
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <div className="w-full flex justify-center items-center relative mb-1">
      {/* Search Input Container */}
      <div className="flex items-center w-full md:w-[60%] lg:w-[80%] px-3 bg-zinc-800 rounded-lg border border-zinc-600">
        <i className="text-zinc-400 text-2xl ri-search-line"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="flex-1 text-zinc-200 mx-2 p-3 text-lg outline-none border-none bg-transparent w-[100%]"
          type="text"
          placeholder="Search anything..."
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="text-zinc-400 text-2xl ri-close-fill cursor-pointer "
          />
        )}
      </div>

      {/* Search Dropdown */}
      {searches.length > 0 && (
        <div className="z-[100] p-1 absolute w-full md:w-[60%] lg:w-[80%] rounded max-h-[50vh] bg-zinc-200 top-[110%] left-0 md:left-auto md:right-auto overflow-y-auto shadow-lg">
          {searches.map((s) => (
            <Link
              key={s.id}
              className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-full p-3 flex justify-start items-center border-b border-zinc-100 gap-5"
            >
              <img
                className="w-20 h-12 object-cover"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noimage
                }
                alt={s.name || s.original_title || "No image available"}
              />
              <span>{s.name || s.original_title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNav;
