function captura() {
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let telefono=document.getElementById("telefono").value;
    let email=document.getElementById("email").value;
    let mensaje=document.getElementById("mensaje").value;

    if (nombre == "", apellido == "", telefono == "", email == "", mensaje == "") {
        alert("Es necesario llenar todos los campos");
        document.getElementById("nombre").focus();
    } 
        console.log(nombre + apellido + telefono + email + mensaje);
}