import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta';
//import {Document,Page} from 'react-pdf/dist/esm/entry.webpack'

function RenderizarPdf({ pdf, setPdf, location }) {

    const [pdfEncontrado, setPdfEncontrado] = useState([]);
    const [presentar, setPresentar] = useState(true);
    const pdfRequerido = (pdf) => {
        let text = location;
        const myArray = text.split("/");

        console.log(myArray.length)
        if(myArray.length === 2 || myArray[2] === ""){
            setPresentar(true);
        }else{
            const removePdf = pdf.filter((pdf) => pdf.tipoDoc === myArray[2])
            setPdfEncontrado(removePdf);
            setPresentar(false);
        }
    }

    
    

    useEffect(() => {
        pdfRequerido(pdf);
    }, []);

    return (
        <>
            <div className="container my-3">
                <div className="row row-cols-1 row-cols-md-3 g-4 row">
                    {presentar === true ?
                        <Tarjeta pdfData={pdf}/> :
                        <Tarjeta pdfData={pdfEncontrado}></Tarjeta>
                    }
                </div>
            </div>
        </>
    )
}

export default RenderizarPdf