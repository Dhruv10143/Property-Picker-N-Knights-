import React,{useRef,useState} from "react"
function Section3(){
return (
<div className="font-link bg-white">
<div className="flex justify-center items-center px-16 py-12 mt-44 bg-neutral-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mt-12 mb-16 w-full max-w-[1496px] max-md:my-10 max-md:max-w-full">
          <div className="text-xl font-medium text-center text-zinc-800 tracking-[2.91px] max-md:max-w-full" style={{color:"blue"}}>
            OUR SERVICES
          </div>
          <div className="mt-9 text-4xl font-semibold leading-10 text-center text-neutral-950 max-md:max-w-full">
          Buying, Selling, Renting too,
We guide your journey, smooth and true.
Your dream home awaits, let's start today,
Unlock your future, the real estate way.
          </div>
          <div className="self-stretch mt-14 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-16 py-12 w-full bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={require("./svg/search.svg").default}
                    style={{ backgroundColor: 'white' }}
                    className="mt-2.5 bg-blue-600 rounded-full aspect-square w-[90px]"
                  />
                  <div className="mt-8 text-xl font-medium whitespace-nowrap text-zinc-800">
                    Buy a New Home
                  </div>
                  <div className="self-stretch mt-3.5 text-base leading-7 text-center text-zinc-500">
                  Ready to invest in your future? Let's navigate buying a new home together.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-16 py-12 w-full text-center bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={require("./svg/house.svg").default}
                    style={{ backgroundColor: 'white' }}
                    className="mt-2.5 bg-blue-600 rounded-full aspect-square w-[90px]"
                  />
                  <div className="mt-8 text-xl font-medium whitespace-nowrap text-zinc-800">
                    Sell a House
                  </div>
                  <div className="self-stretch mt-5 text-base leading-7 text-zinc-500">
                  Your happy memories deserve a happy buyer. Sell your home fast and for top dollar.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-16 py-12 w-full text-center bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={require("./svg/rent.svg").default}
                    style={{ backgroundColor: 'white' }}
                    className="mt-2  rounded-full aspect-square w-[90px]"
                  />
                  <div className="mt-8 text-xl font-medium whitespace-nowrap text-zinc-800">
                    Rent a House
                  </div>
                  <div className="self-stretch mt-5 text-base leading-7 text-zinc-500">
                  Live comfortably, rent smartly. Affordable and stylish rentals await. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

</div>
);
}
export default Section3;