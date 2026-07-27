import {
  MessageSquareText,
  Bug,
  Sparkles,
  ArrowRightLeft,
  FlaskConical,
  History,
  Settings,
} from "lucide-react";

const sidebarMenu = [
  {
    id: "explain",
    title: "Explain Code",
    icon: MessageSquareText,
  },
  {
    id: "debug",
    title: "Debug Code",
    icon: Bug,
  },
  {
    id: "optimize",
    title: "Optimize Code",
    icon: Sparkles,
  },
  {
    id: "convert",
    title: "Convert Code",
    icon: ArrowRightLeft,
  },
  {
    id: "tests",
    title: "Generate Tests",
    icon: FlaskConical,
  },
  {
    id: "history",
    title: "History",
    icon: History,
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
  },
];

export default sidebarMenu;