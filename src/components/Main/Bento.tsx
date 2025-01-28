import {
  CalendarIcon,
  EyeOpenIcon,
  FileTextIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedBeam from "@/components/Main/AnimatedBeam";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import AnimatedBeamComponent from "@/components/Main/AnimatedBeam";
import { AnimatedList } from "../ui/animated-list";
import { Calendar } from "../ui/calendar";
import Image from "next/image";
import Ripple from "../ui/ripple";
import { TbBookmarks, TbMoodEmpty } from "react-icons/tb";

const files = [
  {
    name: "Google",
    url: "https://www.google.com",
    description:
      "The world's most popular search engine and a gateway to various tools and services.",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    description:
      "A platform for hosting and collaborating on code repositories.",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description:
      "A community-driven platform for developers to ask and answer programming-related questions.",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    description: "Connect with friends, family, and communities worldwide.",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    description:
      "A social media platform for sharing short updates, news, and opinions.",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    description:
      "A professional networking platform for connecting with colleagues, companies, and job opportunities.",
  },
];

const features = [
  {
    Icon: InputIcon,
    name: "Deep Search",
    description:
      "We use advanced deep search techniques to help you find your desired bookmarked pages with precision and intent.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="my-4 text-xs">{f.description}</blockquote>
            <blockquote className="my-4 text-xs">{f.url}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: EyeOpenIcon,
    name: "Quick View",
    description:
      "Easily preview your bookmarks with Quick View, making it simple to choose the one you need.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        className="absolute rounded-card z-[1] hidden border opacity-40 dark:block w-screen"
        src="/assets/images/card-layout-dark.webp"
        alt="Bookmark Dashboard"
        width={1200}
        height={1200}
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ Browsers Bookmark exported files",
    className: "col-span-3 lg:col-span-2",
    background: <AnimatedBeamComponent />,
  },
  {
    Icon: TbBookmarks,
    name: "",
    description: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <>
        <p className="z-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-gray-400">
          <TbBookmarks />
        </p>
        <Ripple />
      </>
    ),
  },
];

const Bento = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};
export default Bento;
