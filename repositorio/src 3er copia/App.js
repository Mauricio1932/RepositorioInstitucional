//importacion de componentes
import NavBar from './Components/NavBar';
import Portada from './Components/Portada';
import ScrollBar from './Components/ScrollBar';
import InfoContenido from './Components/InfoContenido';
import IndeceContenido from './Components/Contenido/IndeceContenido';
import Footer from './Components/Footer';
import VistaPdf from './Components/VistasPdf/VistaPdf';

//react router doom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import hojas de estilos
import './App.css';
import './Assets/css/offcanvas.css'
import { useState } from 'react';





function App() {
  //hooks de temas
  

  return (
    <>
      <Router>
        <div className="App bg-secondary">
          <NavBar />
          <Switch>
            <Route path='/album'>
              <Portada />
            </Route>
            <Route path='/tesis'>
              <div className='bg-body shadow-sm'>
                <ScrollBar />
              </div>
              <div className='container'>
                <InfoContenido />
                <VistaPdf />
              </div>
            </Route>
            <Route path='/'>
              <Portada />
              <div className='bg-body shadow-sm'>
                <ScrollBar />
              </div>
              <div className='container'>
                <InfoContenido />
                <IndeceContenido />
                
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
