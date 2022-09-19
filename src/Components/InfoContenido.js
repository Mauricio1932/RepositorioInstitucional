import React from 'react'
import imglogoUpChiapas from '.././Assets/images/logoUPChiapas3.png';


let date = new Date();
//let  horas = date.getHours();
//let  minutos = date.getMinutes();
//let  segundos = date.getSeconds();

let year = date.getFullYear()

function InfoContenido() {


    return (
        <>
        {/*  */}
            <div className="align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                <div className="d-flex align-items-center">
                    <img className="me-3" src={imglogoUpChiapas} alt="" width="50" height="50" />
                    <div className="lh-1 bg-purple">
                        <h1 className="h6 mb-0 text-white lh-1">Índices de Contenido</h1>
                        <small>Actualizado al {year}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoContenido;