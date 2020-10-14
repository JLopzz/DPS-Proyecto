export interface Cliente {
  id? : string,
  nombre : string,
  dui : string,
  mascotas : Mascota[],
  visitas : Visita[]
}

export interface Mascota {
  nombre : string,
  edad : string | number
}

export interface Visita {
  telefono : string | number,
  mascota : string,
  fechaVisita: string,
  motivoVisita : string,
  total:number
}
