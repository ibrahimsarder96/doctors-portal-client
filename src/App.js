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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div  className='px-12'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="about" element={<About />} />
      <Route path="appointment" element={<RequireAuth>
        <Appointment />
      </RequireAuth>} >
      </Route>
      <Route path="dashboard" element={<RequireAuth>
        <Dashboard />
      </RequireAuth>} >
        <Route index element={<MyAppointment></MyAppointment>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        <Route path='history' element={<MyHistory></MyHistory>}></Route>
        <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      </Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<SignUP />}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
