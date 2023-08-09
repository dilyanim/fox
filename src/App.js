import "./App.scss";
import Header from "./components/Header";
import Course from "./components/Course";
import { Route, Routes } from "react-router";
import AboutUs from "./components/aboutUs/aboutUs";
import Main from "./components/Main/index";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
