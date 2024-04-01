import React from "react";
import Container from "../Container/Container";
import { useNavigate } from "react-router-dom";

const CTA = () => {
    const navigate = useNavigate();

  return (
    <div className="h-[80vh]">
      <Container>
        <div className="h-full space-y-6 flex flex-col items-center justify-center">
          <img src="" alt="" />
          <img
            src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711999648/Group_182_z5h3nt.png"
            alt=""
          />
          <h1 className="text-white text-4xl font-medium">Manage your tasks</h1>
          <button onClick={() => {
                navigate('/dashboard')
          }} className="px-5 py-3 text-sm font-semibold text-white bg-[#8875FF] hover:bg-[#9484fd] rounded-md">
            Get started
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
