import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryMan } from "../../redux/AddProductSlice";
import BuyNowCard from "../BuyNow/BuyNowCard";

const Man = () => {
  const { man } = useSelector((s) => s.addProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryMan());
  }, []);
  return (
    <div id="man">
      <div className="container ">
        <div className="flex items-center justify-center flex-wrap gap-5 mt-5">
          {
            man.map((el)=><BuyNowCard el={el}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Man;
