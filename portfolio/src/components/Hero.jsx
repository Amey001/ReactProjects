import React from "react";

const Hero = () => {
  return (
    <div className="text-white flex h-[60vh] w-[100%]">
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

          <p className=" md:text-1xl sm:text-2xl text-xl font-bold">
            I am <span className="text-yellow-500">Full Stack Developer</span>
          </p>
          <div className="sm:flex sm:flex-row flex-wrap items-center px-2 mt-4 border border-white">
            <button className="m-3 rounded-full">
              <svg
                viewBox="0 0 960 1000"
                fill="currentcolor"
                height="2.5rem"
                width="2.5rem"
              >
                <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980s-246.667-47-340-141S0 632 0 500c0-133.333 46.667-246.667 140-340S346.667 20 480 20m114 330v-78h-72c-29.333 0-54 11-74 33s-30 49-30 81v44h-76v74h76v222h86V504h90v-74h-90v-52c0-18.667 6-28 18-28h72" />
              </svg>
            </button>
            <button className=" mx-3 rounded-full">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2rem"
                width="2rem"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
              </svg>
            </button>
            <button className="mx-3 rounded-full">
              <svg
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="3rem"
                width="3rem"
              >
                <path d="M10.033 15.3h-1.6v-5.199h1.6V15.3zm-.8-5.866c-.577 0-.866-.267-.866-.8a.74.74 0 01.25-.567.868.868 0 01.616-.233c.577 0 .866.268.866.801s-.288.799-.866.799zm6.734 5.866h-1.633v-2.9c0-.755-.268-1.133-.801-1.133-.422 0-.699.211-.834.633-.043.067-.066.201-.066.4v3H11v-3.533c0-.8-.012-1.355-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833.557 0 1.006.194 1.35.583.346.389.518.95.518 1.684V15.3zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z" />
              </svg>
            </button>
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
      <div className="h-auto w-[60%] border border-yellow-200 flex items-center justify-center ">
        <div className="border border-yellow-800 sm:h-[18rem] sm:w-[18rem] md:h-[23rem] md:w-[23rem] rounded-full h-[13rem] w-[13rem] bg-yellow-800"></div>
      </div>
    </div>
  );
};

export default Hero;
