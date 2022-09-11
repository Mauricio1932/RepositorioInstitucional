import React, { useState } from 'react'
import axios from 'axios';
const url = 'http://localhost:3000/api/users/login';

// realizar el metodo put de envio de formulario y guardar el formulario



function FormularioTesis() {

    const [form, setForm] = useState({});
    const [archivo, setArchivo] = useState(null)

    const fetchData = async () => {
        var axios = require('axios');
        let response = await fetch(`http://localhost:3000/api/contenido/create_contenido`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "titulo": form.tesis,
                "autor": form.primerAutor,
                "fecha": form.fecha,
                "segundoAutor": form.segundoAutor,
                "enlaceDocumento": archivo,
            }),
        })
        
        if (response.status === 200) {
            // setUser(data)
            alert("Tesis agregado");
            //setRedirect(true);
            //localStorage.setItem('token', data.data.token);
        } else {
            //alert('algo salió mal')
            // setError("Usuario o contraseña, icorrectos")
            // setTimeout(() => {
            //     setError("")
            // }, 5000);
        }

    }

    const fileType=['application/pdf']
    const subirArchivo = e => {
        //formData = new formData();
        const file = e.target.files[0];

        if(file){
            if(file && fileType.includes(file.type)){
                let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () =>{
                        setArchivo(e.target.value)
                    }
            }else{
                setArchivo(null)
            }
        }else{
            console.log("select you file")
        }
        
    }

    const handleChange = e => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        });
    };




    return (
        <>
            <div className="container size-paginas">
                <div className="col">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="fst-italic">Tesis UPChiapas</h4>
                        <ul className="list-group list-group-flush anyclassName">
                            <li className="list-group-item d-inline justify-content-between align-items-start">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="InputdirectorTesis" className="form-label">Director de Tesis</label>
                                        <input type="text" className="form-control" name='nombreDirector' onChange={handleChange} placeholder="Nombre del Director de Tesis" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Codirector</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" name='nombreCodirector' onChange={handleChange} placeholder="Nombre Codirector" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Título Tesis</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" name='tesis' onChange={handleChange} placeholder="Tesis" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Autor</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" name='primerAutor' onChange={handleChange} placeholder="Primer Autor" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Autor</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" name='segundoAutor' onChange={handleChange} placeholder="Segundo Autor" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Fecha de Publicación</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" name='fecha' onChange={handleChange} placeholder="ex: 14/02/2000" />
                                    </div>
                                </form>
                                <div>
                                    <div class="mb-3">
                                        <label for="formFileSm" className="form-label btn btn-primary">Selecciona archivo</label>
                                        <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={subirArchivo} />
                                    </div>
                                    <div className="justify-content-start my-2">
                                        <button type="button" className="btn btn-primary" onClick={() => fetchData()}>Publicar Tesis</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormularioTesis;