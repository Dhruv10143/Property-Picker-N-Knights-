import * as React from "react";

function PropertyPicks() {
  return (
    <div className="flex flex-col items-start bg-white">
      <div className="flex justify-center items-center px-16 py-3 w-full text-sm leading-5 text-white whitespace-nowrap bg-violet-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between pr-20 w-full max-w-[1656px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-2 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3120ded4be33da09bd883d9d5f08c76f83fc7bd5d9a50a4338f66b641bc42ac3?"
              className="w-3 aspect-[0.75]"
            />
            <div className="grow my-auto">Your location</div>
          </div>
          <div className="flex gap-5 justify-between text-right">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e1fca3d1bc453f187c73a49e4f10e6ddcf743ddb92efcdb8a7963926b15cad?"
              className="w-4 aspect-square"
            />
            <div className="my-auto">123-456-7890</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3aab58f21c0e67b4d2df028700d9ef0b0aaabf93d8ea8dee59f10de60eed36?"
              className="my-auto w-4 aspect-[1.45]"
            />
            <div className="grow">support@abc.com</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-none max-md:max-w-full">
        <div className="flex justify-center items-center px-16 py-4 text-base font-medium bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between pr-20 w-full max-w-[1656px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-0 my-auto text-zinc-800 max-md:flex-wrap max-md:max-w-full">
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Home{" "}
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                About
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Listings
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Services
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Blogs
              </div>
            </div>
            <div className="flex gap-2 justify-between text-xl font-semibold whitespace-nowrap text-stone-900">
              <img
                loading="lazy"
                srcSet="..."
                className="bg-violet-900 rounded-full aspect-square w-[50px] h-[50px]"
              />
              <div className="grow self-end mt-5">Property Pick</div>
            </div>
            <div className="flex gap-2.5 justify-between items-center whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c82544d06eb1e37c7a71993d19b5fc2e2955bf266df0c02517659066ffc53c?"
                className="self-stretch my-auto aspect-square w-[18px]"
              />
              <div className="flex-auto self-stretch my-auto text-zinc-800">
                Login/Register
              </div>
              <div className="flex flex-col flex-1 justify-center self-stretch px-7 py-4 text-center text-white bg-violet-900 rounded-[50px] max-md:px-5">
                <div className="flex gap-2.5 justify-between">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed095acf1b1e6b90d395aec53b9f21d3b9f68c71ab90f185d657ef5b8805bed?"
                    className="w-5 aspect-square"
                  />
                  <div className="grow">Add Listing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col self-center px-5 mt-24 -mb-11 w-full max-w-[1559px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <div className="text-xl font-medium text-blue-600 tracking-[2.91px] max-md:max-w-full">
            REAL ESTATE
          </div>
          <div className="mt-5 ml-4 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-1 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
                    <div className="text-6xl font-semibold leading-[65px] text-neutral-950 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                      Find a perfect home you love..!
                    </div>
                    <div className="mt-6 text-base leading-7 text-zinc-500 max-md:max-w-full">
                      Etiam eget elementum elit. Aenean dignissim dapibus
                      vestibulum. Integer a dolor eu sapien sodales vulputate ac
                      in purus.
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-9 w-full aspect-[2.27] max-md:max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-12 w-full text-base bg-white shadow-2xl rounded-[30px] max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-14 pt-10 font-medium text-center bg-white rounded-3xl border-b border-solid border-b-[color:var(--Text-Colour-4,#AAA)] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between self-center max-w-full w-[349px]">
                      <div className="text-violet-900">For Sale</div>
                      <div className="flex-auto text-zinc-500">For Rent</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3b9cc71e9338f5a7f5dd921109386b15beffcdd694fb0e016cacaaee83d43a?"
                      className="mt-7 max-w-full aspect-[50] stroke-[3px] stroke-violet-900 w-[153px]"
                    />
                  </div>
                  <div className="flex flex-col px-10 mt-12 leading-[162.5%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <input type="text" placeholder="New York, San Francisco, etc" className="justify-center items-start py-6 pr-16 pl-5 rounded-3xl border-0 border-solid bg-neutral-300 bg-opacity-20 border-[color:var(--Text-Colour-5,#D4D4D4)] text-neutral-400 max-md:pr-5 max-md:max-w-full" >
                    </input>
                    < input type="text" placeholder="Select Property Type" className="flex gap-5 justify-between py-6 pr-20 pl-8 mt-8 rounded-3xl bg-neutral-300 bg-opacity-20 text-zinc-500 text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                       {/* <input type="text" placeholder="Select Property Type" className="flex-auto "></input>
                       <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06baaeb140c7abbf649d12d1096dc155ef89b500e24cd188c150b63fe4897b69?"
                        className="my-auto w-3.5 aspect-[2.33] fill-neutral-400"
                      />  */}
                    </input> 
                    <div className="flex gap-5 justify-between py-6 pr-20 pl-8 mt-8 rounded-3xl bg-neutral-300 bg-opacity-20 text-zinc-500 text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                      <div className="flex-auto">Select Rooms</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06baaeb140c7abbf649d12d1096dc155ef89b500e24cd188c150b63fe4897b69?"
                        className="my-auto w-3.5 aspect-[2.33] fill-neutral-400"
                      />
                    </div>
                    <div className="flex gap-3 self-start mt-5 ml-4 text-sm leading-5 text-right text-violet-900 max-md:ml-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f26a4cb8417cb2e451173bec79fa34913848b15de543a0b641f0884633e58ce?"
                        className="w-3.5 aspect-square"
                      />
                      <div className="flex-auto">Advance Search</div>
                    </div>
                    <div className="flex justify-center items-center px-16 py-5 mt-16 font-medium text-center text-white whitespace-nowrap bg-violet-900 border border-solid border-stone-300 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b08d3c1c79ce9002470e2603f1d016dd8a0312ac6a923dbf6f260a19b1b152c?"
                          className="w-5 aspect-square"
                        />
                        <div className="my-auto">Search</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center mt-16 max-w-full w-[948px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow px-12 py-7 w-full bg-white shadow-2xl rounded-[50px] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="self-stretch my-auto max-w-full aspect-[4.35] w-[155px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                      <div className="text-xl font-medium text-zinc-800 max-md:mt-10">
                        72k+ Happy <br />
                        Customers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow px-12 py-5 w-full bg-white shadow-2xl rounded-[50px] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="rounded-full aspect-square w-[60px] max-md:mt-8"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                      <div className="mt-2.5 text-xl font-medium text-zinc-800 max-md:mt-10">
                        200+ New <br />
                        Listings Everyday!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-center px-5 mt-24 w-full max-w-[1160px] max-md:mt-10 max-md:max-w-full">
        <div className="ml-7 max-w-full w-[716px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="mx-auto rounded-full bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0.00)_100%)] h-[100px] w-[100px] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <div className="mt-20 text-base font-medium text-center whitespace-nowrap text-zinc-500 max-md:mt-10">
                Trusted by 100+ Companies across the globe!{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center self-stretch mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="self-stretch max-w-full mix-blend-luminosity aspect-[2.94] w-[120px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="self-stretch my-auto max-w-full mix-blend-luminosity aspect-[3.33] w-[120px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="self-stretch my-auto max-w-full mix-blend-luminosity aspect-[3.33] w-[120px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="self-stretch my-auto max-w-full mix-blend-luminosity aspect-[3.33] w-[120px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="self-start max-w-full mix-blend-luminosity aspect-[3.03] w-[120px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="self-stretch my-auto max-w-full mix-blend-luminosity aspect-[2.94] w-[110px]"
          />
        </div>
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
                  Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                  dignissim purus. Nulla convallis ipsum molestie nibh
                  malesuada, ac malesuada leo volutpat.
                </div>
                <div className="flex gap-5 justify-between py-7 pr-20 pl-10 mt-9 bg-white shadow-lg rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcddcb91b9c9d67acc1393df0e8f38268f2e81d3176b69e68552f5a556718606?"
                    className="my-auto w-10 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-xl font-medium text-blue-600">
                      Donec porttitor euismod
                    </div>
                    <div className="mt-3.5 text-base leading-7 text-zinc-500">
                      Nullam a lacinia ipsum, nec dignissim purus. Nulla
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between py-7 pr-20 pl-10 mt-8 bg-white shadow-lg rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5daa0559c96b6ee5832254b10271a7246b33e040ad7d1c51e6e285eb3c78e46a?"
                    className="my-auto w-10 aspect-[0.91]"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-xl font-medium text-blue-600">
                      Donec porttitor euismod
                    </div>
                    <div className="mt-3.5 text-base leading-7 text-zinc-500">
                      Nullam a lacinia ipsum, nec dignissim purus. Nulla
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow mt-12 w-full shadow-lg aspect-[0.56] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-full shadow-lg aspect-[0.99]"
                />
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-5 w-full shadow-lg aspect-[1.27] rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-52 text-xl font-medium text-blue-600 whitespace-nowrap tracking-[2.91px] max-md:mt-10">
          CHECKOUT OUR NEW
        </div>
        <div className="flex gap-5 justify-between self-stretch mt-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-4xl font-semibold leading-10 text-zinc-800 max-md:max-w-full">
            Latest Listed Properties
          </div>
          <div className="flex gap-5 self-start text-base font-medium text-center text-violet-900 whitespace-nowrap">
            <div className="grow justify-center px-8 py-5 bg-white border border-solid border-[color:var(--Primary-Colour,#3A0CA3)] rounded-[30px] max-md:px-5">
              All
            </div>
            <div className="grow justify-center px-8 py-5 text-white bg-violet-900 rounded-[30px] max-md:px-5">
              Sell
            </div>
            <div className="grow justify-center px-8 py-5 bg-white border border-solid border-[color:var(--Primary-Colour,#3A0CA3)] rounded-[30px] max-md:px-5">
              Rent
            </div>
          </div>
        </div>
        <div className="mt-5 text-base leading-7 text-zinc-500 max-md:max-w-full">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus.{" "}
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-6 mt-12 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-8 pl-8 w-full text-base font-medium text-red-600 whitespace-nowrap aspect-[0.98] max-md:px-5">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
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
        <div className="flex flex-col flex-1">
          <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-8 pl-8 w-full text-base font-medium text-red-600 whitespace-nowrap aspect-[0.98] max-md:px-5">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
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
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
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
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
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
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
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
      <div className="flex justify-center items-center px-16 py-12 mt-44 bg-neutral-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mt-12 mb-16 w-full max-w-[1496px] max-md:my-10 max-md:max-w-full">
          <div className="text-xl font-medium text-center text-zinc-800 tracking-[2.91px] max-md:max-w-full">
            OUR SERVICES
          </div>
          <div className="mt-9 text-4xl font-semibold leading-10 text-center text-neutral-950 max-md:max-w-full">
            Donec porttitor euismod dignissim
          </div>
          <div className="self-stretch mt-14 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-16 py-12 w-full bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-2.5 bg-blue-600 rounded-full aspect-square w-[90px]"
                  />
                  <div className="mt-8 text-xl font-medium whitespace-nowrap text-zinc-800">
                    Buy a New Home
                  </div>
                  <div className="self-stretch mt-3.5 text-base leading-7 text-center text-zinc-500">
                    Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
                    nec dignissim purus.{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-16 py-12 w-full text-center bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-2.5 bg-blue-600 rounded-full aspect-square w-[90px]"
                  />
                  <div className="mt-8 text-xl font-medium whitespace-nowrap text-zinc-800">
                    Sell a House
                  </div>
                  <div className="self-stretch mt-5 text-base leading-7 text-zinc-500">
                    Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
                    nec dignissim purus.{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-16 py-12 w-full text-center bg-white shadow-lg rounded-[30px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-2.5 bg-blue-600 rounded-full aspect-square w-[90px]"
                  />
                  <div className="mt-8 text-xl font-medium whitespace-nowrap text-zinc-800">
                    Rent a House
                  </div>
                  <div className="self-stretch mt-5 text-base leading-7 text-zinc-500">
                    Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
                    nec dignissim purus.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div className="overflow-hidden relative flex-col grow items-start pt-64 pr-16 pb-4 pl-6 text-4xl font-semibold leading-10 text-white whitespace-nowrap aspect-[1.05] max-md:px-5 max-md:pt-10 max-md:mt-3.5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                Taj Hotel
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col grow items-start px-11 pt-64 pb-7 text-4xl font-semibold leading-10 text-white whitespace-nowrap aspect-[1.02] max-md:px-5 max-md:pt-10 max-md:mt-3.5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                IIT KANPUR
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col grow items-start px-10 pt-64 pb-6 text-4xl font-semibold leading-10 text-white whitespace-nowrap min-h-[320px] max-md:px-5 max-md:pt-10 max-md:mt-3.5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                IIT BHU
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col grow items-start px-9 pt-64 pb-7 text-4xl font-semibold leading-10 text-white whitespace-nowrap min-h-[320px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                Sitamgarh
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col grow justify-center items-start px-10 pt-60 pb-11 text-4xl font-semibold leading-10 text-white whitespace-nowrap shadow-lg min-h-[320px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
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
                  srcSet="..."
                  className="aspect-[0.71] w-[200px]"
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
                  srcSet="..."
                  className="aspect-[0.71] w-[200px]"
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
                  srcSet="..."
                  className="aspect-[0.71] w-[200px]"
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
                  srcSet="..."
                  className="aspect-[0.71] w-[200px]"
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
      </div>{" "}
      <div className="flex justify-center items-center px-16 py-12 mt-44 w-full bg-violet-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-16 mb-20 w-full max-w-[1496px] max-md:pr-5 max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-40 max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col items-start px-12 pb-12 w-full text-center whitespace-nowrap shadow-lg aspect-[1.42] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                  />{" "}
                  <div className="flex relative flex-col p-2.5 mb-24 bg-white rounded-none shadow-sm h-[50px] max-md:mb-10">
                    <div className="text-xl font-medium text-zinc-800">28</div>{" "}
                    <div className="mt-1.5 text-base leading-7 text-zinc-500">
                      Tue
                    </div>
                  </div>
                </div>{" "}
                <div className="mt-7 text-3xl font-medium text-white">
                  Top 10 Home Buying Mistakes to Avoid
                </div>{" "}
                <div className="mt-5 text-base leading-7 text-neutral-300">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ed8ede7b31db0438a2cfc4aab2ca6fb62a2143def06a634dd2b94bb3cf1408?"
                  className="self-end mt-7 aspect-square w-[50px]"
                />
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <div className="self-center text-xl font-medium text-center text-white uppercase tracking-[2.91px]">
                  WHAT’S TRENDING
                </div>{" "}
                <div className="mt-7 text-4xl font-semibold leading-10 text-center text-white">
                  Latest Blogs & Posts
                </div>{" "}
                <div className="flex flex-col px-7 mt-16 max-md:px-5 max-md:mt-10">
                  <div className="flex overflow-hidden relative flex-col items-start px-12 pb-12 text-center whitespace-nowrap shadow-lg aspect-[1.42] max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-cover absolute inset-0 size-full"
                    />{" "}
                    <div className="flex relative flex-col p-2.5 mb-24 bg-white rounded-none shadow-sm max-md:mb-10">
                      <div className="text-xl font-medium text-zinc-800">
                        08
                      </div>{" "}
                      <div className="mt-1.5 text-base leading-7 text-zinc-500">
                        Mon
                      </div>
                    </div>
                  </div>{" "}
                  <div className="mt-8 text-3xl font-medium text-white">
                    How to Stage Your Home for a Quick Sale
                  </div>{" "}
                  <div className="mt-4 text-base leading-7 text-neutral-300">
                    Nullam odio lacus, dictum quis pretium congue, vehicula
                    venenatis nunc.
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ed8ede7b31db0438a2cfc4aab2ca6fb62a2143def06a634dd2b94bb3cf1408?"
                    className="self-end mt-7 aspect-square w-[50px]"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-40 max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col items-start px-12 pb-12 w-full text-center whitespace-nowrap shadow-lg aspect-[1.42] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                  />{" "}
                  <div className="flex relative flex-col p-2.5 mb-24 bg-white rounded-none shadow-sm max-md:mb-10">
                    <div className="text-xl font-medium text-zinc-800">26</div>{" "}
                    <div className="mt-1.5 text-base leading-7 text-zinc-500">
                      Wed
                    </div>
                  </div>
                </div>{" "}
                <div className="mt-7 text-3xl font-medium text-white">
                  5 Tips for First-Time Home Sellers
                </div>{" "}
                <div className="mt-5 text-base leading-7 text-neutral-300">
                  In hac habitasse platea dictumst. Phasellus vel velit vel
                  augue maximus.
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ed8ede7b31db0438a2cfc4aab2ca6fb62a2143def06a634dd2b94bb3cf1408?"
                  className="self-end mt-7 aspect-square w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
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
      <div className="flex justify-center items-center px-16 py-4 w-full text-base leading-7 bg-neutral-950 text-neutral-400 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between pr-20 w-full max-w-[1496px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex-auto">© PropertyPicks – All rights reserved</div>
          <div className="flex gap-5 justify-between self-start text-right max-md:flex-wrap max-md:max-w-full">
            <div className="grow whitespace-nowrap">Terms and Conditions</div>
            <div className="flex-auto">Privacy Policy</div>
            <div>Disclaimer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PropertyPicks;

