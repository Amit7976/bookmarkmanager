import React, { useState } from "react";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";
import BlurFade from "../ui/blur-fade";

const Feature = () => {
  const { theme } = useTheme();
  const features = [
    {
      icon: "assets/icons/json-converter.svg",
      name: "JSON Converter",
      description:
        "Easily convert your bookmark file into a structured JSON format for better organization and manipulation.",
    },
    {
      icon: "assets/icons/add-bookmark.svg",
      name: "Add Bookmark",
      description:
        "Add new pages to your bookmark collection by providing the URL, title, and optional tags or categories.",
    },
    {
      icon: "assets/icons/remove-bookmark.svg",
      name: "Remove Bookmark",
      description:
        "Delete unnecessary bookmarks to keep your collection clean and focused.",
    },
    {
      icon: "assets/icons/import-export.svg",
      name: "Import & Export Bookmarks",
      description:
        "Upload your bookmark file for easy access and download your bookmarks in a convenient format like JSON or HTML.",
    },
    {
      icon: "assets/icons/quick-view.svg",
      name: "Quick View",
      description:
        "Preview your bookmarked pages with thumbnails or metadata, saving you time when accessing content.",
    },
    {
      icon: "assets/icons/organize.svg",
      name: "Organize Bookmarks",
      description:
        "Group your bookmarks into folders or tag them for efficient navigation and management.",
    },
    {
      icon: "assets/icons/search-filter.svg",
      name: "Search & Filter",
      description:
        "Find specific bookmarks quickly using powerful search and filtering options.",
    },
    {
      icon: "assets/icons/analytics.svg",
      name: "Bookmark Analytics",
      description:
        "Gain insights into your bookmarks, including frequently visited links, last access date, and dead link detection.",
    },
    {
      icon: "assets/icons/share-bookmarks.svg",
      name: "Share Bookmarks",
      description:
        "Share your selected bookmarks or collections with friends or team members using a link or export option.",
    },
    // {
    //   icon: "assets/icons/backup.svg",
    //   name: "Automatic Backup",
    //   description:
    //     "Save your bookmarks periodically to prevent accidental data loss and ensure seamless recovery.",
    // },
    // {
    //   icon: "assets/icons/theme.svg",
    //   name: "Dark & Light Mode",
    //   description:
    //     "Switch between dark and light themes to suit your viewing preferences and reduce eye strain.",
    // },
    // {
    //   icon: "assets/icons/collaborate.svg",
    //   name: "Collaborative Bookmarks",
    //   description:
    //     "Collaborate with others by creating shared bookmark folders where everyone can add and manage links.",
    // },
    // {
    //   icon: "assets/icons/sync.svg",
    //   name: "Cloud Sync",
    //   description:
    //     "Sync your bookmarks across multiple devices to access them anytime, anywhere.",
    // },
    // {
    //   icon: "assets/icons/favorites.svg",
    //   name: "Favorites Highlight",
    //   description:
    //     "Mark your frequently used bookmarks as favorites and access them quickly from the dashboard.",
    // },
    // {
    //   icon: "assets/icons/custom-tags.svg",
    //   name: "Custom Tags",
    //   description:
    //     "Tag your bookmarks with custom labels for enhanced filtering and organization.",
    // },
    // {
    //   icon: "assets/icons/security.svg",
    //   name: "Secure Bookmarks",
    //   description:
    //     "Protect sensitive bookmarks with a password or encryption for added security.",
    // },
  ];

  return (
    <section className="py-12 bg-transparent sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <h2 className="text-title text-balance text-4xl font-medium lg:text-5xl">
            Explore Powerful Features
          </h2>
          <p className="text-lg text-gray-400">
            Effortlessly manage your bookmarks with our comprehensive suite of
            features. From organizing and previewing your saved links to
            sharing, syncing, and securing your data, we've got everything you
            need for a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 xl:mt-24">
          {features.map((feature, index) => (
            <BlurFade delay={0.1 * index} inView key={index}>
              <MagicCard
                key={index}
                className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl px-10 py-10"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <h3 className="text-2xl whitespace-break-spaces">
                  {feature.name}
                </h3>
                <p className="text-base mt-5 whitespace-break-spaces text-center text-gray-500">
                  {feature.description}
                </p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feature;
