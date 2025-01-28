"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import { TbBookmarks } from "react-icons/tb";
import ShimmerButton from "../ui/shimmer-button";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const AnimatedBeamComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLButtonElement>(null); // Correctly typed for ShimmerButton
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute flex py-10 w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-950 p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-2xl items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Image
              src={"/assets/svg/brave.svg"}
              width={300}
              height={300}
              alt={"Brave"}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              src={"/assets/svg/chrome.svg"}
              width={300}
              height={300}
              alt={"Chrome"}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image
              src={"/assets/svg/edge.svg"}
              width={300}
              height={300}
              alt={"Edge"}
            />
          </Circle>
          <ShimmerButton ref={div4Ref} className="bg-black">
            <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white lg:text-lg flex items-center gap-2">
              <TbBookmarks className="text-3xl" />
              BookMark
            </span>
          </ShimmerButton>
          <Circle ref={div6Ref}>
            <Image
              src={"/assets/svg/opera.svg"}
              width={300}
              height={300}
              alt={"Opera"}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image
              src={"/assets/svg/firefox.svg"}
              width={300}
              height={300}
              alt={"Firefox"}
            />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
              src={"/assets/svg/safari.svg"}
              width={300}
              height={300}
              alt={"Safari"}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={6}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        duration={6}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        duration={6}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        duration={6}
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        duration={6}
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        duration={6}
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
};

export default AnimatedBeamComponent;
