export class CrearExamenDTO {
    tiempo_max: number;
    numero_preguntas: number;
    porcentajeCurso : number;
    nombre: String;
    porcentaje_aprobatorio: number;
    fecha_hora_inicio: String;
    fecha_hora_fin: String;
    num_preguntas_aleatorias:number;
    id_tema: number;
    id_docente: number;
    id_grupo: number;

    constructor(tiempo_max: number, numero_preguntas: number, porcentajeCurso: number, 
                nombre: String, porcentaje_aprobatorio: number, fecha_hora_inicio: String, 
                    fecha_hora_fin: String, num_preguntas_aleatorias: number, id_tema: number,
                        id_docente: number, id_grupo: number) {
        this.tiempo_max = tiempo_max;
        this.numero_preguntas = numero_preguntas;
        this.porcentajeCurso = porcentajeCurso;
        this.nombre = nombre;
        this.porcentaje_aprobatorio = porcentaje_aprobatorio;
        this.fecha_hora_inicio = fecha_hora_inicio;
        this.fecha_hora_fin = fecha_hora_fin;
        this.num_preguntas_aleatorias = num_preguntas_aleatorias;
        this.id_tema = id_tema;
        this.id_docente = id_docente;
        this.id_grupo = id_grupo;
    }
}