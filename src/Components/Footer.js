import React from 'react'

// Importacion del logo up
import imgLogo from '.././Assets/images/logoUPChiapas.png'

function Footer() {
    return (
        <>
            <nav className="bg-dark text-color">
                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-footer-img">
                                    <img src={imgLogo} width="130px" alt="logo"></img>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-footer-info">
                                    <h3>Direccion</h3>
                                    <p>Carretera Tuxtla-Portillo Zaragoza KM. 21+500. Col. Las Brisas. Teléfono 961 61 71460. C.P. 29150. Suchiapa Chiapas.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="single-footer-info">
                                    <h3>Redes Sociales</h3>
                                    <div className='d-flex justify-content-center '>
                                        <div className="container">
                                            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 d-flex justify-content-center">
                                                <div className="col">
                                                    <div className="p-2"><a><i className="fa-brands fa-facebook size"></i></a></div>
                                                </div>
                                                <div className="col">
                                                    <div className="p-2 "><a><i className="fa-brands fa-twitter"></i></a></div>
                                                </div>
                                                <div className="col">
                                                    <div className="p-2"><a><i className="fa-brands fa-instagram"></i></a></div>
                                                </div>
                                                <div className="col">
                                                    <div className="p-2"><a><i className="fa-brands fa-youtube"></i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Footer 