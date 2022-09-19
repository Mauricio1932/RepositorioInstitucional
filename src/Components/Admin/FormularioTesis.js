import React, { useState } from 'react'
import axios from 'axios';
const url = 'http://localhost:3000/api/users/login';

// realizar el metodo put de envio de formulario y guardar el formulario

function FormularioTesis() {

    const [form, setForm] = useState({});
    const [archivo, setArchivo] = useState(null)

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

    const subirArchivo = e => {
        setArchivo(e.target.files[0]);   
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
                                    <div className="mb-3">
                                        <label htmlFor="formFileSm" className="form-label btn btn-primary">Selecciona archivo</label>
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