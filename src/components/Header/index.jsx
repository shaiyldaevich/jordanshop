import React, { useState } from "react";
import logo from "../../assets/img/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/AddProductSlice";

const Header = () => {
  const { product } = useSelector((s) => s.addProduct);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const searchsate = (e) => {
    if (e.key === "Enter") {
      dispatch(searchProduct(value));
      nav(`searchproduct/${value}`);
    }
    setValue("");
  };
  return (
    <div
      id="header"
      className="py-10 bg-[#131313b9] backdrop-blur-1 sticky top-0 z-[99] 2xl:w-auto"
    >
      <div className="container">
        <div className="flex items-center justify-between 2xl:w-auto">
          <img src={logo} alt="" />
          <div className="flex items-center text-center gap-14">
            <Link
              to={"/"}
              className=" text-white text-[24px] font-[800] leading-[16px] tracking-[45%] hover:border-b-2 hover:border-red-700 duration-200 "
            >
              Home
            </Link>
            <Link
              to={"/man"}
              className=" text-white text-[24px] font-[800] leading-[16px] tracking-[45%] hover:border-b-2 hover:border-red-700 duration-200"
            >
              Man
            </Link>
            <Link
              to={"/woman"}
              className=" text-white text-[24px] font-[800] leading-[16px] tracking-[45%] hover:border-b-2 hover:border-red-700 duration-200"
            >
              Woman
            </Link>
            <Link
              to={"/kids"}
              className=" text-white text-[24px] font-[800] leading-[16px] tracking-[45%] hover:border-b-2 hover:border-red-700 duration-200"
            >
              Kids
            </Link>
            <Link
              to={"/sale"}
              className=" text-white text-[24px] font-[800] leading-[16px] tracking-[45%] hover:border-b-2 hover:border-red-700 duration-200"
            >
              Sale
            </Link>
          </div>
          <div className="flex items-center gap-5 ">
            <div className="flex items-center gap-5 ">
              <button
                onClick={() => setOpen(!open)}
                className="text-white text-3xl"
              >
                <FaSearch />
              </button>
              {open ? (
                <input
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => searchsate(e)}
                  type="text"
                  placeholder="search"
                />
              ) : null}
            </div>
            <Link to={"/addbasket"} className="text-white text-3xl">
              <MdOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
