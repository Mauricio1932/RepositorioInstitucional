import React, { useEffect } from 'react'
import NavBar from '../NavBar'
import Administrador from '../Admin/Administrador'
import Footer from '../Footer'
import Columna from '../Contenido/Columna'
import FormularioTesis from '../Admin/FormularioTesis'
import data from '../data/data'
import InfoContenido from '../InfoContenido'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'


function PrivateRoutes() {
    const { contenidoRepo } = data;


    const navigate = useNavigate();

    const getInfo = async () => {
        let response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
                //'Access-Control-Allow-Origin': '*'
            },
        })

        let data = await response.json()

        console.log(data);
    
        
        if (response.status === 401) {
            // setUser(data)
            
            localStorage.clear()
        } else {
            //alert('algo salió mal')
            // setError("Usuario o contraseña, icorrectos")
            // setTimeout(() => {
            //     setError("")
            // }, 5000);
        }

    }




    useEffect(() => {
        getInfo();
    }, [])

    return (

        <>
            {localStorage.getItem('token') ?
                <Routes>
                    <Route path="/*"
                        element={
                            <div className='App'>
                                <NavBar />
                                <br />
                                <div className='size-pagina my-3'>
                                    <Administrador />
                                </div>
                                <br />
                                <Footer />
                            </div>}>

                        <Route path='contenido' element={<div className="size-pagina container">
                            <br /><br />
                            <InfoContenido />
                            {
                                contenidoRepo.map((content, index) => (
                                    <Columna key={index} titleColumn={"contenido"} contenido={content.tipoContenido} />
                                ))
                            }
                        </div>} />

                        <Route path='formulario/*'>
                            <Route path='tesis/:id' element={<FormularioTesis />} />
                        </Route>
                    </Route>
                </Routes>
                : <Navigate to='../login' />
            }
        </>

    )
}

export default PrivateRoutes