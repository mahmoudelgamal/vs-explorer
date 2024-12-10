import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { FileExplorer } from "./FileExplorer";
import { FileNode } from "../../data/fileStructure";

const mockData: FileNode[] = [
  {
    id: "1",
    name: "Folder 1",
    type: "folder",
    children: [
      { id: "2", name: "File 1", type: "file" },
      { id: "3", name: "Folder 2", type: "folder", children: [] },
    ],
  },
  { id: "4", name: "File 2", type: "file" },
];

describe("FileExplorer", () => {
  it("renders file tree structure correctly", async () => {
    render(<FileExplorer data={mockData} />);

    await screen.findByRole("treeitem");
    expect(screen.getByRole("treeitem", { name: "File 2" })).toHaveTextContent(
      "File 2"
    );
    expect(screen.getByRole("button", { name: "Folder 1" })).toHaveTextContent(
      "Folder 1"
    );
  });

  it("expands and collapses folders", () => {
    render(<FileExplorer data={mockData} />);

    const folder1Button = screen.getByRole("button", {
      name: "Folder 1",
    });
    fireEvent.click(folder1Button);

    expect(
      screen.getByRole("treeitem", { name: "File 1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Folder 2" })
    ).toBeInTheDocument();

    fireEvent.click(folder1Button);

    expect(
      screen.queryByRole("treeitem", { name: "File 1" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Folder 2" })
    ).not.toBeInTheDocument();
  });

  it("selects a file when clicked", () => {
    render(<FileExplorer data={mockData} />);

    const file2 = screen.getByRole("treeitem", { name: "File 2" });
    fireEvent.click(file2);

    expect(file2).toHaveAttribute("aria-selected", "true");
  });
});
