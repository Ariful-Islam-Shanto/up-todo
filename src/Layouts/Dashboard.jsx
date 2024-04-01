import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdSpaceDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import EmptyState from "../Components/Todo/EmptyState/EmptyState";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const todo = false;

  return (
    <div className="flex items-center justify-center">
      {/* Dashboard menu */}
      <div
        className={` w-[200px] transition-all duration-300 ease-in-out fixed lg:relative z-[9999] top-0 ${
          isMenuOpen === false ? "-left-[100%] lg:left-[0%]" : ""
        } ${
          isMenuOpen === true ? "left-[0%] lg:left-[0%]" : ""
        } lg:block bg-gradient-to-br from-[#231d46] to-[#000d29] min-h-screen`}
      >
        <div className=" lg:hidden relative h-full z-[10000] flex items-center justify-center ">
          <button
            className="absolute top-[80vh] right-[38%] px-3 py-3 text-lg text-white rounded-full z-[10000]  bg-[#001f3e] hover:bg-[#122a5e]"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <RxCross1 />
          </button>
        </div>

        <div className="flex pt-4 items-center justify-center">
          <a className="flex items-center gap-3">
            <img
              src=" https://res.cloudinary.com/debqyv4o6/image/upload/v1711999625/Group_151_sqdhcf.png"
              alt=""
              className="text-black w-[50px]"
            />
            <h1 className="text-xl text-white">UpTodo</h1>
          </a>
        </div>
        <ul className="menu text-left mt-6">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-gray-200 text-center bg-[#8875FF] rounded-sm"
                : "text-gray-400 rounded-sm text-center"
            }
          >
            <li className=" w-full">
              <a className="w-full">
                <MdSpaceDashboard /> Dashboard
              </a>
            </li>
          </NavLink>
          <div className="divider"></div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white text-center bg-[#8875FF] rounded-sm"
                : "text-gray-400 rounded-sm text-center"
            }
          >
            <li className=" w-full">
              <a className="w-full">
                <FaHome /> Home
              </a>
            </li>
          </NavLink>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 bg-[#131222] h-screen p-6">

        {todo === true ? 
            <h1 className="text-3xl text-white font-medium ">You have 0 task today</h1> : 
            <EmptyState/>
            }

            
      </div>
    </div>
  );
};

export default Dashboard;
