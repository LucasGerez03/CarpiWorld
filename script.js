const nombre= document.getElementById("nombres") ;
const apellido = document.getElementById("apellidos");
const usuario = document.getElementById("usuario");
const email= document.getElementById("correo");
const contraseña= document.getElementById("contraseña");
const form = document.getElementById("registroForm")
const parrafo = document.getElementById("warnings")
const parrafo2 = document.getElementById("exito")


form.addEventListener("submit", e=> {
    e.preventDefault();
    let warnings = "" ;
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    
    parrafo.innerHTML = ""
    parrafo2.innerHTML = ""
    if (nombre.value.length <1 || apellido.value.length <1 ) {
        warnings += "nombre y/o apellido inválido <br>"
        entrar = true;
    }
    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warnings += "email inválido<br>"
        entrar = true;
    }
    if (contraseña.value.lenght < 8) {
        warnings += "contraseña debe tener almenos 8 caracteres <br>"
        entrar = true;
    }
    if (usuario.value.length <4) {
        warnings += "usuario inválido <br>"
        entrar = true;
    }
    if (contraseña.value.length <8) {
        warnings += "contraseña debe tener al menos 8 carárcteres <br>"
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    }else{
        parrafo2.innerHTML = "Cuenta Registrada Con Éxito"
    }
})




