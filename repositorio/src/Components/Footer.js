import React from 'react'


import imgLogo from '.././Assets/images/logoUPChiapas.png'

function Footer() {
    return (
        <>
            <nav class="footer bg-dark text-color">
                <div class="footer-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="single-footer-img">
                                    <img src={imgLogo}></img>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single-footer-info">
                                    <h3>Direccion</h3>
                                    <p>Carretera Tuxtla-Portillo Zaragoza KM. 21+500. Col. Las Brisas. Teléfono 961 61 71460. C.P. 29150. Suchiapa Chiapas.</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single-footer-info">
                                    <h3 class="align">Redes Sociales</h3>
                                    <ul class="footer-social list-item align">
                                        <li><a><i class="fa-brands fa-facebook size"></i></a></li>
                                        <li><a><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a><i class="fa-brands fa-youtube"></i></a></li>
                                    </ul>
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