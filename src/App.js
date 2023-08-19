import "./App.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import AboutUs from "./components/aboutUs/aboutUs";
import Main from "./components/Main/index";
import Footer from "./components/Footer/Footer";
import Reg from "./components/reg/Reg";
import ZapylParol from "./components/reg/ZabylParol";
import Register from "./components/reg/register/Register";
import AboutCourse from './components/AboutCourse'
import Marketing1 from './components/Marceting1'




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/zapylParol" element={<ZapylParol />} />
        <Route path="/aboutCourse" element={<AboutCourse/>} />
         <Route path="/marketing1" element={<Marketing1/>}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
