import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.components";
import Home from "./pages/home.pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
