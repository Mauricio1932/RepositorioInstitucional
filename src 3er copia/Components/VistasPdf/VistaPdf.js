import React, { useState } from 'react'

import RenderizarPdf from './RenderizarPdf';
import LeftBar from './LeftBar';

function VistaPdf() {
    const [pdf, setPdf] = useState([
        { id: '1', image: 'https://http.cat/100', name: 'pdf' },
        { id: '2', image: 'https://http.cat/100', name: 'pdf' },
        { id: '3', image: 'https://http.cat/100', name: 'pdf' },
        { id: '4', image: 'https://http.cat/100', name: 'pdf' },
        { id: '5', image: 'https://http.cat/100', name: 'pdf' },
        { id: '6', image: 'https://http.cat/100', name: 'pdf' },
        { id: '7', image: 'https://http.cat/100', name: 'pdf' },
        { id: '8', image: 'https://http.cat/100', name: 'pdf' },
        { id: '8', image: 'https://http.cat/100', name: 'pdf' },
        { id: '9', image: 'https://http.cat/100', name: 'pdf' },
        { id: '10', image: 'https://http.cat/100', name: 'pdf' },
        { id: '11', image: 'https://http.cat/100', name: 'pdf' },
        { id: '12', image: 'https://http.cat/100', name: 'pdf' },
        { id: '13', image: 'https://http.cat/100', name: 'pdf' },
        { id: '14', image: 'https://http.cat/100', name: 'pdf' },
        { id: '15', image: 'https://http.cat/100', name: 'pdf' },


    ])


    return (
        <>
            <div className="container">
                <div className="row my-2">
                    <div className="margin-start col-md-4 col-md-4 ">
                        <LeftBar/>
                    </div>
                    <div className="col-md-8 back4 scroll">
                        <RenderizarPdf pdf={pdf}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaPdf