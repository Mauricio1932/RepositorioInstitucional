import React from 'react'

function Tarjeta({ pdfData }) {

  console.log(pdfData.titulo)

  return (
    <>
      <div class="col">
        <div class="card h-100 border border-secondary border-2b">
          <img src="https://http.cat/101" class="my-2 mx-auto img-fluid rounded border border-secondary border-2" width="90%" height="240px" />
          <div className='etiqueta rounded-end'>{"Tesis licenciatura"}</div>
          <div class="card-body espacio fs-6">
            <h5 class="card-title">{pdfData.titulo}</h5>
            <p class="card-text text-capitalize">{pdfData.autor}</p>
            <p class="card-text text-capitalize">{pdfData.fecha}</p>
          </div>
          <div class="card-footer">
            <div className='d-flex justify-content-center icons'>
              <a href="/pdf" ><i className="fa-solid fa-book-open"></i></a>
              <a href="" ><i className="fa-solid fa-share-from-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tarjeta;