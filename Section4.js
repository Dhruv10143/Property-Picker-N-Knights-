import React,{useRef,useState} from "react"
function Section4(){
return (


<div className="font-link">
    
<div className="flex flex-col self-center px-5 mt-16 w-full max-w-[1132px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center rounded-full bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0.00)_100%)] h-[50px] w-[50px]" />
        <div className="mt-24 text-xl font-medium text-blue-600 tracking-[2.91px] max-md:mt-10 max-md:max-w-full">
          AREAS ACROSS THE TOWN
        </div>
        <div className="mt-7 text-4xl font-semibold leading-10 text-zinc-800 max-md:max-w-full">
          Neighborhood Properties
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className=" relative flex-col grow items-start pt-64 pr-16 pb-4 pl-6 text-4xl font-semibold leading-10 text-white whitespace-nowrap aspect-[1.05] max-md:px-5 max-md:pt-10 max-md:mt-3.5">
                <img src={""}
                  loading="lazy"
                  className="object-cover absolute inset-0 size-full hover:scale-[1.1] rounded-lg"
                />
                Taj Hotel
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="relative flex-col grow items-start px-11 pt-64 pb-7 text-4xl font-semibold leading-10 text-white whitespace-nowrap aspect-[1.02] max-md:px-5 max-md:pt-10 max-md:mt-3.5">
                <img
                  loading="lazy"
                  src={""}
                  className="object-cover absolute inset-0 size-full hover:scale-[1.1] rounded-lg"
                />
                IIT KANPUR
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className=" relative flex-col grow items-start px-10 pt-64 pb-6 text-4xl font-semibold leading-10 text-white whitespace-nowrap min-h-[320px] max-md:px-5 max-md:pt-10 max-md:mt-3.5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={""}
                  className="object-cover absolute inset-0 size-full hover:scale-[1.1] rounded-lg"
                />
                IIT BHU
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              <div className=" relative flex-col grow items-start px-9 pt-64 pb-7 text-4xl font-semibold leading-10 text-white whitespace-nowrap min-h-[320px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={""}
                  className="object-cover absolute inset-0 size-full hover:scale-[1.1] rounded-lg"
                />
                Sitamgarh
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <div className="relative flex-col grow justify-center items-start px-10 pt-60 pb-11 text-4xl font-semibold leading-10 text-white whitespace-nowrap shadow-lg min-h-[320px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full ">
                <img
                  loading="lazy"
                  src={""}
                  className="object-cover absolute inset-0 size-full hover:scale-[1.1] rounded-lg"
                />
                Dalhausie
              </div>
            </div>
          </div>
        </div>










        
        <div className="self-end mt-16 mr-14 rounded-full bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0.00)_100%)] h-[100px] w-[100px] max-md:mt-10 max-md:mr-2.5" />
        <div className="self-center mt-12 text-xl font-medium text-center text-blue-600 uppercase tracking-[2.91px] max-md:mt-10">
          Introduce yourself to{" "}
        </div>
        <div className="self-center mt-7 text-4xl font-semibold leading-10 text-center text-zinc-800">
          Our Team of Experts
        </div>
        <div className="self-center mt-24 w-full max-w-[1010px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-center whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  src={""}
                  className="aspect-[0.71] w-[200px] rounded-tl-[120px] rounded-[20px]"
                />
                <div className="mt-8 text-3xl font-semibold text-neutral-950">
                  XYZ
                </div>
                <div className="mt-7 text-base font-medium text-blue-600">
                  CEO & Founder
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  src={""}
                  className="aspect-[0.71] w-[200px] rounded-tl-[120px] rounded-[20px]"
                />
                <div className="mt-8 text-3xl font-semibold text-neutral-950">
                  XYZ
                </div>
                <div className="self-stretch mt-7 text-base font-medium text-blue-600">
                  Real Estate Developer
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  src={""}
                  className="aspect-[0.71] w-[200px] rounded-tl-[120px] rounded-[20px]"
                />
                <div className="mt-8 text-3xl font-semibold text-neutral-950">
                  XYZ
                </div>
                <div className="mt-7 text-base font-medium text-blue-600">
                  Listing Agent
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  src={""}
                  className="aspect-[0.71] w-[200px] rounded-tl-[120px] rounded-[20px]"
                />
                <div className="mt-8 text-3xl font-semibold text-neutral-950">
                  XYZ
                </div>
                <div className="mt-7 text-base font-medium text-blue-600">
                  Buyer's Agent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
</div>
);
}

export default Section4;