import React ,{useState} from 'react'
import NavBar from '../NavBar';
import Portada from '../Portada';
import ScrollBar from '../ScrollBar';
import InfoContenido from '../InfoContenido';
import Footer from '../Footer';
import VistaPdf from '../VistasPdf/VistaPdf';
import IndeceContenido from '../Contenido/IndeceContenido';
import data from '../data/data';
import VisorPdf from '../VistasPdf/VisorPdf';

//desde aqui has la peticion del pdf y crea um hook pdf

import { Routes, Route } from 'react-router-dom'
function PublicRoutes() {

    const [archivo, setArchivo] = useState();
    
    //arreglo de las columnas
    const { contenido} = data;
    return (
        <Routes>

//ruta de visor del pdf
            <Route path='/pdf' element={<div className='App'>
                <NavBar />
                <br />
                <div className='size-paginas'>
                    <VisorPdf archivo={archivo}/>
                </div>
                <br />
                <Footer />
            </div>}
            />

            <Route path='tesis/*' element={
                <div className='App'>
                    <NavBar />
                    <div className='bg-body shadow-sm size-paginas'>
                        <ScrollBar />
                    </div>
                    <div className='container'>
                        <InfoContenido />
                        <VistaPdf setArchivo={setArchivo}/>
                    </div>
                    <Footer />
                </div>}
            />

            <Route path='/*' element={<div className='App'>
                <NavBar />
                <Portada />
                <div className='bg-body shadow-sm '>
                    <ScrollBar />
                </div>
                <div className='container'>
                    <InfoContenido />
                    <IndeceContenido column={contenido} />
                </div>
                <Footer />
            </div>}
            />
        </Routes>

    )
}

export default PublicRoutes