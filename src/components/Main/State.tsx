import { VerifiedIcon } from "lucide-react";
import React from "react";

const State: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-40 mb-10">
      {/* Grid */}
      <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <div className="lg:pe-6 xl:pe-12">
            <p className="text-7xl font-bold leading-10 text-white">
              95%
              <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2 dark:bg-neutral-800 dark:text-neutral-300">
               <VerifiedIcon className="w-6 h-6 text-green-500"/>
                +5% this month
              </span>
            </p>
            <p className="mt-2 sm:mt-3 text-gray-500 dark:text-neutral-500 text-lg">
              of users manage their bookmarks with ease on our platform.
            </p>
          </div>
        </div>
        {/* End Left Column */}

        {/* Right Column */}
        <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-neutral-700">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
            {/* Feature: Quick View */}
            <div>
              <p className="text-4xl font-semibold text-gray-200">99%</p>
              <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">
                Quick View for instant previews
              </p>
            </div>

            {/* Feature: Data Privacy */}
            <div>
              <p className="text-4xl font-semibold text-gray-200">100%</p>
              <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">
                Data stays on your device
              </p>
            </div>

            {/* Feature: Android & iOS */}
            <div>
              <p className="text-4xl font-semibold text-gray-200">
                2 Platforms
              </p>
              <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">
                Available on Android and iOS
              </p>
            </div>

            {/* Feature: Offline */}
            <div>
              <p className="text-4xl font-semibold text-gray-200">100%</p>
              <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">
                Works offline
              </p>
            </div>

            {/* Feature: Chrome Extension */}
            <div>
              <p className="text-4xl font-semibold text-gray-200">
                Coming Soon
              </p>
              <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">
                Chrome Extension support
              </p>
            </div>

            {/* Feature: User Satisfaction */}
            <div>
              <p className="text-4xl font-semibold text-gray-200">95%</p>
              <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">
                User satisfaction rate
              </p>
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default State;
