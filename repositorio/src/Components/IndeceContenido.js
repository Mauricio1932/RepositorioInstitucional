import React, { useState } from 'react'

function IndeceContenido() {

    const [entidadUP, setEntidadUP] = useState([
        { name: 'Ingeniería en Nanotecnología' },
        { name: 'Licenciatura en Administración y Gestión Empresarial' },
        { name: 'Ingeniería Petrolera' },
        { name: 'Ingeniería en Tecnologías de Manufactura' },
        { name: 'Ingeniería en Energía' },
        { name: 'Ingeniería en Desarrollo de Software' },
        { name: 'Ingeniería Biomédica' },
        { name: 'Ingeniería en Tecnología Ambiental' },
        { name: 'Ingeniería Mecatrónica' },
        { name: 'Ingeniería Agroindustrial' },
        { name: 'Maestría en Energías Renovables' },
        { name: 'Maestría en Biotecnología' },
    ])
    const [yearProduction, setyearProduction] = useState([
        { year: '2004' },
        { year: '2005' },
        { year: '2006' },
        { year: '2007' },
        { year: '2008' },
        { year: '2009' },
        { year: '2010' },
        { year: '2011' },
        { year: '2012' },
        { year: '2013' },
        { year: '2014' },
        { year: '2015' },
        { year: '2016' },
        { year: '2017' },
        { year: '2018' },
        { year: '2019' },
        { year: '2019' },
        { year: '2020' },
        { year: '2021' },
        { year: '2022' }
    ]);
    const [contenido, setContendio] = useState([
        { name: 'Album fotográfico' },
        { name: 'Almanaque' },
        { name: 'Anuario' },
        { name: 'Artículo cultural' },
        { name: 'Artículo de investigación' },
        { name: 'Artículo técnico-profesional' },
        { name: 'Base de datos' },
        { name: 'Capítulo de libro' },
        { name: 'Capítulo de memoria de congreso' },
        { name: 'Cápsula educativa' },
        { name: 'Cápsula informativa' },
        { name: 'Carta' },
        { name: 'Cátedra' },
        { name: 'Ceremonia' },
        { name: 'Coloquio' },
        { name: 'Comentarios' },
        { name: 'Competencia' },
        { name: 'Concierto' },
        { name: 'Conferencia' },
        { name: 'Congreso' },
        { name: 'Consulta' },
        { name: 'Conversatorio' },
        { name: 'Curso' },
        { name: 'Curso en línea' },
        { name: 'Datos de actividad solar' },
        { name: 'Debate' },
        { name: 'Diapositivas de conferencia' },
        { name: 'Documento de trabajo' },
        { name: 'Encuentro' },
        { name: 'Entrevista' },
        { name: 'Entrevista en video' },
        { name: 'Folleto' },
        { name: 'Foro' },
        { name: 'Fotografía' },
        { name: 'Grabados' },
        { name: 'Homenaje' },
        { name: 'Infografía' },
        { name: 'Informe de actividades' },
        { name: 'Jornada' },
        { name: 'Libro' },
        { name: 'Manual' },
        { name: 'Manuscrito' },
        { name: 'Memoria de congreso' },
        { name: 'Mesa de análisis' },
        { name: 'Mesa de debate' },
        { name: 'Mesa de trabajo' },
        { name: 'Mesa redonda' },
        { name: 'Monografía' },
        { name: 'Obra de teatro' },
        { name: 'Observatorio' },
        { name: 'Opinión' },
        { name: 'Otro material de biblioteca' },
        { name: 'Otro material de hemeroteca' },
        { name: 'Panel' },
        { name: 'Parte de periódico' },
        { name: 'Periódico' },
        { name: 'Plano cartográfico' },
        { name: 'Plática informativa' },
        { name: 'Podcast' },
        { name: 'Ponencia' },
        { name: 'Presentación' },
        { name: 'Programa de televisión' },
        { name: 'Proyecto de investigación' },
        { name: 'Recopilación' },
        { name: 'Recurso interactivo' },
        { name: 'Registro de archivo personal' },
        { name: 'Registro colección biológica' },
        { name: 'Registro colección proyectos' },
        { name: 'Registro colección fotográfica' },
        { name: 'Reseña' },
        { name: 'Revista divulgación' },
        { name: 'Semanario' },
        { name: 'Seminario' },
        { name: 'Simposio' },
        { name: 'Taller' },
        { name: 'Tarjeta postal' },
        { name: 'Telegrama' },
        { name: 'Tesis licenciatura' },
        { name: 'Tesis maestría' },
        { name: 'Tesis doctorado' },
        { name: 'Trabajo grado especialización' },
    ]);
    const [area, setArea] = useState([
        { name: 'Artes y Humanidades' },
        { name: 'Biología y Química' },
        { name: 'Biotecnología' },
        { name: 'Ciencias Agropecuarias' },
        { name: 'Ciencias Sociales y Económicas' },
        { name: 'Físco Matemáticas' },
        { name: 'Ciencias de la Tierra' },
        { name: 'Ingenierías' },
        { name: 'Ciencias de la Salud' },
        { name: 'Multidisciplinaria' }
    ])
    const [eventos, setEventod] = useState([
        { name: 'Académicos' },
        { name: 'Administrativos' }
    ])
    const [otrasIntituciones, setOtrasInstituciones] = useState([
        { name: 'Estancias Profesionales' },
        { name: 'Estadías Profesionales' }
    ])

    return (
        <>
            <div class="my-3 p-3 bg-body rounded shadow-sm">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Entidad UPChiapas</h4>
                            <div class="box-style">
                                <ul class="list-group">
                                    {entidadUP.map((entidad, index) => (
                                        <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <a href="#" class="list-group list-group-item-action text-start">{entidad.name}</a>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">0</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Año de producción</h4>
                            <div class="box-style">
                                <ul class="list-group">
                                    {yearProduction.map((year, index) => (
                                        <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <a href="#" class="list-group list-group-item-action text-start">{year.year}</a>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">0</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Tipo de Contenido</h4>
                            <div class="box-style">
                                <ul class="list-group">
                                    {contenido.map((content, index) => (
                                        <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <a href="#" class="list-group list-group-item-action text-start">{content.name}</a>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">0</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="my-3 p-3 bg-body rounded shadow-sm">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Área</h4>
                            <div class="box-style">
                                <ul class="list-group">
                                    {area.map((entidad, index) => (
                                        <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <a href="#" class="list-group list-group-item-action text-start">{entidad.name}</a>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">0</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Eventos Institucionales</h4>
                            <div class="box-style">
                                <ul class="list-group scroller-color">
                                    {eventos.map((eventos, index) => (
                                        <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <a href="#" class="list-group list-group-item-action text-start">{eventos.name}</a>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">0</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">Otras instituciones</h4>
                            <div class="box-style">
                                <ul class="list-group">
                                    {otrasIntituciones.map((institucion, index) => (
                                        <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <a href="#" class="list-group list-group-item-action text-start">{institucion.name}</a>
                                            </div>
                                            <span class="badge bg-primary rounded-pill">0</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default IndeceContenido