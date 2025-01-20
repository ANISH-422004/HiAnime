import React from "react";
import gif from '../../assets/loader.gif'

const Loader = () => {
  return (
    <div className="h-full w-full bg-transparent flex justify-center items-center">
      <img src={gif} alt="Random GIF" />
    </div>
  );
};

export default Loader;
