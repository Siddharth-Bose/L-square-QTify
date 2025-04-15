import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
