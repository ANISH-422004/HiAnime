import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import Cards from "./templates/Cards";
import Loader from "./templates/Loader";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day")
  const [trending, setTrending] = useState(null)

  console.log(trending);
  

  
  
  const GetTrending = async () => { 
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
      //   console.log(data.results);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(()=>{
    GetTrending()
  },[category,duration])



  return trending ? (
    <div className="px-[3%] py-3 w-screen h-screen overflow-hidden overflow-y-auto ">
      
      
      {/* Header */}
      <div className="w-full flex items-center  mb-4">
        <h1 className="text-2xl w-[20%] font-semibold text-zinc-400 flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer mr-2"
          />
          Trending
        </h1>
        <div className="w-[50%] ">
          <TopNav />
        </div>

        <Dropdown
          title="Category"
          options={["movie", "tv", "all"]}
          func={setCategory}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Category"
          options={["week", "day"]}
          func={setDuration}
        />
      </div>

       <Cards data={trending} title={category}/>


    </div>
  ): <Loader/>
};

export default Trending;
