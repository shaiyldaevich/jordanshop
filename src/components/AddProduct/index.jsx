import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/AddProductSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const { product } = useSelector((s) => s.addProduct);
  const dispatch = useDispatch();
  const error = () =>
    toast.error("fill empty inputs!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const succesfuly = () =>
    toast.success("product add is succesfuly!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const createProduct = () => {
    if (image.trim() === "" || title.trim() === "" || price.trim() === "") {
      error();
    } else {
      succesfuly();
      let newobj = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        image,
        title,
        price,
        category,
      };
      setImage("");
      setTitle("");
      setPrice("");
      // setCategory("");
      return dispatch(addProduct(newobj));
    }
  };

  return (
    <div id="addproduct">
      <div className="container">
        <div className="w-[40%] flex items-center justify-center flex-col mx-auto mt-[10%] gap-10">
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product image URL
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group flex">
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product price
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" selected>
                Category
              </option>
              <option value="mans">Man's</option>
              <option value="womans">Woman's</option>
              <option value="kids">kid's</option>
            </select>
          </div>
          <button
            onClick={() => createProduct()}
            className="px-[33px] py-[15px] bg-white hover:bg-transparent hover:text-white hover:border-sm hover:border rounded-xl "
          >
            Add to product
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
