import Image from 'next/image';
import React from 'react';

const WelcomePage = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="relative w-full mt-3 md:mt-4 px-1 md:px-[40px] lg:px-[60px]">
          <div className="h-[calc(100dvh-100px)] border border-primary rounded-[50px] relative">
            <div className="h-full grid grid-rows-3 gap-4 content-between ">
              <div className="w-full relative ">
                <Image
                  src="/assets/images/svg/cloudUpperLeft.svg"
                  alt="Cloud"
                  height={100}
                  width={100}
                  className="absolute top-8 -left-2 w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-auto"
                ></Image>
                <Image
                  src="/assets/images/svg/cloudCenter.svg"
                  alt="Cloud"
                  height={100}
                  width={100}
                  className="absolute inset-x-[10%] sm:inset-x-[15%] md:inset-x-[20%] bottom-0 w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-auto"
                ></Image>
                <Image
                  src="/assets/images/svg/cloudUpperRight.svg"
                  alt="Cloud"
                  height={100}
                  width={100}
                  className="absolute top-10 -right-1 w-5/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-auto"
                ></Image>
              </div>

              <div className="flex flex-col justify-center items-center px-3 relative ">
                <p className="mt-5 text-4xl md:text-5xl lg:text-7xl font-medium text-slate-600 tracking-wide text-center">
                  Welcome to&nbsp;<span className="text-primary">Butler!</span>
                </p>
                <p className="my-3 text-slate-600 font-semibold text-center text-xs md:text-sm lg:text-xl">
                  <span className="text-primary capitalize">Bridging visions:</span>
                  Where designers and clients create together
                </p>
              </div>

              <div className="relative overflow-hidden rounded-b-[50px]">
                <div className="w-full absolute bottom-0 -z-10 ">
                  <Image
                    src="/assets/images/svg/grass_full.svg"
                    alt="Grass"
                    height={100}
                    width={100}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute w-full left-0 right-0 bottom-0 hidden md:block">
            <Image src="/assets/images/svg/trees.svg" alt="Trees" height={100} width={100} className="w-full" />
          </div> */}
        </div>
      </div>
      {/* mobile */}
      <div className="block h-full w-full sm:hidden ">
        <div className="h-[calc(100dvh-64px)] mt-16 w-full">
          <div className="w-full h-full">
            <div className="relative h-full ">
              {/* Image positioned at the bottom */}
              <div className="absolute bottom-0 w-full">
                <Image
                  src="/assets/images/svg/grass_2.svg"
                  alt="grass"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="relative h-full">
                <div className="h-full px-3 py-1 overflow-y-auto">
                  <div className="flex flex-col h-full justify-center items-center">
                    <p className="text-3xl font-bold text-lightBlack text-center">
                      Welcome to <span className="text-primary">Butler!</span>
                    </p>
                    <p className="text-xs font-normal text-lightBlack text-center">
                      <span className="text-primary">Bridging visions:</span>Where designers and clients create together
                    </p>
                  </div>
                </div>
                <div className=" w-full">
                  <div className="w-full h-full absolute top-24">
                    <Image
                      src="/assets/images/svg/3clouds_mobile.svg"
                      alt="Cloud"
                      height={100}
                      width={100}
                      className="w-full h-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
