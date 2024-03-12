
import React,{useRef,useState} from "react"
function Section6(){
return (
<div>
<div className="flex flex-col self-center mt-56 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1090px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 max-md:mt-10">
                <div className="text-xl font-medium text-blue-600 tracking-[2.91px]">
                  TESTIMONIALS
                </div>{" "}
                <div className="mt-7 text-4xl font-semibold leading-10 text-zinc-800">
                  Look What Our Customers Say!
                </div>{" "}
                <div className="mt-5 text-base leading-7 text-zinc-800">
                  Fusce venenatis tellus a felis scelerisque, non pulvinar est
                  pellentesque.{" "}
                </div>{" "}
                <div className="flex gap-5 justify-between mt-14 max-w-full w-[150px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c4a78661a417788e09706ca8e4d411ca81068f1997f4ccbf5f9f0b8b81de518?"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6033dce0249dca724a3a71610e423668fb19b030d4e702ccb7e1cae0360ffdc?"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 py-8 w-full text-xl font-medium bg-white shadow-lg rounded-[30px] text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f468f9db308c9b0ffd156c9cb486486d2f8242b9a6d6183b59aa64787d47af?"
                  className="ml-2.5 aspect-[1.61] fill-yellow-400 fill-opacity-40 w-[60px]"
                />{" "}
                <div className="mx-2.5 mt-5">
                  I highly recommend Jodi J. Appleby. She was attentive to our
                  needs and worked tirelessly to find us the perfect home. We
                  couldn't be happier with our new place!
                </div>
                <div className="shrink-0 mt-9 h-px bg-neutral-300" />
                <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                  <div className="flex gap-4 justify-between">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="rounded-full aspect-square w-[50px]"
                    />
                    <div className="grow my-auto">Barbara D. Smith</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65809bb186ce38ac78b00e0a5dc7956facb029419c68aacd58e1619316e4a30e?"
                    className="my-auto aspect-[6.67] w-[86px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-11 pl-5 mt-64 bg-violet-900 rounded-[40px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="z-10 grow mt-0 w-full aspect-[1.18]"
              />
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                    <div className="mx-auto mt-10 rounded-full bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] h-[100px] w-[100px] max-md:mt-10" />
                  </div>
                  <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-white max-md:mt-9">
                      <div className="text-4xl font-semibold leading-10 whitespace-nowrap">
                        Become a Agent.
                      </div>
                      <div className="mt-5 text-base leading-7">
                        Fusce venenatis tellus a felis scelerisque.{" "}
                        <span className="text-white">
                          venenatis tellus a felis scelerisque.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-0 text-base font-medium text-center text-violet-900">
                <div className="self-end rounded-full bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] h-[100px] w-[100px]" />
                <div className="justify-center px-8 py-5 mt-12 bg-white border border-solid border-[color:var(--Primary-Colour,#3A0CA3)] rounded-[30px] max-md:px-5 max-md:mt-10">
                  Register Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
);
}
export default Section6;