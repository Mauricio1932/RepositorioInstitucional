import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function Login() {

    const [password, setPassword] = useState("");
    const [userName, setUsername] = useState("");

    const [tokens, setTokens] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState(false)
    const [error, setError] = useState("")
    const [redirect, setRedirect] = useState(false);


    const verPassword = () => {
        if (pass == false) {
            setPass(true)
        } else {
            setPass(false)
        }
    }

    const login = async () => {
        let response = await fetch('http://localhost:8000/api/v2/Auth2/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': userName, 'password': password }),
        })
        let data = await response.json()

        console.log(data);

        if (response.status === 200) {
            setUser(data)
            setRedirect(true);
            localStorage.setItem('token', data.access);
        } else {
            //alert('algo salió mal')
            setError("Usuario o contraseña, icorrectos")
            setTimeout(() => {
                setError("")
            }, 5000);
        }

    }



    return (
        <>
            {localStorage.getItem('token') ?
                <Navigate to='/admin/contenido' />
                :
                <div className="maincontainer">
                    <div className="container-fluid">
                        <div className="row no-gutter">
                            <div className="col-md-6 d-none d-md-flex bg-image"></div>
                            <div className="col-md-6 bg-light">
                                <div className="login d-flex align-items-center py-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-10 col-xl-7 mx-auto">
                                                <h3 className="display-4">login</h3>
                                                <p className="text-muted mb-4">Hola!</p>
                                                <form>
                                                    <p className='color'>{error}</p>
                                                    <div className="mb-3 input-group shadow border rounded">
                                                        <input id="inputEmail" type="email" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="form-control  border-0 shadow-sm px-4" />
                                                    </div>
                                                    <div className="mb-3 input-group shadow border rounded rounded-pill">
                                                        <input id="inputPassword" type={pass ? "text" : "password"} placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} className="form-control  border-0 shadow-sm px-4 text-primary" />
                                                        <input type="button" className='input-group-text bg-dark text-light' onClick={() => verPassword()} value="Show" />
                                                    </div>
                                                    <div className="d-grid gap-2 mt-2">
                                                        <input type="button" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={() => login()} value="Login" />
                                                    </div>
                                                    <div className="text-center d-flex justify-content-between mt-4">You do not have an account?
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Login;