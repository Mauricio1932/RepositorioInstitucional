import React from 'react'
import '../Assets/css/offcanvas.css';

function ScrollBar() {
    return (
        <>
            <div class="nav-scroller bg-body shadow-sm">
                <nav class="nav nav-underline" aria-label="Secondary navigation">
                    <a class="nav-link active" aria-current="page" href="#">Biblioteca UPChiapas</a>
                    <a class="nav-link" href="https://repositorionacionalcti.mx" target="_blank">Repositorio Nacional</a>
                    <a class="nav-link" href="http://remeri.org.mx" target="_blank">Remeri</a>
                    <a class="nav-link" href="https://archive.org" target="_blank">Biblioteca Internet Archive</a>
                    <a class="nav-link" href="https://creativecommons.org" target="_blank">Creative Commons</a>
                    {/* <!--<a class="nav-link" href="#">Link</a>--> */}
                </nav>
            </div>
        </>
    )
}

export default ScrollBar;