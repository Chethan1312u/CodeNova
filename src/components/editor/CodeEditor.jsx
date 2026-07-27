import Editor from "@monaco-editor/react";
import { FileCode2, Circle } from "lucide-react";

import { useApp } from "../../context/AppContext";
import { useTheme } from "../../context/ThemeContext";
import languageMap from "../../utils/languageMap";

export default function CodeEditor() {
  const { code, setCode, language } = useApp();
  const { theme } = useTheme();

  return (
    <div className="h-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-xl flex flex-col">

      {/* Editor Header */}
      <div className="h-12 bg-[var(--sidebar)] border-b border-[var(--border)] flex items-center justify-between px-4">

        <div className="flex items-center gap-3">

          <FileCode2
            size={18}
            className="text-blue-400"
          />

          <span className="text-sm font-medium">
            main.{languageMap[language]}
          </span>

        </div>

        <div className="flex items-center gap-2 text-xs text-[var(--secondary)]">

          <Circle
            size={8}
            fill="#22c55e"
            className="text-green-500"
          />

          Ready

        </div>

      </div>

      {/* Monaco */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={languageMap[language]}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme={theme === "dark" ? "vs-dark" : "light"}
          options={{
            fontSize: 15,
            fontLigatures: true,

            minimap: {
              enabled: false,
            },

            automaticLayout: true,

            scrollBeyondLastLine: false,

            roundedSelection: true,

            smoothScrolling: true,

            cursorBlinking: "smooth",

            wordWrap: "on",

            renderLineHighlight: "all",

            padding: {
              top: 18,
              bottom: 18,
            },
          }}
        />
      </div>

    </div>
  );
}