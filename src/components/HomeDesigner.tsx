import Image from 'next/image';
import React, { FC } from 'react';
import cloudWhite from '../../public/assets/images/new/cloud_white.png';
import cloudGreen from '../../public/assets/images/new/cloud_green.png';
import cloudYellow from '../../public/assets/images/new/cloud_yellow.png';
const HomeDesigner: FC = () => {
  return (
    <>
      {/* // Web view */}
      <div className="flex flex-col items-center ">
        <div className="w-full hidden sm:block">
          <div className="relative w-full mt-3 md:mt-4 ">
            <div className="w-full md:h-[calc(100dvh-120px)] rounded-[70px] ">
              <Image
                src="/assets/images/svg/phone_bg_home.svg"
                alt="Home"
                width={700}
                height={500}
                className="w-full h-full object-contain "
              />
              <Image
                src="/assets/images/svg/HomeDesigner.svg"
                alt="Home"
                width={700}
                height={500}
                className="w-full h-full absolute top-0 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View   */}
      <div className="block h-full sm:hidden">
        <div className="relative h-full overflow-hidden">
          <div className="h-full grid grid-cols-1 ">
            <div className="bg-[#8DD4B2] w-full relative">
              <div className="absolute -bottom-[35%] -left-14">
                <Image
                  src={cloudWhite}
                  alt="cloudWhite"
                  width={150}
                  height={150}
                  className="h-full w-full object-contain relative"
                />
              </div>
              <div className="w-full flex h-full justify-center p-3 gap-x-2">
                <div className="w-[40%] flex justify-center items-center">
                  <Image
                    src="/assets/images/svg/mobiles/designer_first_mobile.svg"
                    alt="cloudWhite"
                    width={80}
                    height={80}
                    className="object-contain relative"
                  />
                </div>
                <div className=" w-[60%] ">
                  <p className="text-white text-xl h-full font-medium drop-shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                    Designers
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bg-[#9CE1A8] w-full">
              <div className="absolute -bottom-[50%] -right-14">
                <Image
                  src={cloudGreen}
                  alt="cloudGreen"
                  width={180}
                  height={180}
                  className="h-full w-full object-contain relative"
                />
              </div>
              <div className="w-full flex h-full justify-center p-3 gap-x-2">
                <div className=" w-[60%] ">
                  <p className="text-white text-xl h-full text-center font-medium drop-shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                    One-stop app for client and designers.
                  </p>
                </div>
                <div className="w-[40%] flex justify-center items-center">
                  <Image
                    src="/assets/images/svg/mobiles/designer_second_mobile.svg"
                    alt="phone"
                    width={80}
                    height={80}
                    className="object-contain relative"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#B9EAA9] w-full">
              <div className="w-full flex h-full justify-center p-3 gap-x-2">
                <div className="w-[40%] flex justify-center items-center">
                  <Image
                    src="/assets/images/svg/mobiles/designer_third_mobile.svg"
                    alt="cloudWhite"
                    width={80}
                    height={80}
                    className="object-contain relative"
                  />
                </div>
                <div className="w-[60%] z-[1]">
                  <p className="text-white text-xl h-full text-center font-medium drop-shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                    Your personal homepage to keep track of your activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#B9EAA9]  bg-opacity-[0.8] w-full relative">
              <div className="absolute -bottom-5 -z-[1] -left-5">
                <Image
                  src={cloudYellow}
                  alt="cloudYellow"
                  width={180}
                  height={180}
                  className="h-full w-full object-contain relative"
                />
              </div>
              <div className="w-full flex h-full justify-center p-3 gap-x-2">
                <div className=" w-[60%] ">
                  <p className="text-white text-xl h-full text-center font-medium drop-shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                    One-stop app for client and designers.
                  </p>
                </div>
                <div className=" w-[60%]  flex justify-center items-center">
                  <Image
                    src="/assets/images/svg/mobiles/designer_fourth_mobile.svg"
                    alt="phone"
                    width={80}
                    height={80}
                    className="object-contain relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDesigner;
