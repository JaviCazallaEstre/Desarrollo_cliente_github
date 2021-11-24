<?php
if (isset($_POST["usuario"]) && isset($_POST["mensaje"])){
        $usuario=$_POST["usuario"];
        $mensaje=$_POST["mensaje"];
        $conec=mysqli_connect("localhost","root","");
        $db=mysqli_select_db($conec,"foro");
        $sql="INSERT INTO `mensajes` (`id`, `usuario`, `mensaje`, `hora`) VALUES (NULL, '". 
                          $usuario . "', '${mensaje}', NOW())";
        mysqli_query($conec,$sql);
        echo "OK";
     } else {
        echo "ERROR";
     }
?>