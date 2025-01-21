import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      {data.map((c, i) => (
        <Link className="w-[20vw] max-w-[250px] mb-[3%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[30vh] w-full object-cover rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path}`}
            alt={c.name || c.title || c.original_name || c.original_title}
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold text-center">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
