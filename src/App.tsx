import React, { useState } from "react";
import styles from "./App.module.css";
import { FileExplorer } from "./components/FileExplorer";
import { fileStructure } from "./data/fileStructure";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className={styles.app}>
      <FileExplorer data={fileStructure} />
      <button onClick={toggleTheme} className={styles.themeButton}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
