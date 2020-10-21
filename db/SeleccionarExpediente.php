<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php"); // importa el archivo de la conexion a la BD
$conexion = conexion();

//Consulta a BD 
$registros= mysqli_query($conexion, "SELECT * FROM historial WHERE idhistorial =$_GET[idhistorial]");
//  recorre el resultado y almacena en un arreglo la consulta a la BD
if ($resultado = mysqli_fetch_array($registros)){
    $datos[]=$resultado;
}
// Generar el json con los datos obtenidos
$json = json_encode($datos);
//Envio de informacion del JSON
//header('Content-Type: application/json;charset=utf-8');
echo $json;
?>