import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addbasket } from "../../redux/AddbasketSlice";

const Details = () => {
  const { details } = useSelector((s) => s.details);
  //   const { basket } = useSelector((s) => s.addbasket);
  //   const dispatch = useDispatch();
  //   const getBasket = (data) => {
  //     return dispatch(addbasket(data));
  //   };
  let { title, image, price, category } = details;
  return (
    <div>
      <div className=" container ">
        <div className="flex items-center justify-center ">
          <div className=" w-[70%] h-[700px] bg-white flex items-center justify-evenly   ">
            <img src={image} alt="" className="w-[500px]" />
            <div className="flex items-center gap-10 flex-col">
              <h1 className=" text-3xl tracking-normal leading-10 font-bold ">
                <span className="text-yellow-700 text-4xl">Name:</span>
                {title}
              </h1>
              <h2 className=" text-2xl tracking-normal leading-10 font-bold ">
                <span className="text-yellow-700 text-4xl">Price:</span>
                {price}
              </h2>
              <h3 className=" text-xl tracking-normal leading-10 font-bold ">
                <span className="text-yellow-700 text-4xl">Category:</span>
                {category}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
