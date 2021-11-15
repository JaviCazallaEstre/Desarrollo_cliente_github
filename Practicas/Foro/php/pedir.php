<?php
include_once("BD.php");
bd::creaConexion();
$mensajes=array();
$mensajes=bd::sacaMensajes();
echo json_encode($mensajes);