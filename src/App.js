import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="about" element={<About />} />
      <Route path='login' element={<Login></Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;
