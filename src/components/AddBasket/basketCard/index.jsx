import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePro } from "../../../redux/AddbasketSlice";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const BasketCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div
      class="flex flex-col items-center gap-3  justify-between  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Zoom>
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={el.image}
          alt=""
        />
      </Zoom>
      <div class="flex flex-col justify-between  p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {el.title}
        </h5>
        <h6 class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {el.price}$
        </h6>
      </div>
      <div className="">
        <h2 className="text-white">{el.quantity}</h2>
      </div>
      <button
        onClick={() => dispatch(deletePro(el.id))}
        type="button"
        class="text-white flex items-center  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        delete
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default BasketCard;
