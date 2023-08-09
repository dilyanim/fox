import './App.scss';
import Header from './components/Header'
import Main from './components/Main';
import Blocks from './components/Blocks';
import Course from './components/Course';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Blocks/>
      <Course/>
       
    </div>
  );
}

export default App;
