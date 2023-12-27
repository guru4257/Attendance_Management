import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';
import SideNavbar from './Components/SideNavbar';
import Dashboard from './Pages/Dashboard';



function App() {

  
  return (
    <div className="App">
      {/* <SideNavbar /> */}
      <Router>
        <Routes>
            <Route element={<Login />} path='/login'></Route>
            <Route element={<Dashboard />} path='/'></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
