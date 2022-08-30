import React, { useState, useEffect } from 'react'

import RenderizarPdf from './RenderizarPdf';
import LeftBar from './LeftBar';

import { useParams, useLocation } from 'react-router-dom';

//recibe el requeste
function VistaPdf() {
    const [pdf, setPdf] = useState([
        { id: '1', image: 'https://http.cat/100', name: 'pdf', tipoDoc: "posgrado", documento: "tesis licenciatura" },
        { id: '2', image: 'https://http.cat/200', name: 'pdf', tipoDoc: "licenciatura", documento: "tesis licenciatura" },
        { id: '3', image: 'https://http.cat/101', name: 'pdf', tipoDoc: "posgrado", documento: "tesis licenciatura" },
        { id: '4', image: 'https://http.cat/404', name: 'pdf', tipoDoc: "posgrado", documento: "tesis licenciatura " },
        { id: '5', image: 'https://http.cat/500', name: 'pdf', tipoDoc: "maestria", documento: "tesis licenciatura " },
        { id: '6', image: 'https://http.cat/201', name: 'pdf', tipoDoc: "maestria", documento: "tesis licenciatura " },
        { id: '7', image: 'https://http.cat/202', name: 'pdf', tipoDoc: "maestria", documento: "tesis licenciatura " },
        { id: '8', image: 'https://http.cat/203', name: 'pdf', tipoDoc: "maestria", documento: "tesis licenciatura " },
        { id: '8', image: 'https://http.cat/204', name: 'pdf', tipoDoc: "posgrado", documento: "tesis licenciatura " },
        { id: '9', image: 'https://http.cat/301', name: 'pdf', tipoDoc: "licenciatura", documento: "tesis licenciatura " },
        { id: '10', image: 'https://http.cat/207', name: 'pdf', tipoDoc: "posgrado", documento: "tesis licenciatura " },
        { id: '11', image: 'https://http.cat/302', name: 'pdf', tipoDoc: "licenciatura", documento: "tesis licenciatura " },
        { id: '12', image: 'https://http.cat/303', name: 'pdf', tipoDoc: "licenciatura", documento: "tesis licenciatura " },
        { id: '13', image: 'https://http.cat/305', name: 'pdf', tipoDoc: "licenciatura", documento: "tesis licenciatura " },
        { id: '14', image: 'https://http.cat/303', name: 'pdf', tipoDoc: "licenciatura", documento: "tesis licenciatura " },
        { id: '15', image: 'https://http.cat/102', name: 'pdf', tipoDoc: "posgrado", documento: "tesis licenciatura " },
    ])

    // Authorization: 'Bearer '+localStorage.getItem('token')

    // 

    const location = useLocation();

    console.log()
    return (
        <>

            <div className="container">
                <div className="row my-2">
                    <div className="margin-start col-md-4 col-md-4 ">
                        <LeftBar />
                    </div>
                    <div className="col-md-8 back4 scroll">
                        <RenderizarPdf pdf={pdf} location={location.pathname} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaPdf