import React from "react";

const ConsultantCard = ({ consultant }) => {
  const { name, location, email, githubLink, phoneNumber, imageUrl } =
    consultant;

  return (
    <div
      className="flex flex-col justify-start items-center 
                    w-[80%] sm:w-[300px] md:w-[22%] lg:w-[20%] 2xl:w-[15%]
                    h-[500px] sm:h-[480px] md:h-[360px] lg:h-[390px] xl:h-[500px] 2xl:h-[460px]
                    mt-1 p-6 bg-white rounded-lg cursor-pointer">
      {" "}
      <img
        src={imageUrl}
        alt=""
        className="rounded-full border-8 border-purple-500 md:border-[5px] w-[84%] "
      />
      <div className="flex flex-col mt-6 md:mt-4 w-full h-full p-2">
        <p className="text-[1.4rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] font-bold text-[#2A2D43]">
          {name}
        </p>
        <p className="mt-1 text-[1.1rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1.1rem] 2xl:text-[1rem] font-semibold text-[#2A2D43]">
          {location}
        </p>
        <p className="mt-1 text-[1.1rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1.1rem] 2xl:text-[1rem]   font-semibold text-[#2A2D43]">
          {phoneNumber}
        </p>
        <p className="mt-1 text-[0.9rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[0.9rem]    font-semibold text-purple-500">
          {email}
        </p>
        <p className="mt-auto text-[0.9rem] md:text-[0.65rem] lg:text-[0.75rem] xl:text-[0.95rem] 2xl:text-[0.85rem]    font-semibold text-[#2A2D43] cursor-pointer">
          {githubLink}
        </p>
      </div>
    </div>
  );
};

export default ConsultantCard;
