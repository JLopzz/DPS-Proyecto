<?php
// Dato de conexion a la Base de datos

function conexion() {
    $conexion = mysqli_connect("localhost", "id14021897_jlopzz", "123Lopez123!", "id14021897_dps");

    return $conexion;
}
?>