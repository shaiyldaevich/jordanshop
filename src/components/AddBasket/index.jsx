import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasketCard from "./basketCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "../../assets/img/Infinity@1x-1.6s-200px-200px (2).svg";
import { LuShieldClose } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";

const AddBasket = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userHome, setUserHome] = useState("");
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [modalDone, setModalDone] = useState(false);
  const { basket } = useSelector((s) => s.addbasket);
  let totalPrice = basket.reduce((acc, el) => {
    return (acc += +el.price);
  }, 0);
  if (totalPrice > 1999) {
    alert("you have enough money!");
  }
  const resetState = () => {
    setLoad(false);
    setModalText(false);
    setModalDone(false);
  };
  const modalOpen = () => {
    if (
      userName.trim() === "" ||
      userPhone.trim() === "" ||
      userHome.trim() === ""
    ) {
      warning();
    } else {
      setModal(!modal);
      setModalText(!modalText);
    }
  };
  async function submitFromTelegram() {
    if (
      userName.trim() === "" ||
      userPhone.trim() === "" ||
      userHome.trim() === ""
    ) {
      warning();
    } else {
      setTimeout(() => {
        axios.post(url_API, userData);
        setLoad(false);
        deliver();
        setModalDone(true);
      }, 3000);

      const my_id = `-1002117838235`;
      const token = `6409953023:AAEDsoJ90P0hY-skj5vt-iiOXesWYICVAHM`;
      const url_API = `https://api.telegram.org/bot${token}/sendMessage`;

      const basketItems = basket
        .map(
          (item) =>
            `Product: ${item.title}, Price: ${item.price} , Category: ${item.category}`
        )
        .join("\n");
      setLoad(true);
      setUserName("");
      setUserPhone("");
      setUserHome("");
      const userData = {
        chat_id: my_id,
        parse_model: "html",
        text: `About-User:\n
  Name:${userName}\n
  Phone:${userPhone}\n
  Home:${userHome}\n
  Order:
 ${basketItems}\n
 Total Price: ${totalPrice}$\n
  `,
      };
    }
  }
  const warning = () =>
    toast.warn("fill empty inputs!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const deliver = () =>
    toast.success("✅order is succesfuly!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  useEffect(() => {
    resetState();
  }, [modal]);
  return (
    <div id="basket" className="py-20">
      <div className="container">
        <div className="flex items-center justify-evenly  ">
          <div className="  overflow-y-scroll w-[700px] h-[500px] ">
            <div className="w-[700px]   flex  flex-col justify-center gap-10   ">
              {basket.map((el) => (
                <BasketCard el={el} />
              ))}
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col gap-5">
            <div className="">
              <h1 className="text-white text-2xl my-5">My limit:</h1>
              <div
                style={{
                  width: "500px",
                  overflow: "hidden",
                  height: "5px",
                  borderRadius: "5px",
                  background: "white",
                }}
                className=""
              >
                <div
                  style={{
                    width: totalPrice ? `${(totalPrice / 100) * 30}px` : "10px",
                    height: "5px",
                    borderRadius: "5px",
                    background:
                      totalPrice > 800
                        ? totalPrice > 1400
                          ? "red"
                          : "yellow"
                        : "yellowgreen",
                  }}
                  className=""
                ></div>
              </div>
            </div>
            <h1 className="text-2xl text-white font-bold">
              Total price:{totalPrice}$
            </h1>
          </div>
        </div>
        <div className="w-[30%] mx-auto flex flex-col items-center gap-5 ">
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
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
              Name firstname
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setUserPhone(e.target.value)}
              value={userPhone}
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
              Phone number
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setUserHome(e.target.value)}
              value={userHome}
              type="email"
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
              Home address
            </label>
          </div>
          <button
            onClick={() => modalOpen()}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Order
            </span>
          </button>
          {modal ? (
            <div className="w-[450px] h-[250px] relative mt-[-500px] bg-white rounded-xl text-center  ">
              {!modalText ? (
                <h1 className=" py-8 text-3xl">Check the your data</h1>
              ) : null}
              {!modalText ? (
                <h2 className="text-2xl">
                  {userName},{userPhone},{userHome}
                </h2>
              ) : null}
              {!modalText ? (
                <button
                  onClick={() => (
                    submitFromTelegram(), setModalText(!modalText)
                  )}
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Confirm
                  </span>
                </button>
              ) : null}
              <div
                className=" absolute top-3 right-3 text-3xl "
                onClick={() => setModal(!modal)}
              >
                <LuShieldClose />
              </div>
              {load ? (
                <img
                  src={loading}
                  alt=""
                  className="flex mx-[70%] absolute z-10  top-3 left-[-190px]"
                />
              ) : null}
              {modalDone ? (
                <div className=" text-center text-8xl flex items-center justify-center flex-col py-8 ">
                  <FcApproval />
                  <h3 className="text-2xl text-green-500 text-center">
                    Successfully sent
                  </h3>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBasket;
