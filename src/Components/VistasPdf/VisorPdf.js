import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import PDFViewer from 'pdf-viewer-reactjs'
import pdf from '../../Assets/pdf/tarea.pdf'

function VisorPdf({archivo}) {
    console.log(archivo)
    const accessToken = '12f5ddf1b98ff23aa937bfee5f202925d8197ab1';
    const [imagens, setimages] = useState(pdf);

   

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet)
    }
    // function changePageBack() {
    //     changePage(-1)
    // }
    // function changePageNext() {
    //     changePage(+1)
    // }

    return (
        <>
            

            <div class="d-flex justify-content-center size-pagina">
                <div class=" d-flex justify-content-center my-2" >
                    <div class="box-visor">
                        <Document file={`http://localhost:3000/api/contenido/view_pdf?pdf=${archivo}`} onLoadSuccess={onDocumentLoadSuccess} className='' >
                            {Array.from(
                                new Array(numPages),
                                (el, index) => (
                                    <Page key={`page_${index + 1}`} className='size-pages' pageNumber={index + 1} />
                                )
                            )}
                        </Document>
                    </div>
                </div>
                {/* <div className='bg-dark ventana my-2'>

                </div> */}
            </div>
        
        </>
    );
}

export default VisorPdf