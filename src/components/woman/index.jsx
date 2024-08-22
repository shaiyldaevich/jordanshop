import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryWoman } from "../../redux/AddProductSlice";
import BuyNowCard from "../BuyNow/BuyNowCard";

const Woman = () => {
  const { woman } = useSelector((s) => s.addProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryWoman());
  }, []);
  return (
    <div id="woman">
      <div className="container ">
        <div className="flex items-center justify-center flex-wrap gap-5 mt-5">
          {woman.map((el) => (
            <BuyNowCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Woman;
