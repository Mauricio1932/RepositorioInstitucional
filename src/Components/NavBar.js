import React from 'react'

import imglogoUpChiapas from '.././Assets/images/logoUPChiapas.png';
import upChiapas from '.././Assets/images/upChiapas.jpg'
import logo from '.././Assets/images/logoUP.png'

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="header">
                    <div class="container-fluid d-inline-block align-text-top text-start">
                        <a class="navbar-brand" href="#">
                            <img src={imglogoUpChiapas} alt="" width="50" height="50" class="" />
                        </a>
                        Repositorio Institucional de la Universidad Politécnica de Chiapas
                    </div>
                    </div>
                        <button class="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon d-flex justify-content-evenly"></span>
                        </button>
                        <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex ">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-light boton" type="submit">Search</button>
                            </form>
                        </div>

                    
                {/* </div> */}

            </nav>



            <div class='container-cover'>
                <div class="container-cover-info shadow-lg ">
                    {/* <img class="image" src={logo} width="150ox"></img> */}
                    <h1 >Tecnologia para el bien común</h1>
                </div>
            </div>
        </>
    )
}

export default NavBar