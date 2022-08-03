import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, Navigate } from "react-router-dom";
import CreateUser from './components/User/CreateUser'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/Create-User" element={<CreateUser/>} />
    </Routes>

    </div>
  );

}

export default App;
