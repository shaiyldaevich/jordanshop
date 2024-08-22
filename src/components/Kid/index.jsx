import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryKid } from "../../redux/AddProductSlice";
import BuyNowCard from "../BuyNow/BuyNowCard";

const Kid = () => {
  const { kid } = useSelector((s) => s.addProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryKid());
  }, []);
  return (
    <div id="kid">
      <div className="container ">
        <div className="flex items-center justify-center flex-wrap gap-5 mt-5">
          {kid.map((el) => (
            <BuyNowCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kid;
