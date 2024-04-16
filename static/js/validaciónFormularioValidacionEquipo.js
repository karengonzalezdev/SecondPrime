const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const direccion = document.getElementById("direccion");
const tel = document.getElementById("tel");
const ciudad = document.getElementById("ciudad");
const estado = document.getElementById("estado");
const codigo_postal = document.getElementById("codigo_postal");
const check = document.getElementById("check");
const warnings = document.getElementById("warnings");
const form = document.getElementById("form");

form.addEventListener("submit", e=>{
    if(nombre.value.length <3){
        e.preventDefault();
        let warnings = "";
        let entrada = false;
        let regexEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        parrafo.innerHTML= "";
        if(nombre.value.length <3){
            warnings += `El nombre no es válido. <br>`;
            entrada = true;
        }

        console.log(!regexEmail.test(email.value));
        if(regexEmail.test(email.value)){
            entrada = true;
        }
        //Vlidación del tel
        if(tel.value.length <10 ){
            warnings += `Debe de ingresar un Teléfono Válido. <br>`;
            entrada = true;
        }
        if(entrada){
            parrafo.innerHTML = warnings;
        }
        else{
            parrafo.innerHTML = "Enviado";
        }

    }
});