import { aiRequest } from "../../services/aiService";
import { useApp } from "../../context/AppContext";

export default function ActionButtons() {
  const {
    selectedTool,
    language,
    code,
    setResponse,
    loading,
    setLoading,
  } = useApp();

  const handleAI = async () => {
    if (!code.trim()) {
      setResponse(`⚠️ Please write some code before clicking ${selectedTool}.`);
      return;
    }

    try {
      setLoading(true);

      // Clear previous response
      setResponse("");

      const data = await aiRequest(selectedTool, language, code);

      setResponse(data.response);
    } catch (error) {
      console.error(error);

      setResponse(
        "❌ Failed to connect to the AI. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Format button text nicely
  const buttonLabel = selectedTool
    ? selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)
    : "Explain";

  return (
    <footer className="h-24 border-t border-[var(--border)] bg-[var(--sidebar)] flex items-center justify-center">
      <button
        onClick={handleAI}
        disabled={loading}
        className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "🤖 Thinking..." : `${buttonLabel} Code`}
      </button>
    </footer>
  );
}