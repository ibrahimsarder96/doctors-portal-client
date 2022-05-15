import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUP from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div  className='px-12'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="about" element={<About />} />
      <Route path="appointment" element={<RequireAuth>
        <Appointment />
      </RequireAuth>} />
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<SignUP />}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
