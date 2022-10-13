import React, {useEffect, useState} from 'react'
import data from '../data/data'
import Columna from "../Contenido/Columna";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import AdminInterface from "./AdminInterface";

// realizar el metodo put de envio de formulario y guardar el formulario


function FormularioTesis() {
    const { contenidoRepo } = data;
    const [form, setForm] = useState({});
    const [archivo, setArchivo] = useState()
    const [document,setDocument] = useState([]);
    const [pdfEncontrado, setPdfEncontrado] = useState([]);
    const [presentar, setPresentar] = useState(true);


    const fetchData = () => {
		const formData = new FormData();
        
		formData.append( "titulo", form.tesis);
		formData.append( "autor", form.primerAutor);
		formData.append( "fecha", form.fecha);
		formData.append( "segundoAutor", form.segundoAutor);

		formData.append('enlaceDocumento', archivo);

		fetch(
			'http://localhost:3000/api/contenido/create_contenido',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    const getTesis = async () => {
        let response = await fetch('http://localhost:3000/api/contenido/view', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //Authorization: 'Bearer '+localStorage.getItem('token')
            },

        })

        const data = await response.json();

        setDocument(data)
    }

    const deleteDoc = () => {
        fetch(
            'http://localhost:3000/api/contenido/delete_contenido',
            {
                method: 'DELETE'
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const subirArchivo = e => {
        setArchivo(e.target.files[0]);   
    }

    const handleChange = e => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        getTesis();
    }, [])

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
                                    <div className="mb-3">
                                        <label htmlFor="formFileSm" className="form-label btn btn-primary">Selecciona archivo</label>
                                        <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={subirArchivo} />
                                    </div>
                                    <div className="justify-content-start my-2">
                                        <button type="button" className="btn btn-primary" onClick={() => fetchData()}>Publicar Tesis</button>
                                    </div>
                                </div>
                                <br/>

                            </li>
                            <li>
                                <div className="container my-3">
                                    <div className="row row-cols-1 row-cols-md-3 g-4 row ">
                                        {presentar === true ?
                                            document.map((archivo, index) => (
                                                <AdminInterface key={index} pdfData={archivo} setArchivo={setArchivo}/>
                                            ))
                                            :
                                            <AdminInterface pdfData={pdfEncontrado}></AdminInterface>
                                        }
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