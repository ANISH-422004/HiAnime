import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");

  return (
    <div className="p-[3%] w-screen h-screen ">
      {/* Header */}
      <div className="w-full flex items-center  mb-4">
        <h1 className="text-2xl w-[20%] font-semibold text-zinc-400 flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer mr-2"
          />
          Trending
        </h1>

        <TopNav />

        <Dropdown
          title="Category"
          options={["movie", "tv", "all"]}
          func={setCategory}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Category"
          options={["week", "day"]}
          func={setCategory}
        />
      </div>
    </div>
  );
};

export default Trending;
