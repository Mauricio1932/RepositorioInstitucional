
//importacion de componentes
import NavBar from './Components/NavBar';
import ScrollBar from './Components/ScrollBar';
import InfoContenido from './Components/InfoContenido';
import IndeceContenido from './Components/IndeceContenido';
import Footer from './Components/Footer';
//import hojas de estilos
import './App.css';
import './Assets/css/offcanvas.css'

function App() {
  return (
    <>
      <div className="App">
      <NavBar />
        <div className='bg-body shadow-sm'>
          <ScrollBar />
        </div>
        <div className='container'>
          <InfoContenido />
          <IndeceContenido />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
