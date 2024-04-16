const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario');

const expresiones = {
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^.{6,18}$/,
}

const campos = {
    correo:false,
    password:false
}

const validaFormulario = (e) =>{
    switch(e.target.name){
        case "correo":
            validarCampo(expresiones.correo,e.target,'correo');
        break;
        case "password":
            validarCampo(expresiones.password,e.target,'password');
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(input.value == ""){
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    }else if(expresion.test(input.value)){
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo]=true;
    } else{
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        console.log(`Error ingreso de ${campo}`);
        campos[campo]=false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validaFormulario);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(campos.correo && campos.password){
        formulario.reset();

        //Quitar parte
        document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
        setTimeout(()=>{
            document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
            location.href = '../../templates/index.html';
        }, 4000);

        document.querySelectorAll('.formulario_grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario_grupo-correcto');
        });
    }
});