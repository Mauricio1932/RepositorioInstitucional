import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'

function Columna({titleColumn,contenido}) {

    const [activate,setActivate] = useState(true);
    const location = useLocation();
    
    let text = location.pathname;
    const myArray = text.split("/");
    
    const ocultar = () => {
        if(myArray[1] === "admin"){
            setActivate(false);
        }else{
            setActivate(true);
        }
    }

    useEffect(()=>{
        ocultar();
    },[1])
    
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
                                        <Link to={`${content.href}`} className="list-group list-group-item-action text-start">{content.name}</Link>
                                    </div>
                                    {activate? <span className="badge bg-primary rounded-pill">0</span>:
                                        <Link to={`../formulario${content.href}`} >clickme</Link>  }   
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