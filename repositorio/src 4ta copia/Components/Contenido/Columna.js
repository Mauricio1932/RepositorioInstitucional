import React from 'react'

function Columna({titleColumn,contenido}) {
    return (
        <>
            <div className="col">
                <div className="p-4 mb-3 bg-light rounded">
                    <h4 className="fst-italic text-capitalize">{titleColumn}</h4>
                    <div className="box-style">
                        <ul className="list-group">
                            
                            {contenido.map((content, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <a href={content.href} className="list-group list-group-item-action text-start">{content.name}</a>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">0</span>
                                </li>
                            ))}  
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Columna