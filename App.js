import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header   from'./components/Header';
import Course from './components/Course';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='course' element= {</Course>} />
      </Routes>
    </>
  )
}

export default App
