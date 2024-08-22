import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbasket } from "../../../redux/AddbasketSlice";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import salepng from "../../../assets/img/sale.png";
import { Link, useNavigate } from "react-router-dom";
import { detailsPage } from "../../../redux/DetailsSlice";
const BuyNowCard = ({ el, saleIcon }) => {
  const { basket } = useSelector((s) => s.addbasket);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const getBasket = (data) => {
    return dispatch(addbasket(data));
  };
  let someBas = basket.some((some) => some.id === el.id);
  return (
    <div>
      <div class="w-full max-w-sm relative bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 dark:border-gray-700">
        {saleIcon ? (
          <img
            src={salepng}
            alt="img"
            width={200}
            className=" absolute top-[-9px] left-[-9px] z-10"
          />
        ) : null}
        <a href="#">
          <Zoom>
            <img class="p-8 rounded-t-lg w-[100%]" src={el.image} alt="" />
          </Zoom>
        </a>
        <div class="px-5 pb-5">
          <Link to={`/detailsproduct`}>
            <h5
              onClick={() => dispatch(detailsPage(el))}
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black"
            >
              {el.title}
            </h5>
          </Link>
          <a href="#">
            <h6 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
              {el.category}
            </h6>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <div class="flex items-center justify-between">
            <div className="flex ">
              <h3
                class={`text-3xl font-bold text-gray-900 ${
                  saleIcon ? "dark:text-red-700" : null
                }`}
              >
                ${el.price}
              </h3>
              {saleIcon ? (
                <h4 class="text-xl mt-[-17px] ml-3 line-through font-bold text-gray-900 dark:text-black">
                  ${el.oldPrice}
                </h4>
              ) : null}
            </div>
            {!someBas ? (
              <a
                onClick={() => getBasket(el)}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to basket
              </a>
            ) : (
              <a
                onClick={() => nav("/addbasket")}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go to basket
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowCard;
