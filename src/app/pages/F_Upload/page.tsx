"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation
import CryptoJS from "crypto-js"; // Import crypto-js for encryption
import { Upload, Link, LucideTrash2 } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Footer from "@/components/Main/Footer";
import Header from "@/components/Main/Header";
import FlickeringGrid from "@/components/ui/flickering-grid";

// Secret key for encryption (use a strong secret key)
const secretKey = "BMMCPMCA"; // BookMarkManagerCollegeProjectMCA

// Function to check localstorage that value is already stored or not

export default function Page() {
  const router = useRouter(); // Initialize router for redirection
  const [files, setFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const maxFileSize = 1; // Maximum file size in MB
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side

  useEffect(() => {
    const storedData = localStorage.getItem("BMMCPMCA_F_Upload");
    if (storedData) {
      //   console.log("====================================");
      //   console.log("called");
      //   console.log("====================================");
      router.push("/pages/dashboard");
    }
  }, []);

  useEffect(() => {
    setIsClient(true); // Set to true when component is mounted on client side
  }, []);

  useEffect(() => {
    if (isClient) {
      checkDataInIndexedDB();
    }
  }, [isClient]);

  const checkDataInIndexedDB = () => {
    // Open IndexedDB with version 2 to trigger onupgradeneeded
    const request = indexedDB.open("BMD", 2);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBRequest).result;
      if (!db.objectStoreNames.contains("bms")) {
        // Create the object store if it doesn't exist
        db.createObjectStore("bms", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("bms", "readonly");
      const store = transaction.objectStore("bms");

      const getRequest = store.get("bms-data");
      getRequest.onsuccess = () => {
        if (getRequest.result) {
          // If data exists, redirect to the dashboard
          //   console.log("====================================");
          //   console.log("it's called");
          //   console.log(getRequest.result);
          //   console.log("====================================");
          router.push("/pages/dashboard");
        }
      };

      getRequest.onerror = () => {
        // No data in IndexedDB, user can upload bookmarks
        console.log("No data found in IndexedDB.");
      };
    };

    request.onerror = (e) => {
      console.error("Failed to open IndexedDB:", e);
    };
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    validateFiles(droppedFiles);
    if (fileInputRef.current) fileInputRef.current.value = ""; // Reset input
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      validateFiles(selectedFiles);
    }
    if (fileInputRef.current) fileInputRef.current.value = ""; // Reset input
  };

  const validateFiles = async (fileList: File[]) => {
    const validFiles: File[] = [];
    let errors: string[] = [];

    for (const file of fileList) {
      if (file.size > maxFileSize * 1024 * 1024) {
        errors.push(
          `${file.name} exceeds the size limit of ${maxFileSize} MB.`
        );
        continue;
      }

      if (file.type === "text/html") {
        const isValidBookmark = await validateHTMLFile(file);
        if (isValidBookmark) {
          validFiles.push(file);
        } else {
          errors.push(`${file.name} is not a valid bookmark HTML file.`);
        }
      } else if (file.type === "application/json") {
        const isValidJSON = await validateJSONFile(file);
        if (isValidJSON) {
          validFiles.push(file);
        } else {
          errors.push(`${file.name} is not a valid bookmark JSON file.`);
        }
      } else {
        errors.push(`${file.name} is not an HTML or JSON file.`);
      }
    }

    setFiles((prev) => [...prev, ...validFiles]);
    setUploadError(errors.length > 0 ? errors.join("\n") : null);
  };

  const validateHTMLFile = async (file: File): Promise<boolean> => {
    const content = await file.text();
    return content.includes("<!DOCTYPE NETSCAPE-Bookmark-file-1>");
  };

  const validateJSONFile = async (file: File): Promise<boolean> => {
    try {
      const content = await file.text();
      const json = JSON.parse(content);
      return (
        typeof json === "object" &&
        Object.values(json).every(
          (category: any) =>
            Array.isArray(category) &&
            category.every(
              (item) =>
                typeof item.href === "string" && typeof item.name === "string"
            )
        )
      );
    } catch {
      return false;
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const mergeAndDownloadJSON = async () => {
    const combinedBookmarks: Record<string, any[]> = {};

    for (const file of files) {
      const content = await file.text();
      let parsedData: Record<string, any[]> = {};

      if (file.type === "text/html") {
        parsedData = parseHTMLToJSON(content);
      } else if (file.type === "application/json") {
        parsedData = JSON.parse(content);
      }

      for (const [category, items] of Object.entries(parsedData)) {
        if (!combinedBookmarks[category]) {
          combinedBookmarks[category] = [];
        }

        const existingHrefs = new Set(
          combinedBookmarks[category].map((item) => item.href)
        );
        const uniqueItems = items.filter(
          (item) => !existingHrefs.has(item.href)
        );
        combinedBookmarks[category].push(...uniqueItems);
      }
    }

    const combinedJSON = JSON.stringify(combinedBookmarks, null, 2);
    storeDataInIndexedDB(encryptData(combinedJSON, secretKey));
    router.push("/pages/dashboard");
    localStorage.setItem("BMMCPMCA_F_Upload", "true");
    // downloadJSON(combinedJSON, "combined-bookmarks.json");
    // console.log("====================================");
    // console.log(combinedJSON);
    // console.log("====================================");
  };

  const parseHTMLToJSON = (html: string): Record<string, any[]> => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const result: Record<string, any[]> = {};

    // Recursive function to process folders and their bookmarks
    const processFolder = (folderElement: any, parentPath = "") => {
      const category = folderElement.textContent || "Untitled";
      const currentPath = parentPath ? `${parentPath} > ${category}` : category;
      const bookmarks: any[] = [];
      const dl = folderElement.nextElementSibling;

      if (dl && dl.tagName === "DL") {
        const anchors = Array.from(dl.querySelectorAll("A"));
        anchors.forEach((anchor) => {
          const bookmark = {
            href: anchor.href,
            name: anchor.textContent || "Untitled",
            icon: anchor.getAttribute("icon") || null,
            addingDate: new Date().toISOString(),
          };
          bookmarks.push(bookmark);
        });
      }

      result[currentPath] = bookmarks;

      // Process nested folders
      const nestedFolders = Array.from(folderElement.querySelectorAll("H3"));
      nestedFolders.forEach((nestedFolder) => {
        processFolder(nestedFolder, currentPath);
      });
    };

    // Start processing from the root folders
    const headings = doc.querySelectorAll("H3");
    headings.forEach((heading) => {
      processFolder(heading);
    });

    return result;
  };

  const encryptData = (data: string, key: string): string => {
    return CryptoJS.AES.encrypt(data, key).toString();
  };

  const storeDataInIndexedDB = (encryptedData: string) => {
    // Increment the version to trigger onupgradeneeded event
    const request = indexedDB.open("BMD", 3); // Use version 3 to ensure the upgrade event happens

    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBRequest).result;

      // Check if the object store exists, and if not, create it
      if (!db.objectStoreNames.contains("bms")) {
        db.createObjectStore("bms", { keyPath: "id", autoIncrement: true });
      } else {
        // If the object store exists, we can delete it and recreate it
        db.deleteObjectStore("bms");
        db.createObjectStore("bms", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("bms", "readwrite");
      const store = transaction.objectStore("bms");

      // Insert the encrypted data into the object store
      store.put({ id: "bms-data", data: encryptedData });

      transaction.oncomplete = () => {
        console.log("Data stored successfully in IndexedDB.");
      };

      transaction.onerror = (e) => {
        console.error("Error storing data in IndexedDB:", e);
      };
    };

    request.onerror = (e) => {
      console.error("Failed to open IndexedDB:", e);
    };
  };

  useEffect(() => {
    if (uploadError) {
      const timer = setTimeout(() => setUploadError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [uploadError]);

  return (
    <>
      <Header />
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full w-screen"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <div
        id="main"
        className="min-h-screen flex flex-col items-center justify-center pt-40 pb-20 px-6 z-40 relative"
      >
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer p-8 relative flex flex-col justify-center w-1/2 shadow-lg backdrop-blur-3xl border-2 border-dashed border-gray-400 hover:border-gray-100 duration-1000 rounded-lg hover:shadow-xl transition-shadow"
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          <div className="text-center">
            <span className="flex justify-center items-center w-16 h-16 bg-neutral-700 text-white rounded-full mx-auto">
              <Upload />
            </span>
            <div className="mt-6 text-base text-gray-700">
              <label className="cursor-pointer">
                <span className="block font-medium text-gray-200">
                  Drag and drop files here or
                </span>
                <div className="my-5">
                  <button className="flex items-center gap-1 text-blue-500 border-b-2 border-blue-500 mx-auto">
                    <Link className="w-4" /> Choose File
                  </button>
                </div>
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileSelect}
                  accept=".html,.json"
                />
              </label>
            </div>
          </div>
        </div>
        {uploadError && (
          <div className="mt-4 p-4 text-sm text-red-700 bg-red-100 border border-red-200 rounded-lg">
            {uploadError}
          </div>
        )}
        <div className="mt-16 w-full max-w-4xl space-y-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-800 border-2 border-gray-400 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="truncate text-gray-200">{file.name}</span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => removeFile(index)}
                aria-label={`Remove file at index ${index}`}
              >
                <LucideTrash2 />
              </button>
            </div>
          ))}
        </div>
        {files.length > 0 && (
          <div className="mt-6">
            <InteractiveHoverButton
              onClick={mergeAndDownloadJSON}
              className="px-20 border-2 border-white"
            >
              Process
            </InteractiveHoverButton>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
