import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta';
import { useParams } from 'react-router-dom'

function RenderizarPdf({ pdf, location,setArchivo }) {

    const [pdfEncontrado, setPdfEncontrado] = useState([]);
    const [presentar, setPresentar] = useState(true);

    // const pdfRequerido = (pdf) => {
    //     let text = location;
    //     const myArray = text.split("/");

    //     if(myArray.length === 2 || myArray[2] === ""){
    //         setPresentar(true);
    //     }else{
    //         const removePdf = pdf.filter((pdf) => pdf.tipoDoc === myArray[2])
    //         setPdfEncontrado(removePdf);
    //         setPresentar(false);
    //     }
    // }

    // useEffect(() => {
    //     pdfRequerido(pdf);
    // }, []);

    // console.log(pdf[0])

    return (
        <>
            <div className="container my-3">
                <div className="row row-cols-1 row-cols-md-3 g-4 row ">
                    {presentar === true ?
                        pdf.map((archivo, index) => (   
                            <Tarjeta key={index} pdfData={archivo} setArchivo={setArchivo}/>
                        ))
                        :
                        <Tarjeta pdfData={pdfEncontrado}></Tarjeta>
                    }
                </div>
            </div>
        </>
    )
}

export default RenderizarPdf