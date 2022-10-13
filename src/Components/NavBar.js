import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate} from 'react-router-dom';

import imglogoUpChiapas from '.././Assets/images/logoUPChiapas.png';



function NavBar() {
    const [userProfile, setUserProfile] = useState();
    const [activate, setActivate] = useState(true);
    const location = useLocation();

    let text = location.pathname;
    const myArray = text.split("/");
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear()
        navigate('login')
    }

    const ocultar = () => {
        let token = localStorage.getItem('token')
        if (myArray[1] === "admin") {
            setActivate(false);
            setUserProfile(jwt_decode(token))
        } else {
            setActivate(true);
        }
    }

    useEffect(() => {
        ocultar();
    }, [1])
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top d-flex">


                <div className="d-flex bd-highlight colorWhite content-header menu">
                    <div className="p-2 flex-shrink-1 bd-highlight align-self-center">
                        <img src={imglogoUpChiapas} alt="" width="50" height="50" />
                    </div>
                    <div className="p-2 w-100 bd-highlight align-self-center d-flex justify-content-start h6">
                        Repositorio Institucional de la Universidad Politécnica de Chiapas
                    </div>
                    <div className="p-2 flex-fill bd-highlight align-self-center  ">
                        
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon d-flex justify-content-evenly"></span>
                            </button>
                           
                    </div>
                </div>

                <div className="collapse navbar-collapse justify-content-end align-self-center menu" id="navbarSupportedContent">
                    {activate ?
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light boton" type="submit">Search</button>
                        </form> :
                        <>
                            <h5 className="colorWhite">Ingeniería {userProfile.sub}</h5>
                                <button type="button" className="btn btn-outline-light" onClick={()=>logout()}>Logout</button>
                        </>
                    }
                </div>

            </nav>
        </>
    )
}

export default NavBar