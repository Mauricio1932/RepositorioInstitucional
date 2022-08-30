import React from 'react'



// realizar el metodo put de envio de formulario y guardar el formulario



function FormularioTesis() {

    const removeDragData = (ev) => {
        console.log('Removing drag data')

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        } else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    }

    const dropHandler = (ev) => {
        console.log('Fichero(s) arrastrados');

        // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // Si los elementos arrastrados no son ficheros, rechazarlos
                if (ev.dataTransfer.items[i].kind === 'file') {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    console.log('... file[' + i + '].name = ' + file.name);
                }
            }
        } else {
            // Usar la interfaz DataTransfer para acceder a el/los archivos
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
            }
        }

        // Pasar el evento a removeDragData para limpiar
        removeDragData(ev)
    }
    return (
        <>
            <div className="container size-paginas">
                <div className="col">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="fst-italic">Tesis UPChiapas</h4>
                        <ul className="list-group list-group-flush anyclassName">
                            <li className="list-group-item d-inline justify-content-between align-items-start">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="InputdirectorTesis" className="form-label">Director de Tesis</label>
                                        <input type="text" className="form-control" placeholder="Nombre del Director de Tesis" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Codirector</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre Codirector" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Título Tesis</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Tesis" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Autor</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Primer Autor" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Autor</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Segundo Autor" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Fecha de Publicación</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Fecha" />
                                    </div>
                                </form>
                                <div>
                                    <a className="btn btn-primary" href="#" role="button">Seleccionar archivo</a>
                                    <div className="justify-content-start my-2">
                                        <button type="button" className="btn btn-primary">Publicar Tesis</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormularioTesis;