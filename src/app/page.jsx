"use client";

import SplitText from "@/content/TextAnimations/SplitText/SplitText";
import BlurText from "@/content/TextAnimations/BlurText/BlueText";
import { InputFile } from "../components/client/Input";
import { ModeToggle } from "../components/client/toggle";
import Header from "../components/Main/Header";
import EntryPoint from "../components/Main/EntryPoint";
import { Review } from "../components/Main/Review";
import SplashCursor from "@/content/Animations/SplashCursor/SplashCursor";
import AnimatedContent from "@/content/Animations/AnimatedContent/AnimatedContent";
import { Meteors } from "@/components/ui/meteors";
import Particles from "@/components/ui/particles";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LocomotiveScroll from "locomotive-scroll";
import State from "@/components/Main/State";
import Footer from "@/components/Main/Footer";
import ExtractBookmarkMain from "@/components/Main/ExtractBookmarkMain";
import Feature from "@/components/Main/Feature";
import ScratchToRevealComponent from "@/components/Main/ScratchToReveal";
import PreviewDashboard from "@/components/Main/PreviewDashboard";
import Compare from "@/components/Main/Compare";
import Image from "next/image";
import AnimatedBeamComponent from "@/components/Main/AnimatedBeam";
import Bento from "@/components/Main/Bento";
import DownloadApp from "@/components/Main/DownloadApp";
import FAQs from "@/components/Main/faq";



export default function Home() {
  const scrollRef = React.createRef();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });






  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 50, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.5}
        threshold={0.2}
        className="relative z-50"
      >
        <Header />
      </AnimatedContent>
      <div id="main" ref={scrollRef}>
        <SplashCursor />
        <div className="max-w-[w-screen] overflow-hidden">
          <Meteors number={40} />
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <div className="h-screen ww-screen overflow-y-scroll">
          <div className="absolute inset-0 isolate z-[2] hidden contain-strict lg:block pointer-events-none">
            <div className="absolute left-0 top-0 h-[1280px] w-[560px] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
            <div className="absolute left-0 top-0 h-[1280px] w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"></div>
            <div className="absolute left-0 top-0 h-[1280px] w-[240px] -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
          </div>

          <div className="w-screen h-screen flex flex-col justify-end relative overflow-hidden">
            <h1 className="text-[12vw] font-semibold z-10">
              <SplitText
                text="Supercharge"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>
            <h1 className="text-[12vw] font-semibold z-10">
              <BlurText
                text="Your Bookmarks"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h1>

            <div className="mx-auto -mt-16 max-w-7xl absolute top-1/4 left-40 z-0">
              <div className="-mr-16 pl-16 [perspective:1000px] lg:-mr-56 lg:pl-56">
                <div className="[transform:rotateX(20deg);]">
                  <div className="relative [transform:skewX(.36rad);] lg:h-[44rem]">
                    <div className="absolute inset-0 z-[11] bg-gradient-to-l from-white dark:from-neutral-950"></div>
                    <div className="absolute inset-0 z-[2] h-full w-full items-center px-5 py-24 [--layer-color:theme(colors.white)] [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--layer-color)_100%)] dark:[--layer-color:theme(colors.gray.950)]"></div>
                    <div className="absolute inset-0 z-[2] h-full w-full items-center px-5 py-24 [--layer-color:theme(colors.white)] [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--layer-color)_100%)] dark:[--layer-color:theme(colors.gray.950)]"></div>

                    <Image
                      className="rounded-card relative z-[1] hidden border opacity-40 dark:block w-screen"
                      src="/assets/images/card-layout-dark.webp"
                      alt="Bookmark Dashboard"
                      width={1200}
                      height={1200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20">
            <Review />
          </div>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.5}
            threshold={0.2}
          >
            <div className="max-w-7xl mx-auto">
              <Bento />
            </div>
          </AnimatedContent>
          <div id="ExtractBookmarkMain" className="my-20">
            <ExtractBookmarkMain />
          </div>
          <EntryPoint />
          <div>
            <Compare />
          </div>


          <div>
            <DownloadApp />
          </div>

          <div>
            {/* <AnimatedBeamComponent /> */}
          </div>
          {/* <div>
            <PreviewDashboard />
          </div> */}
          <div id="Feature" className="my-20">
            <Feature />
          </div>
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={0.3}
            threshold={0.2}
          >
            <ScratchToRevealComponent />
          </AnimatedContent>
          <State />
          <FAQs />
          <Footer />
          {/* <InputFile /> */}
        </div>
      </div >
    </>
  );
}
