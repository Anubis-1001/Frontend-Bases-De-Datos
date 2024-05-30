export class PreguntaDTO {
  enunciado: string;
  esPublica: string;
  tipoPregunta: string;
  idPreguntaCompuesta?: number;
  idTema: number;
  idDocente: number;
  estado: string;

  constructor(enunciado: string, esPublica: string, tipoPregunta: string, idPreguntaCompuesta: number, idTema: number, idDocente: number, estado: string) {
    this.enunciado = enunciado;
    this.esPublica = esPublica;
    this.tipoPregunta = tipoPregunta;
    this.idPreguntaCompuesta = idPreguntaCompuesta;
    this.idTema = idTema;
    this.idDocente = idDocente;
    this.estado = estado;
  }
}
