import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ConfettiButton } from "@/components/ui/confetti";
import AnimatedContent from "@/content/Animations/AnimatedContent/AnimatedContent";

function ExtractBookmarkMain() {
  const browsers = [
    {
      name: "Chrome",
      icon: "assets/svg/chrome.svg",
      steps: [
        "Open Chrome and click on the three dots in the top-right corner.",
        "Go to 'Bookmarks' > 'Bookmark manager'.",
        "Click on the three dots in the Bookmark Manager and select 'Export bookmarks'.",
        "Choose a location to save the file and click 'Save'.",
      ],
    },
    {
      name: "Brave",
      icon: "assets/svg/brave.svg",
      steps: [
        "Open Brave and click on the three horizontal lines (menu) in the top-right corner.",
        "Go to 'Bookmarks' > 'Bookmark manager'.",
        "Click on the three dots in the Bookmark Manager and select 'Export bookmarks'.",
        "Choose a location to save the file and click 'Save'.",
      ],
    },
    {
      name: "Opera",
      icon: "assets/svg/opera.svg",
      steps: [
        "Open Opera and click on the Opera logo in the top-left corner.",
        "Go to 'Bookmarks' > 'Manage bookmarks'.",
        "Click on the 'Export bookmarks' option in the toolbar.",
        "Choose a location to save the file and click 'Save'.",
      ],
    },
    {
      name: "Firefox",
      icon: "assets/svg/firefox.svg",
      steps: [
        "Open Firefox and click on the three horizontal lines (menu) in the top-right corner.",
        "Go to 'Bookmarks' > 'Manage bookmarks' or press Ctrl+Shift+O.",
        "In the Library window, click on 'Import and Backup' > 'Export Bookmarks to HTML'.",
        "Choose a location to save the file and click 'Save'.",
      ],
    },
    {
      name: "Tor",
      icon: "assets/svg/tor.svg",
      steps: [
        "Open Tor Browser and click on the three horizontal lines (menu) in the top-right corner.",
        "Go to 'Bookmarks' > 'Manage bookmarks'.",
        "In the Library window, click on 'Import and Backup' > 'Export Bookmarks to HTML'.",
        "Choose a location to save the file and click 'Save'.",
      ],
    },
    {
      name: "Edge",
      icon: "assets/svg/edge.svg",
      steps: [
        "Open Microsoft Edge and click on the three dots in the top-right corner.",
        "Go to 'Favorites' > 'Manage favorites'.",
        "Click on the 'Export favorites' option in the toolbar.",
        "Choose a location to save the file and click 'Save'.",
      ],
    },
    {
      name: "Safari",
      icon: "assets/svg/safari.svg",
      steps: [
        "Open Safari and click on 'File' in the top menu bar.",
        "Select 'Export Bookmarks' from the dropdown menu.",
        "Choose a location to save the file.",
        "Click 'Save'.",
      ],
    },
    {
      name: "UC",
      icon: "assets/svg/uc.svg",
      steps: [
        "Open UC Browser and click on the three horizontal lines (menu) in the bottom or top-right corner (depending on your version).",
        "Go to 'Bookmarks' or 'Settings' > 'Bookmarks'.",
        "Look for the 'Export' option (some versions may require syncing with a UC account).",
        "Export the bookmarks file and save it to your desired location.",
      ],
    },
  ];

  return (
    <>
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:w-1/2 mx-auto text-center mb-6 md:mb-28">
          <h2 className="text-xl font-semibold md:text-5xl md:leading-tight text-gray-800 dark:text-neutral-200">
            Step-by-Step Guide to Export Bookmarks
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-12">
          {browsers.map((browser, index) => (
            <AnimatedContent
              distance={50 + index * 50}
              direction="horizontal"
              reverse={index === 3 || index === 6 || index === 8 ? true : false}
              config={{ tension: 20 * index, friction: 2 * index }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.5}
              threshold={0.1}
              className="col-span-1 p-4 md:p-12 bg-gray-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center gap-3 cursor-pointer hover:scale-105 duration-500 hover:border-2 border-gray-500"
              key={index}
            >
              <Dialog key={index}>
                <DialogTrigger>
                  <>
                    <Image
                      src={browser.icon}
                      width={70}
                      height={70}
                      alt="Brave"
                    />
                    <h2 className="text-3xl">{browser.name}</h2>
                  </>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="absolute top-2 left-2">
                      {browser.name}
                    </DialogTitle>
                    <div className="bg-transparent">
                      <div className="max-w-5xl p-4 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                            <img
                              className="w-full object-cover rounded-xl"
                              src={browser.icon}
                              alt="Features Image"
                            />
                          </div>

                          <div>
                            <div className="mb-4">
                              <h3 className="text-white text-xs font-medium uppercase">
                                Steps
                              </h3>
                            </div>

                            {browser.steps.map((step, index) => (
                              <div key={index} className="flex gap-x-5 ms-1">
                                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                  <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                                      {index + 1}
                                    </span>
                                  </div>
                                </div>

                                <div className="grow pt-0.5 pb-8 sm:pb-12">
                                  <p className="text-sm lg:text-base text-neutral-400">
                                    {step}
                                  </p>
                                </div>
                              </div>
                            ))}

                            <ConfettiButton className="rounded-full">
                              All Set 🎉
                            </ConfettiButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExtractBookmarkMain;
