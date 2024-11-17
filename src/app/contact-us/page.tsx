import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="h-full">
      <div className="hidden sm:block relative w-full h-full">
        <div className="relative w-full h-full mt-4 px-[40px] lg:px-[60px]">
          <div className="relative w-full mt-4">
            <div className="border h-[calc(100dvh-100px)] border-primary rounded-[50px] relative">
              <div className="my-[50px] z-50 px-9 py-4 overflow-hidden h-[calc(100%-120px)] w-full flex items-center justify-center">
                <div className="grid grid-cols-12 h-full w-full items-center gap-3 max-w-5xl ">
                  <div className="col-span-8 ">
                    <div className="flex w-full items-center justify-center mt-4 mb-4">
                      <p className="text-primary font-medium text-7xl tracking-[4px] md:tracking-[10px]">Support</p>
                    </div>
                    <div className="flex w-full items-center justify-center mt-5 px-2 max-w-lg m-auto">
                      <p className="text-center text-md font-medium">
                        If you have any questions or need help, please feel free to contact us at{' '}
                        <a href="mailto:help@butlerapp.info" className="text-primary">
                          help@butlerapp.info
                        </a>
                        . You could also contact us by opening a&nbsp;
                        <span className="text-primary">support ticket</span> in our application.
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full mt-10 gap-5 ">
                      <button className="border border-black rounded-md py-1.5 px-3 text-xs md:text-base text-black font-medium flex gap-x-1 items-center">
                        <Image src="/assets/icon/play_store.svg" alt="play_store" width={12} height={12} />
                        Google play
                      </button>
                      <button className="border border-black rounded-md py-1.5 px-3 text-xs md:text-base text-black font-medium flex gap-x-1 items-center">
                        <Image src="/assets/icon/apple_store.svg" alt="apple_store" width={12} height={12} />
                        Apple Store
                      </button>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex justify-center -space-x-10 ">
                      <div className="max-w-[140px] md:max-w-[190px] ">
                        <Image
                          src="/assets/images/svg/samsung_support.svg"
                          alt="samsung"
                          height={100}
                          width={100}
                          className="w-full h-max"
                        />
                      </div>
                      <div className="max-w-[80px] -z-10 md:max-w-[100px]">
                        <Image
                          src="/assets/images/svg/iphone_support.svg"
                          alt="iphone"
                          height={100}
                          width={100}
                          className="w-full h-max"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full left-0 right-0 z-10 bottom-0 block">
                <Image
                  src="/assets/images/svg/grass_full.svg"
                  alt="Trees"
                  height={100}
                  width={100}
                  className="w-full h-5/6 sm:h-2/4 rounded-b-[50px]"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden h-full">
        <div className="w-full h-full ">
          <div className="relative h-full">
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
            <div className="relative h-[calc(100%-250px)]">
              <div className="h-full px-3 py-1 overflow-y-auto">
                <div className="flex h-full justify-center items-center">
                  <div className="flex-col ">
                    <div className="w-full flex justify-center py-3">
                      <p className="text-primary font-semibold tracking-wider text-4xl">Support</p>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center mt-5 gap-y-2 px-2">
                      <p className="text-center text-md font-medium">If you have any questions or need help</p>
                      <p className="text-center text-md font-medium">
                        {' '}
                        please feel free to contact us at{' '}
                        <a href="mailto:help@butlerapp.info" className="text-primary">
                          help@butlerapp.info
                        </a>
                        .{' '}
                      </p>
                      <p className="text-center text-md font-medium px-4">
                        You could also contact us by opening a&nbsp;
                        <span className="text-primary">support ticket</span> in our application.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center w-full mt-10 gap-3 ">
                      <button className="border border-black rounded-md py-1.5 px-3 text-xs md:text-base   text-black font-medium flex gap-x-1 items-center">
                        <Image src="/assets/icon/play_store.svg" alt="play_store" width={12} height={12} />
                        Google play
                      </button>
                      <button className="border border-black rounded-md py-1.5 px-3 text-xs md:text-base text-black font-medium flex gap-x-1 items-center">
                        <Image src="/assets/icon/apple_store.svg" alt="apple_store" width={12} height={12} />
                        Apple Store
                      </button>
                    </div>
                    <div className="absolute -bottom-48 left-0 right-0">
                      <div className="flex justify-center -space-x-10 ">
                        <div className="max-w-[140px] z-[2] md:max-w-[190px] ">
                          <Image
                            src="/assets/images/svg/samsung_support.svg"
                            alt="samsung"
                            height={100}
                            width={100}
                            className="w-full h-5/6"
                          />
                        </div>
                        <div className="max-w-[80px] z-[1] md:max-w-[100px]">
                          <Image
                            src="/assets/images/svg/iphone_support.svg"
                            alt="iphone"
                            height={100}
                            width={100}
                            className="w-full h-5/6"
                          />
                        </div>
                      </div>
                    </div>
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

export default ContactUs;
