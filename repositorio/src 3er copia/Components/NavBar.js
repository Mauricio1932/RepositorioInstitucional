import React from 'react'

import imglogoUpChiapas from '.././Assets/images/logoUPChiapas.png';


function NavBar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top d-flex">


                <div class="d-flex bd-highlight colorWhite content-header menu">
                    <div class="p-2 flex-shrink-1 bd-highlight align-self-center">
                        <img src={imglogoUpChiapas} alt="" width="50" height="50" />
                    </div>
                    <div class="p-2 w-100 bd-highlight align-self-center d-flex justify-content-start h6">
                        Repositorio Institucional de la Universidad Politécnica de Chiapas
                    </div>
                    <div class="p-2 flex-fill bd-highlight align-self-center  ">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon d-flex justify-content-evenly"></span>
                        </button>
                    </div>
                </div>

                <div className="collapse navbar-collapse justify-content-end align-self-center menu" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light boton" type="submit">Search</button>
                    </form>

                </div>

            </nav>
        </>
    )
}

export default NavBar