import { Cpu, CheckCircle2 } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import { useApp } from "../../context/AppContext";
import codeTemplates from "../../data/codeTemplates";

export default function Navbar() {
  const { language, setLanguage, model, setModel, setCode } = useApp();

  return (
    <header className="h-16 bg-[var(--sidebar)] border-b border-[var(--border)] px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
          <Cpu size={22} className="text-white" />
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight">
            CodeNova AI
          </h1>

          <p className="text-xs text-[var(--secondary)]">
            AI Coding Assistant
          </p>
        </div>

      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">

        <select
          value={language}
          onChange={(e) => {
            const selected = e.target.value;
            setLanguage(selected);
            setCode(codeTemplates[selected]);
          }}
          className="h-10 min-w-[170px] rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm outline-none transition focus:border-blue-500"
        >
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>C++</option>
        </select>

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="h-10 min-w-[180px] rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm outline-none transition focus:border-blue-500"
        >
          <option>Gemini 2.5 Flash</option>
          <option>Gemini 2.5 Pro</option>
        </select>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5">

          <CheckCircle2
            size={16}
            className="text-green-400"
          />

          <span className="text-sm font-medium text-green-400">
            Connected
          </span>

        </div>

        <ThemeToggle compact />

      </div>

    </header>
  );
}