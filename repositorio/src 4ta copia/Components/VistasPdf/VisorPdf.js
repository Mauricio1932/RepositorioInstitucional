import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import PDFViewer from 'pdf-viewer-reactjs'
import pdf from '../../Assets/pdf/tarea.pdf'
function VisorPdf() {
    const accessToken = '12f5ddf1b98ff23aa937bfee5f202925d8197ab1';
    const [imagens, setimages] = useState(pdf);

    const getImgUser = async () => {
        let response = await fetch('http://localhost:8000/api/v1/libros/libros/2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${accessToken}`
            },

        })

        const data = await response.json();
        setimages(data.pay_load.url_pdf)
    }

    useEffect(() => {
        getImgUser()
    }, [1]);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet)
    }
    function changePageBack() {
        changePage(-1)
    }
    function changePageNext() {
        changePage(+1)
    }

    return (
        <>
            {/* <div className='App' style={{ width: '100 % ', height: '100% ' }}>
                <Document file={imagens}>
                    <Page pageNumber={1} />
                </Document>
            </div>  /} */}

            {/* <Document   file={pdf} onLoadSuccess={onDocumentLoadSuccess} style={{ position: 'absolute', width: '100 % ', height: '100% ' }}>

                <Page 
                 pageNumber={1} 
                    type="application/pdf"
                    width="100%"
                    height="100%" ></Page>
            </Document > */}


            {/* <iv className='bg-warning'>
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className='bg-primary tsize' >
                    {Array.from(
                        new Array(numPages),
                        (el, index) => (
                            <Page key={`page_${index + 1}`} className=' bg-danger tsize2' pageNumber={index + 1} />
                        )
                    )}
                </Document>
                    <h1>hdkslnñgsndglknsdlkgsalkmclasmclamsasfascsacascascascvsbbbbb</h1>
                    </iv>
              */}

            <div class="d-flex justify-content-center">
                    <div class="card d-flex justify-content-center my-2" >
                        <div class="card box-visor">
                            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className='' >
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