import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuizPage from "./pages/QuizPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QuizPage />
    </>
  );
}

export default App;
