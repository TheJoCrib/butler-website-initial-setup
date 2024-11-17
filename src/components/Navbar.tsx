'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

// interface NavProps {
//     onContactClick: React.RefObject<HTMLDivElement>,
//     onPrivacyPolicyClick: React.RefObject<HTMLDivElement>,
// }

// const Navbar: FC<NavProps> = ({ onPrivacyPolicyClick, onContactClick }) => {
//     const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
//         if (ref.current) {
//             ref.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };
  return (
    <div className="sticky top-0 bg-white z-[999] md:sticky md:top-0 md:bg-white md:z-[999]">
      <nav className="bg-white border-b p-2 h-16 max-h-16 sm:hidden ">
        <div className="flex justify-between items-center h-full">
          <div className="text-white text-lg font-bold">
            <img src="/assets/images/new/logo_green.png" alt="logo" width={110} height={100} />
          </div>
          <div className="md:hidden">
            <div className="h-8 w-8 flex items-center ">
              {isOpen ? (
                <button onClick={() => setIsOpen(false)} className="text-primary focus:outline-none">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              ) : (
                <button onClick={() => setIsOpen(true)} className="text-white focus:outline-none">
                  <img src="/assets/images/new/hamburger_green.png" alt="hamburger" width={100} height={100} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div
          className={`md:hidden fixed top-16 left-0 h-full w-full bg-primary text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="space-y-4 p-6">
            <li
              className={`m-0 cursor-pointer p-3 border border-primary rounded-md hover:border hover:border-white/75 transition-all duration-300 ease-in-out  ${pathname === '/' ? 'bg-white text-primary' : 'bg-primary text-white'}`}
              onClick={() => handleLinkClick('/')}
            >
              <p className="m-0 text-lg font-medium">Home</p>
            </li>
            <li
              className={`m-0 cursor-pointer p-3 border border-primary rounded-md hover:border hover:border-white/75 transition-all duration-300 ease-in-out  ${pathname === '/privacy-policy' ? 'bg-white text-primary' : 'bg-primary text-white'}`}
              onClick={() => handleLinkClick('/privacy-policy')}
            >
              <p className="m-0 text-lg font-medium">Privacy Policy</p>
            </li>
            <li
              className={`m-0 cursor-pointer p-3 border border-primary rounded-md hover:border hover:border-white/75 transition-all duration-300 ease-in-out  ${pathname === '/contact-us' ? 'bg-white text-primary' : 'bg-primary text-white'}`}
              onClick={() => handleLinkClick('/contact-us')}
            >
              <p className="m-0 text-lg font-medium">Contact Us</p>
            </li>
          </ul>
        </div>
      </nav>
      {/* web view  */}
      <div className="w-full hidden sm:block">
        <div className="flex w-full relative h-16 items-center justify-between">
          <div className="absolute z-10 left-0 top-0 ">
            <Image
              src="/assets/images/svg/web-logo.svg"
              alt="Logo"
              width={150}
              height={150}
              className="z-10 left-0 top-0 h-max"
            />
          </div>
          <div className="w-full flex justify-end md:justify-center ">
            <div className="w-[calc(100%-120px)] sm:w-[calc(100%-150px)] max-w-min border-b-2 border-slate-500 flex justify-end md:justify-center items-end gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-14 gap-y-4">
              <Link
                href="/"
                className={`mb-2 text-xs sm:text-sm md:text-md font-medium ${pathname === '/' ? 'text-primary' : 'text-lightBlack'} whitespace-nowrap`}
              >
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className={`mb-2 text-xs sm:text-sm md:text-md font-medium ${pathname === '/privacy-policy' ? 'text-primary' : 'text-lightBlack'} whitespace-nowrap`}
                // onClick={() => handleScroll(onPrivacyPolicyClick)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact-us"
                className={`mb-2 text-xs sm:text-sm md:text-md font-medium ${pathname === '/contact-us' ? 'text-primary' : 'text-lightBlack'} whitespace-nowrap`}
                // onClick={() => handleScroll(onContactClick)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
