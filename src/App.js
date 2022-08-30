//importacion de componentes
import NavBar from './Components/NavBar';
import Portada from './Components/Portada';
import ScrollBar from './Components/ScrollBar';
import InfoContenido from './Components/InfoContenido';
import IndeceContenido from './Components/Contenido/IndeceContenido';
import Footer from './Components/Footer';
import VistaPdf from './Components/VistasPdf/VistaPdf';
import VisorPdf from './Components/VistasPdf/VisorPdf';
import data from './Components/data/data'
import Login from './Components/Admin/Login'
import Administrador from './Components/Admin/Administrador';
import FormularioTesis from './Components/Admin/FormularioTesis'
import Columna from './Components/Contenido/Columna';

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
