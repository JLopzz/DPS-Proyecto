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

export interface Pacientes {
  idpaciente: string;
  nompaciente: string;
  edadpaciente: string;
  telpaciente: string;
  dirpaciente: string;
}

export class Historial {
    aghistorial: string;
    ahhistorial: string;
    ahistorial: string;
    alergiashistorial: string;
    apnphistorial: string;
    apphistorial: string;
    citahistorial: string;
    diagnostico: string;
    dirpaciente: string;
    dxhistorial: string;
    edadpaciente: string;
    fchistorial: string;
    fechahistorial: string;
    frhistorial: string;
    hemotipohistorial: string;
    idhistorial: string;
    idpaciente: string;
    laborhistorial: string;
    nompaciente: string;
    ohistorial: string;
    pahistorial: string;
    pesohistorial: string;
    planhistorial: string;
    qxhistorial: string;
    shistorial: string;
    tahistorial: string;
    tallahistorial: string;
    telpaciente: string;
    temphistorial: string;
    txhistorial: string;
}
