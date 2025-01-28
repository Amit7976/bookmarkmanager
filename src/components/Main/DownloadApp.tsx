import React from "react";
import Iphone15Pro from "../ui/iphone-15-pro";
import Android from "../ui/android";
import { FaAndroid, FaApple, FaChrome } from "react-icons/fa";
import { TbBookmarks } from "react-icons/tb";
import AnimatedContent from "@/content/Animations/AnimatedContent/AnimatedContent";

function DownloadApp() {
  return (
    <>
      <section className="py-10 bg-transparent sm:py-16 lg:py-24">
        <div className="relative flex items-center justify-center max-w-7xl p-20 mx-auto">
          <AnimatedContent
            distance={200}
            direction="vertical"
            reverse={false}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.5}
            threshold={0.2}
          >
            <Iphone15Pro
              className="size-full"
              src="/assets/images/card-layout-dark.webp"
            />
          </AnimatedContent>
          {/* <h2 className="text-4xl font-medium truncate">Mobile Application</h2> */}
          {/* <Android
            className="size-1/2"
            src="/assets/images/card-layout-dark.webp"
          /> */}
        </div>

        <div className="px-4 mx-auto sm:px-6 lg:px-8 py-20 bg-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <TbBookmarks className="mx-auto w-14 h-14 text-gray-700" />
            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Download Our App
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Get started with our app on your favorite platform. It's quick and
              easy to set up.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
            <a
              href="#"
              title="Download for Android"
              className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              <FaAndroid className="w-6 h-6 mr-2 -ml-1" />
              Download for Android
            </a>

            <a
              href="#"
              title="Download for iOS"
              className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              <FaApple className="w-6 h-6 mr-2 -ml-1" />
              Download for iOS
            </a>

            <a
              href="#"
              title="Add to Home Screen"
              className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              <FaChrome className="w-6 h-6 mr-2 -ml-1" />
              Install as PWA
            </a>
          </div>

          <p className="mt-6 text-base text-center text-gray-600">
            It takes only 2 minutes to set up on any device.
          </p>
        </div>
      </section>
    </>
  );
}

export default DownloadApp;
