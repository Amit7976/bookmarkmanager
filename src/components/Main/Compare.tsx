import Link from "next/link";
import React from "react";
import { TbBookmarks } from "react-icons/tb";
import FileTree from "./FileTree";
import AnimatedContent from "@/content/Animations/AnimatedContent/AnimatedContent";

function Compare() {
  return (
    <section className="bg-white dark:bg-transparent py-32">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <h2 className="text-title text-gray-400 max-w-lg text-4xl font-medium lg:text-7xl">
          <span className="inline-flex items-center">
            See{" "}
            <Link
              className="flex-none rounded-md flex items-center gap-1 px-5 text-5xl text-white font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Bookmark"
            >
              <TbBookmarks /> BookMark
            </Link>{" "}
          </span>
          <span>in the Action</span>
        </h2>
        <div className="grid gap-6 divide-y border-y *:py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:*:py-12">
          {/* Before Section */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.5}
            threshold={0.2}
          >
            <div className="space-y-6 sm:pr-6 lg:pr-12">
              <h3 className="font-medium text-title text-xl text-red-500">
                Before
              </h3>
              <p className="text-body">
                Managing bookmarks in traditional browsers can be a hassle. They
                are often displayed as long lists, making it difficult to find
                and organize saved pages.
              </p>
              <div className="relative pt-6">
                {/* <img
                  className="grayscale"
                  src="https://oxymor-st.tailus.io/_astro/bars.DEh8rxfi_2hxS64.webp"
                  alt="Traditional bookmarks in a browser"
                /> */}
                <FileTree />
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.5}
            threshold={0.2}
          >
            {/* After Section */}
            <div className="space-y-6 sm:pl-6 lg:pl-12">
              <h3 className="font-medium text-title text-xl text-green-500">
                After
              </h3>
              <p className="text-body">
                With our platform, managing bookmarks becomes intuitive and
                efficient. Easily organize bookmarks, get quick previews, and
                categorize or tag them for seamless navigation.
              </p>
              <div className="relative pt-6">
                <div className="absolute inset-0 z-[1] bg-gradient-to-tl from-white dark:from-gray-950"></div>
                <img
                  className="grayscale"
                  src="https://oxymor-st.tailus.io/_astro/areas.CthgT_WU_Z1eTdMG.webp"
                  alt="Enhanced bookmark manager experience"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

export default Compare;
