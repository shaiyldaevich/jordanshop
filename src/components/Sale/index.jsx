import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct } from "../../redux/AddProductSlice";
import BuyNowCard from "../BuyNow/BuyNowCard";
const Sale = () => {
  const { sale } = useSelector((s) => s.addProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saleProduct());
  }, []);
  return (
    <div id="sale">
      <div className="container">
        <div className=" mt-10 flex items-center justify-center flex-wrap gap-10 ">
          {sale.map((el) => (
            <BuyNowCard el={el} saleIcon={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
