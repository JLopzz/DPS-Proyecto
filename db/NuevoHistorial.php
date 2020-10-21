<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  

  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO historial(nombremascotahistorial, 
                                                  especiehistorial, 
                                                  razahistorial,
                                                  pesohistorial,
                                                  sexohistorial,
                                                  edadhistorial,
                                                  temphistorial,
                                                  tamaniohistorial,
                                                  estadoreprohistorial,
                                                  procedehistorial,
                                                  alergiashistorial,
                                                  alimentahistorial,
                                                  vacunashistorial,                      
                                                  motivoconsuhistorial,
                                                  observacioneshistorial,
                                                  citahistorial,
                                                  idpaciente,
                                                  fechahistorial,
                                                  diagnostico) VALUES
                  ('$params->nombremascotahistorial',
                    '$params->especiehistorial', 
                    '$params->razahistorial',
                    '$params->pesohistorial',
                    '$params->sexohistorial',
                    '$params->edadhistorial',
                    '$params->temphistorial',
                    '$params->tamaniohistorial',
                    '$params->estadoreprohistorial',
                    '$params->procedehistorial',
                    '$params->alergiashistorial',
                    '$params->alimentahistorial',
                    '$params->vacunashistorial',                    
                    '$params->motivoconsuhistorial',
                    '$params->observacioneshistorial',
                    '$params->citahistorial',
                    '$params->idpaciente',
                    '$params->fechahistorial',
                    '$params->diagnostico')");     
  
  class Result {}
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL NUEVO HISTORIAL';
  echo json_encode($response); // MUESTRA EL JSON GENERADO
  //header('Content-Type: application/json');
?>