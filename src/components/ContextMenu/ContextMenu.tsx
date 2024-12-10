import React from "react";
import styles from "./ContextMenu.module.css";
import { FileNode } from "../../data/fileStructure";

type ContextMenuProps = {
  x: number;
  y: number;
  file: FileNode;
  onAction: (action: string, file: FileNode) => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, file, onAction }) => {
  return (
    <div className={styles.contextMenu} style={{ top: y, left: x }}>
      <div onClick={() => onAction("copy", file)}>Copy</div>
      <div onClick={() => onAction("delete", file)}>Delete</div>
      <div onClick={() => onAction("rename", file)}>Rename</div>
    </div>
  );
};

export { ContextMenu };
