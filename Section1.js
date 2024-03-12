
import React,{useRef,useState} from "react"
function Section1(){
return (
  <div>
<div className="mt-56 text-xl font-medium text-blue-600 tracking-[2.91px] max-md:mt-10">
          WHO ARE WE
        </div>
        <div className="self-stretch mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <div className="text-4xl font-semibold leading-10 text-zinc-800 max-md:max-w-full">
                  Assisting individuals in locating the appropriate real estate.
                </div>
                <div className="mt-7 text-base leading-7 text-zinc-500 max-md:max-w-full">
                "Welcome to [Your Company Name], your trusted real estate partner. With [number of years] years of experience, we provide expert guidance and personalized service. Our commitment to integrity ensures your best interests are always prioritized. Experience the difference with [Your Company Name] today."
                </div>
                <div className="flex gap-5 justify-between py-7 pr-20 pl-10 mt-9 bg-white shadow-lg rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={require("./svg/svg1.svg").default}
                    className="my-auto w-10 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-xl font-medium text-blue-600">
                    Customer-Centric Approach
                    </div>
                    <div className="mt-3.5 text-base leading-7 text-zinc-500">
                    Our focus is always on you. We prioritize your needs, providing personalized service and guidance throughout your journey.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between py-7 pr-20 pl-10 mt-8 bg-white shadow-lg rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={require("./svg/svg2.svg").default}
                    className="my-auto w-10 aspect-[0.91]"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-xl font-medium text-blue-600">
                    Expertise
                    </div>
                    <div className="mt-3.5 text-base leading-7 text-zinc-500">
                    We bring years of industry experience to every transaction, ensuring informed decisions and smooth processes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={require('./images/img2.jpg')}
                    className="grow mt-12 w-full shadow-lg aspect-[0.56] rounded-[30px]"
                    
                  />
                </div>

            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  src={require('./images/img3.jpg')}
                  className="mt-5 w-full shadow-lg aspect-[1.27] rounded-[30px]"
                />
                <img
                  loading="lazy"
                  src={require('./images/img4.jpg')}
                  className="mt-5 w-full shadow-lg aspect-[1.27] rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      )
    }
    export default Section1;