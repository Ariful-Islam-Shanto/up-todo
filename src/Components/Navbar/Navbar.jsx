import React from "react";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className="h-[20vh]">
      <Container>
        <div className="navbar ">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <img 
              className="w-[50px]"
                src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711999625/Group_151_sqdhcf.png"
                alt=""
              />
              <h1>UpTodo</h1>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
