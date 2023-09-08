import logo from './logo.svg';
import './App.css';
import './components/Coursecard';
import './components/Header';
import ImgMediaCard from './components/Coursecard';
import Header from './components/Header';
import Coursecard from './components/Coursecard';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Header/>
      <Coursecard/>
      <Feedback/>
      
    </div>
  );
}

export default App;
