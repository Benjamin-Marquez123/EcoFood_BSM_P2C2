function abrirLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const nombre_completo = document.getElementById("nombre_completo").value;
  const select = document.getElementById("select").value;

  if (nombre_completo.trim() === "") {
    alert('Debe ingresar su nombre para poder registrarse');
    return;
  }

  else if (email.trim() === "") {
    alert("Por favor, ingrese su email.");
    return;
  } 

  else if (!email.includes("@")){
    alert("Por favor, ingrese un correo válido.");
    return;
  }

  else if (password.trim() === ""){
    alert("Por favor, ingrese su contraseña nueva.");
    return;
  }

  else if (password.length < 12){
    alert("Por favor, su contraseña debe contener al menos 12 caracteres.");
    return;
  }

  else if (!esEdadValida()) {
    alert("Debe ser mayor de 13 años para poder registrarse.");
    return;
  }

  else if(select.trim() === ""){
    alert("Por favor, seleccione su género.");
    return;
  }

  else if(contarSeleccionados() == 0){
    alert("Por favor, seleccione al menos una de las 3 opciones.");
    return;
  }

  else{
    alert("¡Te has registrado con éxito");
    open("login.html")
  }
    
 }


function calcularEdad(fecha_nacimiento) {
    const fecha_actual = new Date(); //Se obtiene la fecha actual
    const año_actual = fecha_actual.getFullYear(); //Se obtiene el año actual
    const mes_actual = fecha_actual.getMonth(); //Se obtiene el número del mes actual (va desde 0 a 11 [enero a diciembre]) actual
    const dia_actual = fecha_actual.getDate(); //Se obtiene el día actual
  
    const año_nacimiento = fecha_nacimiento.getFullYear(); //Se obtiene el año de la fecha de nacimiento ingresada por el usuario
    const mes_nacimiento = fecha_nacimiento.getMonth(); //Se obtiene el número del mes (0-11) de la fecha de nacimiento ingresada por el usuario
    const dia_nacimiento = fecha_nacimiento.getDate(); //Se obtiene el día de la fecha de nacimiento ingresada por el usuario

    let edad = año_actual - año_nacimiento; //Se resta el año actual por el año ingresado de la fecha de nacimiento

    if (mes_actual < mes_nacimiento || (mes_actual === mes_nacimiento && dia_actual < dia_nacimiento)) {
      edad--;
    }
  
    return edad
  }


function esEdadValida() {
    const fecha_nacimiento_obj = document.getElementById("date");
    const fecha_nacimiento_value = fecha_nacimiento_obj.value;
    const fecha_nacimiento_usuario = new Date(fecha_nacimiento_value);
    const edad = calcularEdad(fecha_nacimiento_usuario);
    let min = 13;
    return edad >= min;
  }

function contarSeleccionados(){
  let cant = 0;
  if (document.getElementById("btncheck1").checked) {
    cant++;
  }
  if (document.getElementById("btncheck2").checked) {
    cant++;
  }
  if (document.getElementById("btncheck3").checked) {
    cant++;
}
  return cant;
}