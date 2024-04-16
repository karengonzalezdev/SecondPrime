const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario');

const expresiones = {
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{10,14}$/,
    password:/^.{6,18}$/,
}

const campos = {
    nombre:false,
    correo:false,
    telefono:true,
    password:false
}

const validaFormulario = (e) =>{
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre,e.target,'nombre');
        break;
        case "correo":
            validarCampo(expresiones.correo,e.target,'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono,e.target,'telefono');
        break;
        case "password":
            validarCampo(expresiones.password,e.target,'password');
            ValidarPassword();
        break;
        case "password2":
            ValidarPassword();
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(campo.value=='telefono'){
        if(input.value == ""){
            campos[campo]=true;
        }
    }
    
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

const ValidarPassword = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');
    if(inputPassword2.value == ""){
        document.querySelector('#grupo_password2 .formulario_input-error').classList.remove('formulario_input-error-activo');
    }else if(inputPassword1.value !==inputPassword2.value){
        document.querySelector('#grupo_password2 .formulario_input-error').classList.add('formulario_input-error-activo');
        console.log('Error ingreso de password');
        campos['password']=false;
    }else{
        document.querySelector('#grupo_password2 .formulario_input-error').classList.remove('formulario_input-error-activo');
        campos['password']=true;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validaFormulario);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(campos.nombre && campos.correo && campos.telefono && campos.password){
        formulario.reset();

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