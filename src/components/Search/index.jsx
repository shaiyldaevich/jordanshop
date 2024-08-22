import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BuyNowCard from "../BuyNow/BuyNowCard";
import { RiH1 } from "react-icons/ri";

const Search = () => {
  const { search } = useSelector((s) => s.addProduct);
  const nav= useNavigate()
  return (
    <div>
      {search.length ? (
        <div className=" flex items-center justify-center gap-10 flex-wrap">
          {search.map((el) => (
            <BuyNowCard el={el} />
          ))}
        </div>
      ) : (
        <h1 className="text-white text-4xl flex items-center justify-center my-10">
          <span onClick={()=>nav('/baynow')} >❌</span>this product is not defind
        </h1>
      )}
    </div>
  );
};

export default Search;
