import React, { useState, useEffect } from 'react'

import RenderizarPdf from './RenderizarPdf';
import LeftBar from './LeftBar';

import { useParams, useLocation } from 'react-router-dom';

//recibe el requeste
function VistaPdf({setArchivo}) {

    const [pdf, setPdf] = useState([])

    const getTesis = async () => {
        let response = await fetch('http://localhost:3000/api/contenido/view', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //Authorization: 'Bearer '+localStorage.getItem('token')
            },

        })

        const data = await response.json();

        setPdf(data)

    }
    
    useEffect(() => {
        getTesis();
    },[])

    const location = useLocation();
    
    // console.log("vista",pdf)
    // console.log("vista",pdf.data)
    return (
        <>

            <div className="container">
                <div className="row my-2">
                    <div className="margin-start col-md-4 col-md-4 ">
                        <LeftBar />
                    </div>
                    <div className="col-md-8 back4 scroll">
                        <RenderizarPdf pdf={pdf} location={location.pathname} setArchivo={setArchivo}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaPdf