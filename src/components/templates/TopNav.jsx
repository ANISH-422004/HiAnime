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
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[15%]" >
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-fill cursor-pointer"
        ></i>
      )}
      {searches.length > 0 && (
        <div className="absolute w-[50%] rounded max-h-[50vh] bg-zinc-200 top-[90%] left-[19%] overflow-y-auto">
          {searches.map((s) => (
            <Link
              key={s.id}
            //   to={`/${s.media_type}/${s.id}`}
              className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-full p-3 flex justify-start items-center border-b-2 border-zinc-100 gap-5"
            >
              <img
                className="w-28 aspect-video"
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
