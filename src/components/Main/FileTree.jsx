import { File, Folder, Tree } from "@/components/ui/file-tree";
const FileTree = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="Bookmarks" value="1">
          {/* Category: Tailwind */}
          <Folder value="2" element="Tailwind Resources">
            <File value="3">
              <p>Tailmater | Tailwind Material 3 UI</p>
            </File>
            <File value="4">
              <p>Installation - Tailwind CSS</p>
            </File>
            <File value="12">
              <p>Advanced Tailwind Techniques</p>
            </File>
            <File value="13">
              <p>Top Tailwind Plugins to Use</p>
            </File>
          </Folder>

          {/* Category: UI Components */}
          <Folder value="5" element="UI Components">
            <Folder value="6" element="UI Elements">
              <File value="7">
                <p>Creating Buttons in React</p>
              </File>
              <File value="14">
                <p>Input Field Styling</p>
              </File>
              <File value="15">
                <p>Custom Dropdown Menus</p>
              </File>
            </Folder>
            <Folder value="16" element="Layouts">
              <File value="17">
                <p>Grid Systems in React</p>
              </File>
              <File value="18">
                <p>Flexbox Best Practices</p>
              </File>
            </Folder>
            <File value="8">
              <p>How to Build a Responsive Header - header.tsx</p>
            </File>
            <File value="9">
              <p>Footer Design Tips - footer.tsx</p>
            </File>
          </Folder>

          {/* Category: Libraries */}
          <Folder value="10" element="Utility Libraries">
            <File value="11">
              <p>Useful Utility Functions - utils.ts</p>
            </File>
            <File value="19">
              <p>Date and Time Manipulation Libraries</p>
            </File>
            <File value="20">
              <p>Working with APIs: Axios Guide</p>
            </File>
            <Folder value="21" element="State Management">
              <File value="22">
                <p>Understanding Redux Toolkit</p>
              </File>
              <File value="23">
                <p>Zustand: Lightweight State Management</p>
              </File>
            </Folder>
          </Folder>

          {/* Category: Documentation */}
          <Folder value="24" element="Documentation">
            <File value="25">
              <p>React Official Documentation</p>
            </File>
            <File value="26">
              <p>Next.js Documentation</p>
            </File>
            <File value="27">
              <p>TypeScript Handbook</p>
            </File>
            <File value="28">
              <p>Radix UI Guide</p>
            </File>
          </Folder>

          {/* Category: Tutorials */}
          <Folder value="29" element="Tutorials">
            <File value="30">
              <p>Building a Blog with Next.js</p>
            </File>
            <File value="31">
              <p>Understanding TypeScript Generics</p>
            </File>
            <File value="32">
              <p>Creating Animations with Framer Motion</p>
            </File>
            <File value="33">
              <p>SEO Optimization Tips for React Apps</p>
            </File>
            <Folder value="34" element="Video Tutorials">
              <File value="35">
                <p>React Crash Course</p>
              </File>
              <File value="36">
                <p>Advanced Next.js Features</p>
              </File>
            </Folder>
          </Folder>

          {/* Category: Tools */}
          <Folder value="37" element="Tools and Resources">
            <File value="38">
              <p>CodePen - Online Code Editor</p>
            </File>
            <File value="39">
              <p>Figma - UI/UX Design Tool</p>
            </File>
            <File value="40">
              <p>GitHub Repository Management</p>
            </File>
            <File value="41">
              <p>Prettier and ESLint Configuration</p>
            </File>
          </Folder>
        </Folder>

      </Tree>
    </div>
  );
};

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
export default FileTree;
