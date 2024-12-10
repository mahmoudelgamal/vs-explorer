import React, { useState } from "react";
import styles from "./FileExplorer.module.css";
import { FileNode } from "../../data/fileStructure";
import { ContextMenu } from "../ContextMenu";

type FileExplorerProps = {
  data: FileNode[];
};

const FileExplorer: React.FC<FileExplorerProps> = ({ data }) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    file: FileNode;
  } | null>(null);

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) =>
      prev.includes(id)
        ? prev.filter((folderId) => folderId !== id)
        : [...prev, id]
    );
  };

  const handleFileClick = (file: FileNode) => {
    setSelectedFile(file.id);
  };

  const handleRightClick = (e: React.MouseEvent, file: FileNode) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY, file });
  };

  const handleContextMenuAction = (action: string, file: FileNode) => {
    console.log(`Action: ${action}, File: ${file.name}`);
    setContextMenu(null);
  };

  const renderFileTree = (nodes: FileNode[]) => (
    <ul className={styles.tree}>
      {nodes.map((node) => (
        <li key={node.id} className={styles.node}>
          {node.type === "folder" ? (
            <>
              <button
                className={styles.folder}
                onClick={() => toggleFolder(node.id)}
                aria-expanded={expandedFolders.includes(node.id)}
                aria-label={`${node.name}`}
              >
                {expandedFolders.includes(node.id) ? "📂" : "📁"} {node.name}
              </button>
              {expandedFolders.includes(node.id) && (
                <ul className={styles.children}>
                  {renderFileTree(node.children || [])}
                </ul>
              )}
            </>
          ) : (
            <div
              className={`${styles.file} ${
                selectedFile === node.id ? styles.selected : ""
              }`}
              onClick={() => handleFileClick(node)}
              onContextMenu={(e) => handleRightClick(e, node)}
              role="treeitem"
              aria-selected={selectedFile === node.id}
              aria-label={`${node.name}`}
            >
              📄 {node.name}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.explorer} aria-label="File Explorer">
      {renderFileTree(data)}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          file={contextMenu.file}
          onAction={handleContextMenuAction}
        />
      )}
    </nav>
  );
};

export { FileExplorer };
