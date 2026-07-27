import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CodeEditor from "../editor/CodeEditor";
import OutputPanel from "../output/OutputPanel";
import ActionButtons from "../buttons/ActionButtons";
import StatusBar from "./StatusBar";

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col bg-[var(--bg)]">
      {/* Navbar */}
      <Navbar />

      {/* Main Workspace */}
      <div className="flex-1 overflow-hidden">
        <Group orientation="horizontal">
          {/* Sidebar */}
          <Panel defaultSize="18%" minSize="15%" maxSize="28%">
            <Sidebar />
          </Panel>

          <Separator className="w-1 bg-[var(--border)] hover:bg-blue-500 transition-colors cursor-col-resize" />

          {/* Editor + Output */}
          <Panel defaultSize="82%">
            <Group orientation="horizontal">
              {/* Editor */}
              <Panel defaultSize="60%" minSize="35%">
                <CodeEditor />
              </Panel>

              <Separator className="w-1 bg-[var(--border)] hover:bg-blue-500 transition-colors cursor-col-resize" />

              {/* AI Output */}
              <Panel defaultSize="40%" minSize="25%">
                <OutputPanel />
              </Panel>
            </Group>
          </Panel>
        </Group>
      </div>

      {/* Bottom Toolbar */}
      <div className="border-t border-[var(--border)]">
    <ActionButtons />
    <StatusBar />
</div>
    </div>
  );
}