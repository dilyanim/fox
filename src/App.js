import './App.scss';
import Header from './components/Header'
import Main from './components/Main';
import Blocks from './components/Blocks';
import Course from './components/Course';
import { Route, Routes } from "react-router";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Blocks/>
      <Course/>
      <Header />
      <Routes>
        <Route path={"/aboutUs"} el={<AboutUs/>}/>
      </Routes>
  );
}

export default App;
