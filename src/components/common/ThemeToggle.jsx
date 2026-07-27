import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`
        group
        relative
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--card)]
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-lg
        hover:shadow-blue-500/10
        ${
          compact
            ? "w-10 h-10 rounded-xl flex items-center justify-center"
            : "w-full h-11 rounded-xl px-4 flex items-center justify-between"
        }
      `}
    >
      {compact ? (
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? (
            <Moon size={18} className="text-blue-400" />
          ) : (
            <Sun size={18} className="text-amber-500" />
          )}
        </motion.div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {isDark ? (
                <Moon size={18} className="text-blue-400" />
              ) : (
                <Sun size={18} className="text-amber-500" />
              )}
            </motion.div>

            <span className="text-sm font-medium">
              {isDark ? "Dark Mode" : "Light Mode"}
            </span>
          </div>

          <div
            className={`
              w-10 h-5 rounded-full transition-all duration-300
              ${isDark ? "bg-blue-600" : "bg-yellow-400"}
              relative
            `}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className={`
                absolute
                top-0.5
                w-4
                h-4
                rounded-full
                bg-white
                ${
                  isDark
                    ? "left-[20px]"
                    : "left-[2px]"
                }
              `}
            />
          </div>
        </>
      )}
    </button>
  );
}