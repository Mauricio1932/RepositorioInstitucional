import React from 'react'
function RenderizarPdf({ pdf }) {
    return (
        <>
            <div className="container my-3">
                <div className="row row-cols-1 row-cols-md-3 g-4 row">
                    {pdf.map((pdf, index) => (
                        <div className="col " key={index}>
                            <div className="card border border-secondary border-2" width="18rem">
                                <div className='etiqueta rounded-end'>titulo de grado</div>
                                <img src={pdf.image} alt="pdf" className="my-2 mx-auto img-fluid rounded border border-secondary border-2" width="90%" height="240px"/>
                                <div className="card-body espacio fs-6">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-capitalize">nombre de autor(es)</p>
                                    <p className="card-text text-capitalize">area de autor(es)</p>
                                    <p className="card-text text-capitalize">tipo de documento</p>
                                    <div className='d-flex justify-content-center icons'>
                                        <a href="" ><i className="fa-solid fa-book-open"></i></a>
                                        <a href="" ><i className="fa-solid fa-share-from-square"></i></a>                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

        </>
    )
}

export default RenderizarPdf