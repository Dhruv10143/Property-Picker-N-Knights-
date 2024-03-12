
import React,{useRef,useState} from "react"
function Section7(){
return (
<div>
<div className="flex justify-center items-center px-16 py-12 mt-44 w-full bg-blue-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-20 mt-8 mb-12 w-full max-w-[1496px] max-md:flex-wrap max-md:pr-5 max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 text-base font-medium text-zinc-800">
            <div className="flex gap-2 justify-between text-xl font-semibold whitespace-nowrap">
              <img
                loading="lazy"
                srcSet="..."
                className="bg-violet-900 rounded-full aspect-square w-[50px]"
              />
              <div className="grow my-auto">PropertyPicks</div>
            </div>
            <div className="mt-8">
              MNNIT ALLAHABAD
              <br />
              Teliyarganj, <span className="text-zinc-800">Prayagraj</span>
            </div>
            <div className="flex gap-2 justify-between mt-11 whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/278017ac73adb8a012bae35035c1f1045f60778619fdbc789915376e6dad958d?"
                className="w-5 aspect-square"
              />
              <div className="flex-auto my-auto">123-456-7890</div>
            </div>
            <div className="flex gap-2.5 justify-between mt-8 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9308c2a5e753a1a004a7938f547c67fbae7ff8e7bab117f6358bd1ee0a73854b?"
                className="self-start w-5 aspect-[1.43]"
              />
              <div className="grow">support@abcd.com</div>
            </div>
          </div>
          <div className="flex flex-col mt-4 basis-0">
            <div className="text-xl font-medium whitespace-nowrap text-neutral-950">
              Quick Links
            </div>
            <div className="mt-10 text-base leading-7 text-zinc-800">
              Home
              <br />
              About
              <br />
              Listings
              <br />
              Services
              <br />
              Blogs
              <br />
              Become a Agent
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto basis-0">
            <div className="text-xl font-medium text-neutral-950">
              Discovery
            </div>
            <div className="mt-9 text-base leading-7 text-zinc-800">
              India
              <br />
              United States
              <br />
              Germany
              <br />
              Africa
              <br />
              Pakistan
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-4 text-xl font-medium text-neutral-950">
            <div>Subscribe to our Newsletter!</div>
            <div className="flex gap-5 justify-between py-1.5 pr-1.5 pl-5 mt-5 text-base leading-7 bg-white shadow-lg rounded-[30px] text-neutral-400">
              <div className="flex-auto my-auto">Email Address</div>
              <img
                loading="lazy"
                srcSet="..."
                className="rounded-3xl aspect-square w-[50px]"
              />
            </div>
            <div className="mt-8">Follow Us on</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd397d776f92ed3583d148f8cbf83a29669e95c1dd4c8a8fc971e24d09561a?"
              className="mt-8 w-24 aspect-[4.35]"
            />
          </div>
        </div>
      </div>
</div>
);
}
export default Section7;