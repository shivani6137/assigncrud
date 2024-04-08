import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from "./features/Pages/Home";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_user from './features/Pages/Add_user';


function App() {
  return (
    <div>
    <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/add_user" element={<><Add_user/></>}></Route>
        </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;