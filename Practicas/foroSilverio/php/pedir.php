<?php
 if (isset($_GET["ultimo"])){
    $siguiente=$_GET["ultimo"] + 1;
 }else{
    $siguiente=1;
 }

 $conec=mysqli_connect("localhost","root","");
 $db=mysqli_select_db($conec,"foro");
 $sql="select * from `mensajes` where id >= ${siguiente} ";
 $respuesta=mysqli_query($conec,$sql);
 $object = new stdClass();
 $object->mensajes=[];
 $ultimo=$siguiente-1;
 while ($fila=mysqli_fetch_row($respuesta)){
   $objMensaje = new stdClass();
   $objMensaje->id=$fila[0];
   $objMensaje->usuario=$fila[1];
   $objMensaje->mensaje=$fila[2];
   $objMensaje->fecha=$fila[3];
   $object->mensajes[]=$objMensaje;
   $ultimo=$fila[0];
 }
 $object->ultimo=$ultimo;

 echo json_encode($object);

?>