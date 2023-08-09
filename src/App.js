import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Blocks from "./components/Blocks";
import Course from "./components/Course";
import { Route, Routes } from "react-router";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
