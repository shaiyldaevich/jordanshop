import React from "react";
import bgimg from "../../assets/img/bg with shoe edited in photoshop.png";
import pricing from "../../assets/img/Pricing.png";
import red from "../../assets/img/red.png";
import neongreen from "../../assets/img/neon green.png";
import purple from "../../assets/img/Untitled-2.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const nav = useNavigate();
  return (
    <div
      id="hero"
      className=" relative   "
      style={{
        background: `url("${bgimg}") no-repeat center/cover`,
        minHeight: "90vh",
      }}
    >
      <div className="container">
        <div className="absolute 2xl:top-[559px] 2xl:left-[996px] ">
          <img src={pricing} alt="" />
        </div>
        <div className="absolute top-[700px] left-[5px] flex items-center text-xl flex-col ">
          <h2 className="text-white font-[800] ">CHOOSE COLOR : </h2>
          <div className="flex items-center   w-[375px] h-[130px] ">
            <img src={purple} alt="" />
            <img src={neongreen} alt="" className="" />
            <img src={red} alt="" />
          </div>
        </div>
        <div className="absolute left-[70%] top-[85%]  ">
          <h2 className="text-white  text-2xl">INSPIRATION</h2>
          <p className="text-white">
            Inspired by the design of the latest Air Jordan game shoe, <br />{" "}
            the Jordan Jumpman 2021 helps up-and-coming players <br /> level up
            their game.{" "}
          </p>
        </div>
        <div className="flex items-center gap-10 lg:flex-wrap absolute left-[40%] top-[87%] ">
          <button
            onClick={() => nav("/addproduct")}
            className="px-[23px] py-[15px] bg-white hover:bg-transparent hover:text-white hover:border-sm hover:border "
          >
            ADD TO CART
          </button>
          <button
            onClick={() => nav("/baynow")}
            className="px-[33px] py-[15px] bg-white hover:bg-transparent hover:text-white hover:border-sm hover:border "
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
