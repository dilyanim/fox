import "./App.scss";
import Header from "./components/Header";
import Course from "./components/Course";
import { Route, Routes } from "react-router";
import AboutUs from "./components/aboutUs/aboutUs";
import Main from './components/Main/index'
import AboutCourse from './components/AboutCourse'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/aboutCourse" element={<AboutCourse/>} />
      </Routes>
      </div>
  );
}

export default App;
