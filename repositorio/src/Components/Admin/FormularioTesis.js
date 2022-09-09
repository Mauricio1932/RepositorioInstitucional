import React, { useState } from 'react'
import axios from 'axios';
const url = 'http://localhost:3000/api/users/login';

// realizar el metodo put de envio de formulario y guardar el formulario



function FormularioTesis() {

    const [form, setForm] = useState({});
    const [archivo, setArchivo] = useState(null)

    const fetchData = async () => {
        var axios = require('axios');

        var config = {
            method: 'post',
            url: 'http://localhost:3000/api/contenido/create_contenido',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const subirArchivo = e => {
        // const file = e.target.files[0];
        console.log(e)
        setArchivo(e)
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