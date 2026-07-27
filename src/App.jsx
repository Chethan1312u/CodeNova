import { useState } from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onFinish={() => setLoading(false)} />
  ) : (
    <Home />
  );
}

export default App;