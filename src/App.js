import { Route, Routes } from "react-router";
import "./App.scss";
import AboutUs from "./components/aboutUs/aboutUs";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/aboutUs"} el={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
