function validar() {
    var apellido, nombre, correo, teléfono, comentarios, expresion;
    apellido = document.getElementById("apellido").value;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    teléfono = document.getElementById("teléfono").value;
    comentarios = document.getElementById("comentarios").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if (apellido === ""|| nombre === "" || correo === "" || teléfono === ""|| comentarios === ""){
        alert ("Todos los campos son obligatorios");
        return false;
    }
    else if (apellido.length>30) {
        alert ("El apellido es muy largo");
        return false;
    }
    else if (nombre.length>30){
         alert ("El nombre es muy largo");
         return false;
    }

    else if (correo.length>30) {
        alert ("El correo es muy largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert ("El correo es inválido");
        return false;
    }

    else if (teléfono.length>30){
         alert ("El teléfono es muy largo");
         return false;
    
    }
    else if (isNaN(teléfono)){
        alert ("El teléfono ingresado no es válido")
        return false;
    } 
    else if (comentarios.length>100){
         alert ("El comentario es muy largo");
         return false;
    }
}