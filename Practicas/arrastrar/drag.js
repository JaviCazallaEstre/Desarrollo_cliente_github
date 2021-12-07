window.addEventListener("load",function(){
    const izq=document.getElementById("izq");
    const der=document.getElementById("der");
    const divs=izq.getElementsByTagName("div");

    const filtro=document.getElementById("texto");
    filtro.onkeyup=function(){
        const divs=izq.getElementsByTagName("div");
        for(let i=0;i<divs.length;i++){
            divs[i].classList.remove("marcado");
            if(divs[i].innerHTML.indexOf(filtro.value)<0)
                divs[i].classList.add("oculto")
            else
                divs[i].classList.remove("oculto")
         }
    }
    const boton=document.getElementById("boton");
    boton.onclick=function(){
        const divs=izq.getElementsByTagName("div");
        for(let i=0;i<divs.length;i++){
            if(divs[i].innerHTML.indexOf(filtro.value)<0)
                divs[i].classList.add("oculto")
            else
                divs[i].classList.remove("oculto")
         }
    }
    for (let i=0;i<divs.length;i++){
        divs[i].ondragstart=function(ev){
            ev.dataTransfer.setData("text",ev.target.id)
        };
        divs[i].ondragover=function(ev){
            ev.preventDefault();
        }
        divs[i].ondrop=function(ev){
            ev.preventDefault();
            debugger;
            const id=ev.dataTransfer.getData("text");
            ev.target.parentNode.appendChild(document.getElementById(id));
            if (ev.target.parentNode.id="der"){
                const marcados=der.getElementsByClassName("marcado");
                for (let j=0;i<marcados.length;j++)
                  izq.appendChild(marcados[j]);
            }
            ev.stopPropagation();
        }
        divs[i].onclick=function(){
            this.classList.toggle("marcado")
        }
    }
    der.ondragover=function(ev){
        ev.preventDefault();
    }
    
    izq.ondragover=function(ev){
        ev.preventDefault();
    }
    der.ondrop=function(ev){
        ev.preventDefault();
        const id=ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(id));
        const marcados=izq.getElementsByClassName("marcado");
        debugger;
        for (let j=marcados.length-1;j>=0;j--)
                  der.appendChild(marcados[j]);
        ev.stopPropagation();
    }
    
    izq.ondrop=function(ev){
        ev.preventDefault();
        const id=ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(id));
        const marcados=der.getElementsByClassName("marcado");
        for (let j=marcados.length-1;j>=0;j--)
                  izq.appendChild(marcados[j]);
        ev.stopPropagation();
    }


})