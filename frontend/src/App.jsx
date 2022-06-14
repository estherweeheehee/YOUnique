import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./models/NavBar";
import Main from "./pages/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
