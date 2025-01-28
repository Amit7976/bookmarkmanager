"use client";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import Header from "@/components/Dashboard/Header";

const secretKey = "BMMCPMCA"; // BookMarkManagerCollegeProjectMCA

interface Bookmark {
  name: string;
  href: string;
  icon: string;
  description?: string;
}

const Page: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Record<string, Bookmark[]>>({});
  const [filteredBookmarks, setFilteredBookmarks] = useState<Bookmark[]>([]);
  const [keys, setKeys] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>("All");
  const [hoveredBookmark, setHoveredBookmark] = useState<Bookmark | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      setIsLoading(true);
      try {
        const data = await getDataFromIndexedDB();
        if (data) {
          const decryptedData = decryptData(data, secretKey);
          const parsedData = JSON.parse(decryptedData);

          // Remove unnecessary "Bookmarks" key
          if (parsedData["Bookmarks"]) {
            delete parsedData["Bookmarks"];
          }

          // Generate descriptions for bookmarks
          Object.keys(parsedData).forEach((key) => {
            parsedData[key] = parsedData[key].map((bookmark: Bookmark) => ({
              ...bookmark,
              description:
                bookmark.description || generateDescription(bookmark.name),
            }));
          });

          setBookmarks(parsedData);
          setKeys(["All", ...Object.keys(parsedData)]);
          setFilteredBookmarks(Object.values(parsedData).flat());
        } else {
          setError("No bookmarks found in the database.");
        }
      } catch (err) {
        console.error("Error fetching bookmarks:", err);
        setError("Failed to retrieve bookmarks.");
      }
      setIsLoading(false);
    };

    fetchBookmarks();
  }, []);

  useEffect(() => {
    if (selectedKey === "All") {
      setFilteredBookmarks(Object.values(bookmarks).flat());
    } else {
      setFilteredBookmarks(bookmarks[selectedKey] || []);
    }
  }, [selectedKey, bookmarks]);

  const getDataFromIndexedDB = (): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("BMD", 3);

      request.onupgradeneeded = (e) => {
        const db = (e.target as IDBRequest).result;
        if (!db.objectStoreNames.contains("bms")) {
          db.createObjectStore("bms", { keyPath: "id", autoIncrement: true });
        }
      };

      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("bms", "readonly");
        const store = transaction.objectStore("bms");
        const getRequest = store.get("bms-data");
        getRequest.onsuccess = () => resolve(getRequest.result?.data || null);
        getRequest.onerror = () =>
          reject("Error fetching data from IndexedDB.");
      };

      request.onerror = () => reject("Failed to open IndexedDB.");
    });
  };

  const decryptData = (encryptedData: string, key: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const generateDescription = (name: string): string => {
    return `Explore the bookmark "${name}" to learn more about its content and how it can help you!`;
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-900 flex">
        {/* Sidebar */}
        <div className="w-[15%] bg-neutral-900 border-r border-gray-700 h-screen p-4 overflow-y-scroll">
          <ul className="space-y-1 pl-2.5 pt-5">
            {keys.map((key) => (
              <li
                key={key}
                className={`py-2 px-4 cursor-pointer rounded-lg ${
                  selectedKey === key ? "bg-neutral-800" : ""
                } text-white hover:bg-neutral-700 text-sm`}
                onClick={() => setSelectedKey(key)}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="w-[85%] h-screen p-4 pr-10 overflow-y-auto relative">
          {isLoading ? (
            <p>Loading bookmarks...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            filteredBookmarks.map((bookmark, index) => (
              <div
                key={`${bookmark.href}-${index}`} // Combine href and index for uniqueness
                className="p-4 bg-neutral-950 rounded-lg shadow-md mb-4 w-full cursor-pointer"
                onClick={() =>
                  setHoveredBookmark(
                    hoveredBookmark?.href === bookmark.href ? null : bookmark
                  )
                } // Toggle iframe display
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={bookmark.icon}
                    alt={bookmark.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-lg text-white">{bookmark.name}</h3>
                    <p className="text-sm text-gray-400 pb-2">
                      {bookmark.description}
                    </p>
                  </div>
                </div>
                {/* Show iframe on click */}
                {hoveredBookmark?.href === bookmark.href && (
                  <iframe
                    src={bookmark.href}
                    className="mt-4 w-full h-[800px] border border-gray-700 rounded-lg"
                    title={bookmark.name}
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
