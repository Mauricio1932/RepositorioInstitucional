import React, { useEffect, useState } from 'react'
import data from '../data/data'
import Columna from '../Contenido/Columna';

import { Routes, Route, Outlet, useLocation } from 'react-router-dom'

function Administrador() {

    const [activate, setActivate] = useState(true);
    const { contenidoRepo } = data;
    const location = useLocation();

    const recargarPagina = () => {
        let text = location.pathname;
        const myArray = text.split("/");

        if (myArray.length === 2 || myArray[2] === "") {
            setActivate(true);
        } else {
            setActivate(false);
        }
    }


    useEffect(() => {
        recargarPagina();
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default Administrador