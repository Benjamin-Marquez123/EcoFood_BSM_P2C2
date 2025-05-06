function validar() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value
    while (true){
        if (email.trim() === "") {
            alert("Por favor, ingrese su email.");
            return;
        } 
        else if (!email.includes("@")){
            alert("Por favor, ingrese un correo válido.");
            return;
        }
        else if (password.trim() === ""){
            alert("Por favor, ingrese su contraseña.");
            return;
        }
        else if (email.trim() === "ADMIN@gmail.com" && password.trim() === "ADMIN12345##") {
            alert("Registro Exitoso!.");
            open("home.html");
            break
        }
        else{
            alert("¡El email y/o contraseña es incorrecto");
            return
        }
    }
   }

function recordar(){
    open("recuperar_contraseña.html");
}