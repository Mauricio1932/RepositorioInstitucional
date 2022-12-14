

const entidadUP = [
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
]

const yearProduction = [
    { name: '2004' },
    { name: '2005' },
    { name: '2006' },
    { name: '2007' },
    { name: '2008' },
    { name: '2009' },
    { name: '2010' },
    { name: '2011' },
    { name: '2012' },
    { name: '2013' },
    { name: '2014' },
    { name: '2015' },
    { name: '2016' },
    { name: '2017' },
    { name: '2018' },
    { name: '2019' },
    { name: '2019' },
    { name: '2020' },
    { name: '2021' },
    { name: '2022' }
]

const tipoContenido  = [
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
    { name: 'Tesis maestría', href: '/tesis/maestria' },
    { name: 'Tesis doctorado', href: '/tesis/doctorado' },
    { name: 'Trabajo grado especialización', href: '' },
]
const area = [
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
]
const eventos=[
    { name: 'Académicos' },
    { name: 'Administrativos' }
]
const otrasIntituciones = [
    { name: 'Estancias Profesionales' },
    { name: 'Estadías Profesionales' }
]

//hook render column
const data = {
    contenido: [
        { tittle: 'entidad Up chipas', nombre: entidadUP },
        { tittle: 'año de producción', nombre: yearProduction },
        { tittle: 'Contenido', nombre: tipoContenido },
        { tittle: 'Area', nombre: area },
        { tittle: 'eventos', nombre: eventos },
        { tittle: 'otras Instituciones', nombre: otrasIntituciones },
    ],
    contenidoRepo:[{tipoContenido}]
};

export default data;


