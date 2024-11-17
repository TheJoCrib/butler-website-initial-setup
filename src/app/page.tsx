'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import HomeClient from '@/components/HomeClient';
import HomeDesigner from '@/components/HomeDesigner';
import WelcomePage from '@/components/WelcomePage';

const Home: FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isThrottled = useRef(false); // Throttle control using ref
  const startY = useRef(0); // Track touch start position

  // Refs for desktop and mobile sections
  const desktopSectionsRef = useRef<HTMLDivElement[]>([]);
  const mobileSectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const sections = isMobile ? mobileSectionsRef.current : desktopSectionsRef.current;

    const scrollToSection = (index: number) => {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    const handleScroll = (event: WheelEvent) => {
      if (isThrottled.current) return;

      // Prevent the default scroll behavior
      event.preventDefault();

      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scroll down
        setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        // Scroll up
        setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      }

      // Set throttle
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 800);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY.current = e.touches[0].clientY; // Capture the starting touch point
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY; // Capture the ending touch point
      if (isThrottled.current) return;

      if (startY.current - endY > 50 && currentSectionIndex < sections.length - 1) {
        // Swipe up
        setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      } else if (endY - startY.current > 50 && currentSectionIndex > 0) {
        // Swipe down
        setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      }

      // Set throttle
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 800);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    // Scroll to the active section on mount or update
    scrollToSection(currentSectionIndex);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSectionIndex]);

  return (
    <>
      <div>
        {/* Desktop view */}
        <div className="w-full hidden sm:block">
          <div className="scroll-container px-[40px] lg:px-[60px] h-[calc(100vh-100px)]">
            <div
              ref={(el) => {
                if (el) desktopSectionsRef.current[0] = el;
              }}
              className="h-[100vh]" // Ensures each section takes up full screen height
            >
              <WelcomePage />
            </div>
            <div
              ref={(el) => {
                if (el) desktopSectionsRef.current[1] = el;
              }}
              className="h-[100vh] mb-20"
            >
              <HomeDesigner />
            </div>
            <div
              ref={(el) => {
                if (el) desktopSectionsRef.current[2] = el;
              }}
              className="h-[100vh]"
            >
              <HomeClient />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="block w-full h-full sm:hidden">
          <div className="scroll-container h-[calc(100dvh-64px)]">
            <div
              ref={(el) => {
                if (el) mobileSectionsRef.current[0] = el;
              }}
              className=""
            >
              <WelcomePage />
            </div>
            <div
              ref={(el) => {
                if (el) mobileSectionsRef.current[1] = el;
              }}
              className="h-full overflow-y-auto"
            >
              <HomeDesigner />
            </div>
            <div
              ref={(el) => {
                if (el) mobileSectionsRef.current[2] = el;
              }}
              className="h-full"
            >
              <HomeClient />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
