import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Sheard/Navbar/Header";
import Footer from "./Sheard/Navbar/Footer";

function App() {
  return (
    <div className="App px-12">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
