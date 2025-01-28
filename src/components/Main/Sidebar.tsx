import React from "react";

const Sidebar = ({ folders, onSelectFolder }) => {
  return (
    <div className="sidebar">
      <ul>
        {Object.keys(folders).map((folder) => (
          <li key={folder} onClick={() => onSelectFolder(folder)}>
            {folder}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
