function validar() {
    var apellido, nombre, correo, teléfono, valor, comentarios, expresion;
    apellido = document.getElementById("apellido").value;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    teléfono = document.getElementById("teléfono").value; 
    valor = /^\d{2}-\d{4}-\d{4}$/;
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

    else if (!valor.test(teléfono)){
        alert ("Formato de teléfono inválido, ingresar según xx-xxxx-xxxx");
        return false;
    }
    else if (comentarios.length>100){
         alert ("El comentario es muy largo");
         return false;
    }
}