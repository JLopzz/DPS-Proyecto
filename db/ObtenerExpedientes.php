<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php"); // importa el archivo de la conexion a la BD
$conexion = conexion();

$registros = mysqli_query($conexion, "SELECT * from historial INNER JOIN pacientes ON historial.idpaciente = pacientes.idpaciente WHERE historial.idpaciente = ".$_GET['idpaciente']." ORDER BY idhistorial DESC");

//recorre el resultado y lo guarda en un array
while( $resultado = mysqli_fetch_array($registros)) {
    $datos[] = $resultado;
}

$json = json_encode($datos); // Genera el json con los datos obtenidos

//Envio de informacion del JSON
//header('Content-Type: application/json; charset=utf-8');
echo $json;

?>