import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/employer-form");
  };

  return (
    <div className="w-screen h-screen bg-[#F2F2F2] flex flex-col items-center sm:justify-start  p-8 xl:px-40 sm:p-16 text-[#2A2D43]">
      <h1 className="font-bold text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.4rem]  text-center">
        Welcome to the <span className="text-purple-500">_nology</span>{" "}
        placement portal
      </h1>
      <p className="text-[1.3rem] sm:text-[1.6rem]   font-bold mt-8 sm:mt-12 mr-auto text-purple-500 md:ml-12 lg:ml-32 xl:ml-40 2xl:ml-80">
        How its works...
      </p>
      <p className="text-[1.3rem] sm:text-[1.6rem] font-bold mt-10 sm:mt-20 md:mt-14">
        1. Complete the form with your company and placement details.
      </p>
      <p className="text-[1.3rem] sm:text-[1.6rem] font-bold mt-8 sm:mt-12">
        2. Select _nology consultants and add them to the placement list.
      </p>
      <p className="text-[1.3rem] sm:text-[1.6rem] font-bold mt-8 sm:mt-12">
        3. Review the placement list and submit your selections.
      </p>
      <button
        onClick={handleNavigation}
        className="mt-14 sm:mt-auto sm:mb-20 xl:mb-32 py-4 px-24 border-purple-500 border-2 rounded-lg text-[1.2rem] font-bold text-purple-500 bg-white">
        Enter
      </button>
    </div>
  );
};

export default Welcome;
