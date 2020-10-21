<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php"); // importa el archivo de la conexion a la BD
$conexion = conexion();

//Consulta a BD 
$registros= mysqli_query($conexion, "SELECT DISTINCT * FROM historial h INNER JOIN pacientes p ON h.idpaciente = p.idpaciente ORDER BY h.idhistorial DESC");
//  recorre el resultado y almacena en un arreglo la consulta a la BD
while ($resultado = $registros ->fetch_assoc()){
    $datos[]=$resultado;
}
// Generar el json con los datos obtenidos
$json = json_encode($datos);
//Envio de informacion del JSON
//header('Content-Type: application/json;charset=utf-8');
echo $json;
?>