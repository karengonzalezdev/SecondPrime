document.getElementById("direccion").style.display = "block";
document.getElementById("pago").style.display = "none";

function mostrarDir(){
    document.getElementById("pago").style.display = "none";
    document.getElementById("direccion").style.display = "block";
}

function mostrarPago(){
    document.getElementById("direccion").style.display = "none";
    document.getElementById("pago").style.display = "block";
}