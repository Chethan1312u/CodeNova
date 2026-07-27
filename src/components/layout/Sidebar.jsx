import { motion } from "framer-motion";
import sidebarMenu from "../../data/sidebarMenu";
import ThemeToggle from "../common/ThemeToggle";
import { useApp } from "../../context/AppContext";

const aiTools = ["explain", "debug", "optimize", "convert", "tests"];

export default function Sidebar() {
  const { selectedTool, setSelectedTool } = useApp();

  return (
    <aside className="w-72 bg-[var(--sidebar)] border-r border-[var(--border)] flex flex-col">

      {/* Header */}
      <div className="px-6 py-6 border-b border-[var(--border)]">

        <motion.h1
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight"
        >
          🤖 CodeNova AI
        </motion.h1>

        <p className="text-sm text-[var(--secondary)] mt-1">
          AI Coding Assistant
        </p>

      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="text-xs uppercase tracking-widest text-[var(--secondary)] mb-4 px-3">
          AI Tools
        </p>

        {sidebarMenu.map((item) => {
          const Icon = item.icon;

          const isActive = selectedTool === item.id;

          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (aiTools.includes(item.id)) {
                  setSelectedTool(item.id);
                } else {
                  alert(`${item.title} is coming soon 🚀`);
                }
              }}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                mb-2
                transition-all
                duration-200
                border-l-4

                ${
                  isActive
                    ? "border-blue-500 bg-blue-500/15 text-blue-400 font-semibold"
                    : "border-transparent hover:bg-white/5 hover:border-blue-500/40"
                }
              `}
            >
              <Icon size={18} />

              <span className="text-sm">
                {item.title}
              </span>

            </motion.button>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <div className="border-t border-[var(--border)] p-4">
        <ThemeToggle />
      </div>

    </aside>
  );
}