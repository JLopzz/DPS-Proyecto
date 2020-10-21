<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // Recibe el json de angular

$params = json_decode($json); // Decodifica el json

require("conexion.php"); // importa el archivo de la conexion a la BD
$conexion = conexion();

mysqli_query($conexion, "DELETE FROM pacientes WHERE idpaciente=".$_GET['idpaciente']);

class Result {}

//Generar los datos de respuesta
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'PACIENTE ELIMINADO';
echo json_encode($response); // Muestra el json generado

//Envio de informacion del JSON
//header('Content-Type: application/json');
?>