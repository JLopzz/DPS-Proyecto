<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // Recibe el json de angular

$params = json_decode($json); // Decodifica el json

require("conexion.php"); // importa el archivo de la conexion a la BD
$conexion = conexion();

mysqli_query($conexion, "UPDATE pacientes 
SET nompaciente='$params->nompaciente' , 
edadpaciente ='$params->edadpaciente', 
telpaciente='$params->telpaciente', 
dirpaciente='$params->dirpaciente' 
WHERE idpaciente=$params->idpaciente");

class Result {}

//Generar los datos de respuesta
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'Paciente Editado';
echo json_encode($response); // Muestra el json generado

//Envio de informacion del JSON
//header('Content-Type: application/json');
?>