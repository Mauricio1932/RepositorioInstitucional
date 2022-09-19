import React from 'react'

function LeftBar() {
    return (
        <>
            <div className="border-primary mb-3 back2 scroll" max-width="18rem">
                {/* card */}
                <div className="card border-secondary mb-3" max-width="15rem">
                    <div className="input-group mb-3 line-none d-flex justify-content-center margin">
                        <div className='search d-flex justify-content-center border-bajo box-content'>
                            <input type="text" className="line-none-text text-capitalize" placeholder={"entidad UP chiapas"} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <a className='line-none-button'><i className="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                    </div>

                    <div className="card-body text-secondary">
                        <div className="col ">
                            <ul className="list-group box-pdf">
                                {/* map */}
                                <li className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <a href="#" className="list-group list-group-item-action text-start">{"nombre"}</a>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default LeftBar