import { useEffect, useState } from "react";
import { useNewUser } from "../contexts/NewUserContext";
import { useNavigate } from "react-router";
import { useUser } from "../contexts/UserContext";

const EmployerForm = () => {
  const { createUser, setEmployer } = useNewUser();
  const { setIsFormData } = useUser();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phoneNumber: "",
    comment: "",
    isAdmin: false,
  });

  const validation = {
    isCompanyName: newUser.companyName.trim().length > 0,
    isContactName: newUser.contactName.trim().length > 0,
    isEmail: /\S+@\S+\.\S+/.test(newUser.email),
    isPhoneNumber: /^\d{10,}$/.test(newUser.phoneNumber),
  };

  const isValid = Object.values(validation).every(Boolean);

  const handleInput = (name, value) => {
    setNewUser((obj) => (obj = { ...obj, [name]: value }));
  };

  const resetUser = () => {
    setNewUser({
      companyName: "",
      contactName: "",
      email: "",
      phoneNumber: "",
      comment: "",
      isAdmin: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("form submitted");
      console.log("new user submitted", newUser);
      createUser(newUser);
      setEmployer(newUser);
      resetUser();
      setIsFormData(true);
      navigate("/consultants");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center bg-[#F2F2F2]">
      <h1 className="text-[#2A2D43] font-bold text-[1.3rem] xl:text-[1.6rem] mt-6 mx-auto ">
        Employer details
      </h1>
      <form
        action="submit"
        className="flex flex-col justify-start items-center w-[88%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[36%] 2xl:w-[30%] h-[76%] sm:h-[80%] md:h-[74%] lg:h-[76%] bg-white mt-3 sm:mt-6 xl:mt-8 2xl:mt-8 p-6 sm:p-8 gap-2 rounded-lg">
        <div className="mt-1 sm:mt-6 md:mt-1 w-full">
          <label
            htmlFor=""
            className={`${validation.isCompanyName ? "text-purple-500" : "text-[#2A2D43"} font-semibold md:text-[0.9rem] `}>
            Company name
          </label>
          <input
            name="companyName"
            value={newUser.companyName}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
            type="text"
            className={`${validation.isCompanyName ? "border-purple-500" : "border-gray-300"} w-full h-[2.5rem] sm:h-[3.4rem] md:h-[2.5rem] lg:h-[3rem] mt-1 rounded-lg border-2  p-4 focus:outline-none focus:ring-0`}
          />
        </div>
        <div className="mt-2 sm:mt-4 md:mt-2  w-full">
          <label
            htmlFor=""
            className={`${validation.isContactName ? "text-purple-500" : "text-[#2A2D43"} font-semibold md:text-[0.9rem] `}>
            Contact name
          </label>
          <input
            type="text"
            name="contactName"
            value={newUser.contactName}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
            className={`${validation.isContactName ? "border-purple-500" : "border-gray-300"} w-full h-[2.5rem] sm:h-[3.4rem] md:h-[2.5rem] lg:h-[3rem] mt-1 rounded-lg border-2  p-4 focus:outline-none focus:ring-0`}
          />
        </div>
        <div className="mt-2 sm:mt-4 md:mt-2   w-full">
          <label
            htmlFor=""
            className={`${validation.isEmail ? "text-purple-500" : "text-[#2A2D43"} font-semibold md:text-[0.9rem] `}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
            className={`${validation.isEmail ? "border-purple-500" : "border-gray-300"} w-full h-[2.5rem] sm:h-[3.4rem] md:h-[2.5rem] lg:h-[3rem] mt-1 rounded-lg border-2  p-4 focus:outline-none focus:ring-0`}
          />
        </div>
        <div className="mt-2 sm:mt-4 md:mt-2   w-full">
          <label
            htmlFor=""
            className={`${validation.isPhoneNumber ? "text-purple-500" : "text-[#2A2D43"} font-semibold md:text-[0.9rem] `}>
            {" "}
            Phone number
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={newUser.phoneNumber}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
            className={`${validation.isPhoneNumber ? "border-purple-500" : "border-gray-300"} w-full h-[2.5rem] sm:h-[3.4rem] md:h-[2.5rem] lg:h-[3rem] mt-1 rounded-lg border-2  p-4 focus:outline-none focus:ring-0`}
          />
        </div>
        <div className="mt-2 sm:mt-4 md:mt-2    w-full">
          <label
            htmlFor=""
            className={`${isValid ? "text-purple-500" : "text-[#2A2D43"} font-semibold md:text-[0.9rem] `}>
            Comment
          </label>
          <textarea
            name="comment"
            id=""
            value={newUser.comment}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
            className={`${isValid ? "border-purple-500" : "border-gray-300"} w-full h-[5rem] sm:h-[7rem]  md:h-[4.6rem] lg:h-[5.4rem] xl:h-[10rem] 2xl:h-[10rem] mt-1 rounded-lg border-2 border-gray-300 p-4 focus:outline-none focus:ring-0`}></textarea>
        </div>
        {isValid && (
          <button
            onClick={handleSubmit}
            className="px-16 py-3 border-2 border-purple-500 rounded-lg font-semibold text-[0.9rem]  text-purple-500 bg-white cursor-pointer mt-2 mb-2">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default EmployerForm;
