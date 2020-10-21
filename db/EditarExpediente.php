<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // Recibe el json de angular

$params = json_decode($json); // Decodifica el json

require("conexion.php"); // importa el archivo de la conexion a la BD
$conexion = conexion();

mysqli_query($conexion, "UPDATE historial 
    SET nombremascotahistorial ='$params->nombremascotahistorial',
        especiehistorial ='$params->especiehistorial',
        razahistorial ='$params->razahistorial',
        pesohistorial ='$params->pesohistorial',
        sexohistorial ='$params->sexohistorial',
        edadhistorial ='$params->edadhistorial',
        temphistorial ='$params->temphistorial',
        tamaniohistorial ='$params->tamaniohistorial',
        estadoreprohistorial ='$params->estadoreprohistorial',
        procedehistorial ='$params->procedehistorial',
        alergiashistorial ='$params->alergiashistorial',
        alimentahistorial ='$params->alimentahistorial',
        vacunashistorial ='$params->vacunashistorial',
        motivoconsuhistorial ='$params->motivoconsuhistorial',
        observacioneshistorial ='$params->observacioneshistorial',
        citahistorial ='$params->citahistorial',
        idpaciente =$params->idpaciente,
        fechahistorial ='$params->fechahistorial',
        diagnostico ='$params->diagnostico'
        WHERE idhistorial=$params->idhistorial");

class Result {}

//Generar los datos de respuesta
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'Expediente editado';

//Envio de informacion del JSON
//header('Content-Type: application/json');
echo json_encode($response); // Muestra el json generado
?>