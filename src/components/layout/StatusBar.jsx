import { useApp } from "../../context/AppContext";

export default function StatusBar() {
  const { language, model, loading } = useApp();

  return (
    <footer className="h-8 px-4 flex items-center justify-between bg-[var(--sidebar)] border-t border-[var(--border)] text-xs text-[var(--secondary)]">
      <div className="flex items-center gap-5">
        <span>{language}</span>
        <span>{model}</span>
        <span>{loading ? "🟡 Thinking..." : "🟢 Ready"}</span>
      </div>

      <div className="flex items-center gap-5">
        <span>UTF-8</span>
        <span>Ln 1, Col 1</span>
      </div>
    </footer>
  );
}