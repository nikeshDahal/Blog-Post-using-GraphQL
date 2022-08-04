
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import CreateUser from './components/User/CreateUser'
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
    <Navbar/>
    {/*<Sidebar/>*/}
    <Routes>
    <Route path="/User" element={<CreateUser/>} />
    </Routes>

    </div>
  );

}

export default App;
