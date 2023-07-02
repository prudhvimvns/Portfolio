// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import HomePage2 from './Pages/HomePage2';
// import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='login' element={<h1>Login Page Component</h1>} />
    <Route path='/home2' element={<HomePage2 />} />
  </Routes>

  );
}

export default App;
