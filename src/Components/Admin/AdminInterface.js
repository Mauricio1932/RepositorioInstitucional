import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function AdminInterface({ pdfData, setArchivo }) {

    const navigate = useNavigate();

    const eliminarPDF = async (pdfData) => {
        console.log(pdfData.Id)
        axios.delete('http://localhost:3000/api/contenido/delete_contenido', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                Id: pdfData.Id
            }
        });
    }

    return (
        <>
            <div class="col">
                <div class="card h-100 border border-secondary border-2b">
                    <img src="https://universidadesdemexico.mx/logos/original/logo-universidad-politecnica-de-chiapas.webp" class="my-2 mx-auto img-fluid rounded border border-secondary border-2" width="90%" height="240px" />
                    <div className='etiqueta rounded-end'>{"Tesis licenciatura"}</div>
                    <div class="card-body espacio fs-6">
                        <h5 class="card-title">{pdfData.titulo}</h5>
                        <p class="card-text text-capitalize">{pdfData.autor}</p>
                        <p class="card-text text-capitalize">{pdfData.fecha}</p>
                    </div>
                    <div class="card-footer">
                        <div className='d-flex justify-content-center icons'>
                            <a><i onClick={()=>eliminarPDF(pdfData)} className="fa-solid fa-book-open"></i></a>
                            <a ><i className="fa-solid fa-share-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminInterface;