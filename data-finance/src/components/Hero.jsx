import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="text-white flex h-[60vh] w-[100%]">
      {/* <div className="border border-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold">
          Growing with Data Analytics
        </p>
        <h1 className="uppercase md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
          Grow with Data
        </h1>
        <div>
          <p className=" md:text-1xl sm:text-4xl text-xl font-bold">
            Fast,Flexible Financing for
          </p>
        </div>
      </div> */}
      <div className="h-auto w-[40%] flex flex-col flex-wrap items-center justify-start sm:px-3">
        <div className="mt-20 mx-3 sm:mx-0">
          <h2 className="uppercase text-yellow-300 font-small my-2">
            Welcome to my Portfolio
          </h2>
          <h1 className="md:text-1xl sm:text-4xl text-xl font-bold my-2">
            Hi There,
          </h1>
          <h1 className="md:text-1xl sm:text-4xl text-xl font-bold my-2">
            I'm Amey Bhosale,
          </h1>
          <div>
            <p className=" md:text-1xl sm:text-2xl text-xl font-bold">
              I am <span className="text-yellow-500">Full Stack Developer</span>
            </p>
          </div>
          {/* <button className="border border-white bg-blue-800 w-20">
            Resume
          </button> */}
          <button class=" mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm text-white font-extrabold rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
              <h1>Resume</h1>
            </span>
          </button>
        </div>
      </div>
      <div className="h-auto border w-[60%] border-yellow-200 flex items-center justify-center">
        <div className="border border-yellow-800 sm:h-[18rem] sm:w-[18rem]  md:h-[23rem] md:w-[23rem] rounded-full h-[13rem] w-[13rem] bg-yellow-800"></div>
      </div>
    </div>
  );
};

export default Hero;
