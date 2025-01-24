import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadmovie, removemovie } from "../Store/actions/movieActions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./templates/Loader";

const Moviedetails = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.movie);
  const { info } = data;

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadmovie(id));

    return () => {
      // cleanup
      dispatch(removemovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)) ,url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundRepeat:"no-repeat"
      }}
      className="w-full h-screen bg-[#1F1E24] px-[2%]"
    >

      {/* navigation bar */}
      <nav className="flex items-center py-3 text-zinc-300 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer mr-2 "
        />
        <a
          target="_blank"
          href={info.detail.homepage}
          className="hover:text-[#6556CD]  cursor-pointer mr-2 "
        >
          <i class="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          className="hover:text-[#6556CD]  cursor-pointer mr-2 "
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          className="hover:text-[#6556CD]  cursor-pointer mr-2 "
        >
          IMDB
        </a>
      </nav>

      



    </div>
  ) : (
    <Loader />
  );
};

export default Moviedetails;
