import React, { useState } from 'react';
import Columna from './Columna';
import VistaPdf from '../VistasPdf/VistaPdf';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
        { name: 'Album fotográfico', href: '/album' },
        { name: 'Almanaque', href: '' },
        { name: 'Anuario', href: '' },
        { name: 'Artículo cultural', href: '' },
        { name: 'Artículo de investigación', href: '' },
        { name: 'Artículo técnico-profesional', href: '' },
        { name: 'Base de datos', href: '' },
        { name: 'Capítulo de libro', href: '' },
        { name: 'Capítulo de memoria de congreso', href: '' },
        { name: 'Cápsula educativa', href: '' },
        { name: 'Cápsula informativa', href: '' },
        { name: 'Carta', href: '' },
        { name: 'Cátedra', href: '' },
        { name: 'Ceremonia', href: '' },
        { name: 'Coloquio', href: '' },
        { name: 'Comentarios', href: '' },
        { name: 'Competencia', href: '' },
        { name: 'Concierto', href: '' },
        { name: 'Conferencia', href: '' },
        { name: 'Congreso', href: '' },
        { name: 'Consulta', href: '' },
        { name: 'Conversatorio', href: '' },
        { name: 'Curso', href: '' },
        { name: 'Curso en línea', href: '' },
        { name: 'Datos de actividad solar', href: '' },
        { name: 'Debate', href: '' },
        { name: 'Diapositivas de conferencia', href: '' },
        { name: 'Documento de trabajo', href: '' },
        { name: 'Encuentro', href: '' },
        { name: 'Entrevista', href: '' },
        { name: 'Entrevista en video', href: '' },
        { name: 'Folleto', href: '' },
        { name: 'Foro', href: '' },
        { name: 'Fotografía', href: '' },
        { name: 'Grabados', href: '' },
        { name: 'Homenaje', href: '' },
        { name: 'Infografía', href: '' },
        { name: 'Informe de actividades', href: '' },
        { name: 'Jornada', href: '' },
        { name: 'Libro', href: '' },
        { name: 'Manual', href: '' },
        { name: 'Manuscrito', href: '' },
        { name: 'Memoria de congreso', href: '' },
        { name: 'Mesa de análisis', href: '' },
        { name: 'Mesa de debate', href: '' },
        { name: 'Mesa de trabajo', href: '' },
        { name: 'Mesa redonda', href: '' },
        { name: 'Monografía', href: '' },
        { name: 'Obra de teatro', href: '' },
        { name: 'Observatorio', href: '' },
        { name: 'Opinión', href: '' },
        { name: 'Otro material de biblioteca', href: '' },
        { name: 'Otro material de hemeroteca', href: '' },
        { name: 'Panel', href: '' },
        { name: 'Parte de periódico', href: '' },
        { name: 'Periódico', href: '' },
        { name: 'Plano cartográfico', href: '' },
        { name: 'Plática informativa', href: '' },
        { name: 'Podcast', href: '' },
        { name: 'Ponencia', href: '' },
        { name: 'Presentación', href: '' },
        { name: 'Programa de televisión', href: '' },
        { name: 'Proyecto de investigación', href: '' },
        { name: 'Recopilación', href: '' },
        { name: 'Recurso interactivo', href: '' },
        { name: 'Registro de archivo personal', href: '' },
        { name: 'Registro colección biológica', href: '' },
        { name: 'Registro colección proyectos', href: '' },
        { name: 'Registro colección fotográfica', href: '' },
        { name: 'Reseña', href: '' },
        { name: 'Revista divulgación', href: '' },
        { name: 'Semanario', href: '' },
        { name: 'Seminario', href: '' },
        { name: 'Simposio', href: '' },
        { name: 'Taller', href: '' },
        { name: 'Tarjeta postal', href: '' },
        { name: 'Telegrama', href: '' },
        { name: 'Tesis licenciatura', href: '/tesis' },
        { name: 'Tesis maestría', href: 'tesis/maestria' },
        { name: 'Tesis doctorado', href: 'tesis/doctorado' },
        { name: 'Trabajo grado especialización', href: '' },
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
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    
                        <Columna titleColumn={"entidadUP"} contenido={entidadUP} />
                        <Columna titleColumn={"entidadUP"} contenido={entidadUP} />
                        <Columna titleColumn={"entidadUP"} contenido={entidadUP} />
                </div>
            </div>
        </>
    )
}

export default IndeceContenido