//importacion de componentes
import Login from './Components/Admin/Login'



//rutas
import PublicRoutes from './Components/Routes/PublicRoutes'
import PrivateRoutes from './Components/Routes/PrivateRoutes';

//react router doom
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

//import hojas de estilos
import './App.css';
import './Assets/css/offcanvas.css'
import { useState, useEffect } from 'react';

function App() {

  


  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='admin/*' element={<PrivateRoutes />} />
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<PublicRoutes />} />
        <Route path='*' element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
