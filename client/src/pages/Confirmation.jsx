import React from "react";

const Confirmation = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center text-[#2A2D43]  text-center bg-white p-10">
      <h1 className="text-[2.2rem] 2xl:text-[3.2em] font-bold mt-12 2xl:mt-16">
        Thank you for choosing <span className="text-purple-500">_nology</span>
      </h1>
      <h2 className="text-[1.8rem] 2xl:text-[2.6rem] font-bold mt-8 2xl:mt-10">
        We will contact you shortly...
      </h2>
    </div>
  );
};

export default Confirmation;
