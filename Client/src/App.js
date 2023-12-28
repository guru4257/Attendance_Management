import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';
import SideNavbar from './Components/SideNavbar';
import Dashboard from './Pages/Dashboard';
import StudentAttendanceSummary from './Pages/StudentAttendanceSummary';
import AddStudents from './Pages/AddStudents';
import AddClass from './Pages/AddClass';
import AddFaculty from './Pages/AddFaculty';
import AssignFacultyToClass from './Pages/AssignFacultyToClass';
import ChangePassword from './Pages/ChangePassword';



function App() {

  
  return (
    <div className="App">
      {/* <SideNavbar /> */}
      <Router>
        <Routes>
            <Route element={<Login />} path='/'></Route>
            <Route element={<Dashboard />} path='/dashboard'></Route>
            <Route element={<StudentAttendanceSummary />} path="student/dashboard"></Route>
            <Route element={<AddStudents />} path='/admin/addStudent'></Route>
            <Route element={<AddClass />} path='/admin/addClass'></Route>
            <Route element={<AddFaculty />} path='/admin/addFaculty'></Route>
            <Route element={<AssignFacultyToClass />} path='/admin/assignFaculty'></Route>
            <Route element={<ChangePassword />} path='/user/changePassword'></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
