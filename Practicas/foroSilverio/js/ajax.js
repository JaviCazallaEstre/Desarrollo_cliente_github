window.addEventListener("load",function(){
    const enviar=document.getElementById("enviar");
    const form=document.getElementById("form1");
    const contenedor=document.getElementById("contenedor");
    var ultimo=0;
    var usuario=form["usuario"];
    var mensaje=form["mensaje"];
    enviar.onclick=enviarMensaje;
    var tmp1=setInterval(pedirMensajes,10000);



    function pedirMensajes(){
        const ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function(){
                if(ajax.readyState==4 && ajax.status==200){
                    var respuesta=JSON.parse(ajax.responseText);
                    if (respuesta.mensajes.length>0){
                        for (let i=0;i < respuesta.mensajes.length; i++ ){
                            var div=crearContenido(respuesta.mensajes[i],usuario.value);
                            if (contenedor.scrollHeight-contenedor.scrollTop < (contenedor.clientHeight+10)){
                               contenedor.appendChild(div);
                               contenedor.scrollTop=contenedor.scrollHeight;
                            }else{
                                contenedor.appendChild(div);
                            }

                        }
                    }
                    ultimo=respuesta.ultimo; 
                }
            }
        ajax.open("GET","php/pedir.php?ultimo=" + ultimo);
        ajax.send();   
    }

    function crearContenido(mensaje,usuario){
        var claseUsuario=(mensaje.usuario==usuario)?"propio":"otros";
        const div1=document.createElement("div");
        div1.className=claseUsuario;
        const div2=document.createElement("div");
        div2.className="usuario";
        div2.innerHTML=mensaje.usuario;
        const div3=document.createElement("div");
        div3.className="hora";
        div3.innerHTML=mensaje.fecha;
        const div4=document.createElement("div");
        div4.className="mensaje";
        div4.innerHTML=mensaje.mensaje;
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        return div1;
    }

    function enviarMensaje(ev){
        //no hagas lo que estas acostumbrado a hacer
        ev.preventDefault();
        if (usuario.value !="" && mensaje.value!=""){
            var texto=encodeURI("usuario=" + usuario.value + "&" +
                      "mensaje=" + mensaje.value);
            const ajax=new XMLHttpRequest();
            ajax.onreadystatechange=function(){
                if(ajax.readyState==4 && ajax.status==200){
                    var respuesta=ajax.responseText;
                    if (respuesta=="OK"){
                        form["mensaje"].value="";
                        form["mensaje"].focus();
                    }
                }
            }          
            ajax.open("POST","php/insertar.php");
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajax.send(texto);
        }
        
        //        var usuario=
    }
})