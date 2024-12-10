export type FileNode = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: FileNode[];
};

export const fileStructure: FileNode[] = [
  {
    id: "1",
    name: ".yarn",
    type: "folder",
    children: [
      { id: "2", name: "file1.js", type: "file" },
      { id: "3", name: "file2.js", type: "file" },
      { id: "8", name: "config.json", type: "file" },
    ],
  },
  {
    id: "25",
    name: "node_modules",
    type: "folder",
    children: [
      {
        id: "26",
        name: "react",
        type: "folder",
        children: [
          { id: "27", name: "index.js", type: "file" },
          { id: "28", name: "react-dom.js", type: "file" },
        ],
      },
      {
        id: "29",
        name: "webpack",
        type: "folder",
        children: [
          { id: "30", name: "webpack.config.js", type: "file" },
          { id: "31", name: "webpack-cli.js", type: "file" },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "src",
    type: "folder",
    children: [
      {
        id: "5",
        name: "assets",
        type: "folder",
        children: [
          { id: "6", name: "react.svg", type: "file" },
          { id: "7", name: "logo.png", type: "file" },
        ],
      },
      {
        id: "9",
        name: "components",
        type: "folder",
        children: [
          {
            id: "10",
            name: "Header.tsx",
            type: "file",
          },
          {
            id: "11",
            name: "Footer.tsx",
            type: "file",
          },
          {
            id: "12",
            name: "Sidebar.tsx",
            type: "file",
          },
        ],
      },
      {
        id: "13",
        name: "utils",
        type: "folder",
        children: [
          { id: "14", name: "helpers.ts", type: "file" },
          { id: "15", name: "api.ts", type: "file" },
        ],
      },
      {
        id: "16",
        name: "App.tsx",
        type: "file",
      },
      {
        id: "17",
        name: "index.tsx",
        type: "file",
      },
    ],
  },
  {
    id: "18",
    name: "public",
    type: "folder",
    children: [
      { id: "19", name: "index.html", type: "file" },
      { id: "20", name: "favicon.ico", type: "file" },
    ],
  },
  {
    id: "21",
    name: "tests",
    type: "folder",
    children: [
      {
        id: "22",
        name: "App.test.tsx",
        type: "file",
      },
      {
        id: "23",
        name: "Header.test.tsx",
        type: "file",
      },
      {
        id: "24",
        name: "Footer.test.tsx",
        type: "file",
      },
    ],
  },
];
