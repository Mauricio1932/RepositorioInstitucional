import React from 'react'
import {useNavigate} from 'react-router-dom'



function Tarjeta({ pdfData, setArchivo }) {
  
  const navigate = useNavigate();

  const verPdf = (documento) =>{
    navigate('../pdf')
    setArchivo(documento)
  }
  console.log(pdfData)

  return (
    <>
      <div class="col">
        <div class="card h-100 border border-secondary border-2b">
            <img src="https://www.rural-ftp.com/multimedia/images/notfound.png" class="my-2 mx-auto img-fluid rounded border border-secondary border-2" width="90%" height="240px" />
          <div className='etiqueta rounded-end'>{"Tesis licenciatura"}</div>
          <div class="card-body espacio fs-6">
            <h5 class="card-title">{pdfData.titulo}</h5>
            <p class="card-text text-capitalize">{pdfData.autor}</p>
            <p class="card-text text-capitalize">{pdfData.fecha}</p>
          </div>
          <div class="card-footer">
            <div className='d-flex justify-content-center icons'>
              <a><i onClick={()=>verPdf(pdfData.enlaceDocumento)} className="fa-solid fa-book-open"></i></a>
              <a ><i className="fa-solid fa-share-from-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tarjeta;