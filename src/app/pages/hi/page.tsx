"use client";
import React, { useState } from "react";

const BookmarksUploader = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles)); // Store files as an array
    }
  };

  const parseHTMLToJSON = (htmlContent: string): Record<string, any[]> => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const result: Record<string, any[]> = {};

    const traverse = (
      node: HTMLElement,
      folderName: string = "Uncategorized"
    ) => {
      if (!result[folderName]) {
        result[folderName] = [];
      }

      for (const child of Array.from(node.children)) {
        if (child.tagName === "DT") {
          const link = child.querySelector("A");
          if (link) {
            const bookmark = {
              title: link.textContent || "Untitled",
              href: link.getAttribute("href"),
              icon: link.getAttribute("icon") || null, // Icon may be missing
              addedTime:
                link.getAttribute("add_date") || new Date().toISOString(), // Use add_date if available
            };
            result[folderName].push(bookmark);
          }

          const folder = child.querySelector("H3");
          if (folder) {
            const newFolderName = folder.textContent || "Untitled Folder";
            const sibling = child.nextElementSibling;
            if (sibling && sibling.tagName === "DL") {
              traverse(sibling as HTMLElement, newFolderName);
            }
          }
        }
      }
    };

    const rootDL = doc.querySelector("DL");
    if (rootDL) {
      traverse(rootDL);
    }
    return result;
  };

  const mergeAndDownloadJSON = async (files: File[]) => {
    if (!files || !Array.isArray(files)) {
      console.error("The files variable is not an array.");
      return;
    }

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
    console.log("====================================");
    console.log(combinedJSON);
    console.log("====================================");
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={() => mergeAndDownloadJSON(files)}>
        Merge Bookmarks
      </button>
    </div>
  );
};

export default BookmarksUploader;
