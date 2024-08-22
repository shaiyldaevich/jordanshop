import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyNowCard from "./BuyNowCard";
import { VscSettings } from "react-icons/vsc";
import { productSort } from "../../redux/AddProductSlice";

const BuyNow = () => {
  const { product } = useSelector((s) => s.addProduct);
  const dispatch = useDispatch();
  return (
    <div id="buynow">
      <div className="container">
        <div className="">
          <div className="flex items-center justify-end  my-5">
            <select
              onChange={(e) => dispatch(productSort(e.target.value))}
              className=" bg-transparent text-white text-xl outline-none"
            >
              <option value="" selected className="text-black"></option>
              <option value="cheap" className="text-black">
                Cheap
              </option>
              <option value="expensive" className="text-black">
                Expensive
              </option>
            </select>
            <a className="text-white text-4xl ">
              <VscSettings />
            </a>
          </div>
          <div className=" flex items-center justify-center gap-10 flex-wrap">
            {product.map((el) => (
              <BuyNowCard el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
