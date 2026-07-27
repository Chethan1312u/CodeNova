import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Copy,
  FileText,
  Trash2,
  Sparkles,
  Check,
} from "lucide-react";

import { useApp } from "../../context/AppContext";

export default function OutputPanel() {
  const {
    response,
    loading,
    selectedTool,
    setResponse,
  } = useApp();

  const [copied, setCopied] = useState(false);

  const toolName =
    selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1);

  const copyResponse = async () => {
    if (!response) return;

    await navigator.clipboard.writeText(response);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([response], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "codenova-response.md";

    a.click();

    URL.revokeObjectURL(url);
  };

  const clearResponse = () => {
    setResponse("");
  };

  return (
    <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-xl">

      {/* Header */}
      <div className="h-14 px-5 border-b border-[var(--border)] flex items-center justify-between">

        <div>
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <Sparkles size={18} className="text-blue-500" />
            CodeNova AI
          </h2>

          <p className="text-xs text-[var(--secondary)] font-medium">
            {toolName} Code
          </p>
        </div>

        <span
          className={`text-xs font-semibold ${
            loading ? "text-yellow-400" : "text-green-400"
          }`}
        >
          {loading ? "Thinking..." : "Ready"}
        </span>

      </div>

      {/* Toolbar */}
      <div className="px-4 py-3 border-b border-[var(--border)] flex items-center gap-2">

        <button
          onClick={copyResponse}
          className="h-9 px-3 rounded-lg flex items-center gap-2 hover:bg-[var(--sidebar)] transition-all"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>

        <button
          onClick={downloadMarkdown}
          className="h-9 px-3 rounded-lg flex items-center gap-2 hover:bg-[var(--sidebar)] transition-all"
        >
          <FileText size={16} />
          Markdown
        </button>

        <button
          onClick={clearResponse}
          className="ml-auto h-9 px-3 rounded-lg flex items-center gap-2 text-red-400 hover:bg-red-500/10 transition-all"
        >
          <Trash2 size={16} />
          Clear
        </button>

      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">

        {loading ? (

          <div className="flex flex-col items-center justify-center h-full gap-5">

            <Sparkles
              size={48}
              className="text-blue-500 animate-pulse"
            />

            <h2 className="text-lg font-semibold">
              Analysing your code...
            </h2>

            <div className="w-56 h-2 rounded-full bg-[var(--sidebar)] overflow-hidden">
              <div className="h-full w-1/2 bg-blue-500 rounded-full animate-pulse" />
            </div>

            <p className="text-sm text-[var(--secondary)]">
              Generating the best response...
            </p>

          </div>

        ) : response ? (

          <div
            className="
              prose
              dark:prose-invert
              max-w-none
              prose-headings:mb-4
              prose-p:leading-7
              prose-p:mb-4
              prose-ul:my-4
              prose-li:my-1
              prose-code:before:hidden
              prose-code:after:hidden
            "
          >
            <ReactMarkdown
              components={{
                code({ inline, className, children }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        borderRadius: "12px",
                        padding: "18px",
                        marginTop: "16px",
                        marginBottom: "16px",
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-100">
                      {children}
                    </code>
                  );
                },
              }}
            >
              {response}
            </ReactMarkdown>
          </div>

        ) : (

          <div className="h-full flex flex-col items-center justify-center text-center text-[var(--secondary)]">

            <Sparkles
              size={50}
              className="mb-5 text-blue-500 opacity-70"
            />

            <h2 className="text-xl font-semibold mb-2">
              Ready to Assist
            </h2>

            <p className="max-w-sm leading-7">
              Select an AI tool from the sidebar and click
              <strong> Run AI</strong> to generate a response.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}