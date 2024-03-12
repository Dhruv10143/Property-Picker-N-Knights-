import React,{useRef,useState} from "react"
function Section2(){
return (
<div>
<div className="mt-52 text-xl font-medium text-blue-600 whitespace-nowrap tracking-[2.91px] max-md:mt-10">
          CHECKOUT OUR NEW
        </div>
        <div className="flex gap-5 justify-between self-stretch mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-4xl font-semibold leading-10 text-zinc-800 max-md:max-w-full">
            Latest Listed Properties
          </div>
          <div className="flex gap-5 self-start text-base font-medium text-center text-violet-900 whitespace-nowrap">
          <button className="grow justify-center px-8 py-5 bg-white border border-solid border-[color:var(--Primary-Colour,#3A0CA3)] rounded-[30px] max-md:px-5 transition-all duration-300 ease-in-out hover:bg-[color:var(--Primary-Colour,#3A0CA3)] hover:text-white">
  All
</button>

<button className="grow justify-center px-8 py-5 bg-white border border-solid border-[color:var(--Primary-Colour,#3A0CA3)] rounded-[30px] max-md:px-5 transition-all duration-300 ease-in-out hover:bg-[color:var(--Primary-Colour,#3A0CA3)] hover:text-white">
  Sell
</button>
            <button className="grow justify-center px-8 py-5 bg-white border border-solid border-[color:var(--Primary-Colour,#3A0CA3)] rounded-[30px] max-md:px-5 transition-all duration-300 ease-in-out hover:bg-[color:var(--Primary-Colour,#3A0CA3)] hover:text-white">
 Rent
</button>
          </div>
        </div>

         <div className="flex gap-5 justify-between pr-6 mt-12 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-8 pl-8 w-full text-base font-medium text-red-600 whitespace-nowrap aspect-[0.98] max-md:px-5">
            <img
              loading="lazy"
              src={require("./images/img5.jpg")}
              className="object-cover absolute inset-0 size-full rounded-[30px]"
            />
            <div className="flex relative gap-2.5 px-6 py-3 mt-56 bg-red-100 rounded-3xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0887ee8f8053b19415a56db27e398d33a1d92dda13b87dec371de7e4e3d805?"
                className="w-5 aspect-[0.91]"
              />
              <div className="self-start mt-2">Popular</div>
            </div>
          </div>
          <div className="flex flex-col pl-10 mt-11 text-zinc-800 max-md:pl-5 max-md:mt-10">
            <div className="text-3xl font-semibold">4cr</div>
            <div className="mt-5 text-xl font-medium">
            Waterfront Bungalow In Raichak, Kolkata
            </div>
            <div className="flex gap-2.5 justify-between mt-8 text-base leading-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcd4c6420646fbff36afa27a3225b441aec65280947a7ebc35d5a9eb803e9d2?"
                className="self-start aspect-[1.37] w-[30px]"
              />
              <div className="my-auto">3 Beds</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42c2e634e5d64d53597a17d1b3894fdc945d115cea0f107153ea2e9cbfddeef?"
                className="w-6 aspect-[0.96]"
              />
              <div className="flex-auto my-auto">4 Bath</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-8 pl-8 w-full text-base font-medium text-red-600 whitespace-nowrap aspect-[0.98] max-md:px-5">
            <img
              loading="lazy"
              src={require("./images/img6.jpg")}
              className="object-cover absolute inset-0 size-full rounded-[30px]"
            />
            <div className="flex relative gap-2.5 px-6 py-3 mt-56 bg-red-100 rounded-3xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8900a759f9d9065f512df82ac7cd0603a78584035b0a38d54a3e5c418a8bfaf2?"
                className="w-5 aspect-[0.91]"
              />
              <div className="self-start mt-2">Popular</div>
            </div>
          </div>
          <div className="flex flex-col pl-10 mt-11 text-zinc-800 max-md:pl-5 max-md:mt-10">
            <div className="text-3xl font-semibold">2cr</div>
            <div className="mt-5 text-xl font-medium">
              Townhall Near Dhanlakshmi Bank,Bangalore
            </div>
            <div className="flex gap-2.5 justify-between mt-8 text-base leading-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcd4c6420646fbff36afa27a3225b441aec65280947a7ebc35d5a9eb803e9d2?"
                className="self-start aspect-[1.37] w-[30px]"
              />
              <div className="my-auto">4 Beds</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42c2e634e5d64d53597a17d1b3894fdc945d115cea0f107153ea2e9cbfddeef?"
                className="w-6 aspect-[0.96]"
              />
              <div className="flex-auto my-auto">3 Bath</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-8 pl-8 w-full text-base font-medium text-red-600 whitespace-nowrap aspect-[0.98] max-md:px-5">
            <img
              loading="lazy"
              src={require("./images/img9.jpg")}
              className="object-cover absolute inset-0 size-full rounded-[30px]"
            />
            <div className="flex relative gap-2.5 px-6 py-3 mt-56 bg-red-100 rounded-3xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8900a759f9d9065f512df82ac7cd0603a78584035b0a38d54a3e5c418a8bfaf2?"
                className="w-5 aspect-[0.91]"
              />
              <div className="self-start mt-2">Popular</div>
            </div>
          </div>
          <div className="flex flex-col pl-10 mt-11 text-zinc-800 max-md:pl-5 max-md:mt-10">
            <div className="text-3xl font-semibold">2cr</div>
            <div className="mt-5 text-xl font-medium">
              Townhall Near Dhanlakshmi Bank,Bangalore
            </div>
            <div className="flex gap-2.5 justify-between mt-8 text-base leading-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcd4c6420646fbff36afa27a3225b441aec65280947a7ebc35d5a9eb803e9d2?"
                className="self-start aspect-[1.37] w-[30px]"
              />
              <div className="my-auto">4 Beds</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42c2e634e5d64d53597a17d1b3894fdc945d115cea0f107153ea2e9cbfddeef?"
                className="w-6 aspect-[0.96]"
              />
              <div className="flex-auto my-auto">3 Bath</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-8 pl-8 w-full text-base font-medium text-red-600 whitespace-nowrap aspect-[0.98] max-md:px-5">
            <img
              loading="lazy"
              src={require("./images/img7.jpg")}
              className="object-cover absolute inset-0 size-full rounded-[30px]"
            />
            <div className="flex relative gap-2.5 px-6 py-3 mt-56 bg-red-100 rounded-3xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0887ee8f8053b19415a56db27e398d33a1d92dda13b87dec371de7e4e3d805?"
                className="w-5 aspect-[0.91]"
              />
              <div className="self-start mt-2">Popular</div>
            </div>
          </div>
          <div className="flex flex-col pl-10 mt-11 text-zinc-800 max-md:pl-5 max-md:mt-10">
            <div className="text-3xl font-semibold">2cr</div>
            <div className="mt-5 text-xl font-medium">
              Townhall Near Dhanlakshmi Bank,Bangalore
            </div>
            <div className="flex gap-2.5 justify-between mt-8 text-base leading-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcd4c6420646fbff36afa27a3225b441aec65280947a7ebc35d5a9eb803e9d2?"
                className="self-start aspect-[1.37] w-[30px]"
              />
              <div className="my-auto">4 Beds</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42c2e634e5d64d53597a17d1b3894fdc945d115cea0f107153ea2e9cbfddeef?"
                className="w-6 aspect-[0.96]"
              />
              <div className="flex-auto my-auto">3 Bath</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 self-start text-base font-medium text-zinc-800">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-7 pl-8 w-full text-red-600 whitespace-nowrap aspect-square max-md:px-5">
            <img
              loading="lazy"
              src={require("./images/img8.jpg")}
              className="object-cover absolute inset-0 size-full rounded-[30px]"
            />
            <div className="relative justify-center py-4 pr-6 pl-14 mt-56 max-w-full bg-red-100 rounded-3xl w-[141px] max-md:px-5 max-md:mt-10">
              Popular
            </div>
          </div>
          <div className="mt-8 text-3xl font-semibold">$ 2,389</div>
          <div className="mt-5 text-xl">Serenity House</div>
          <div className="mt-5 leading-[162.5%] text-zinc-500">
            103 Wright CourtBurien, WA 98168
          </div>
          <div className="flex gap-5 justify-between mt-6 ml-10 max-w-full leading-[162.5%] text-zinc-500 w-[159px] max-md:ml-2.5">
            <div>4 Beds</div>
            <div>3 Bath</div>
          </div>
        </div>
      </div>
      </div>
);
}
export default Section2;
