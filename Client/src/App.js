import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route element={<SignUp />} path='/signup'></Route>
            <Route element={<Login />} path='login'></Route>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
