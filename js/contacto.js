// Espera a que la pagina cargue completamente y luego ejecuta el codigo dentro
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    //Cuando se envie el formulario comienza el codigo
    formulario.addEventListener('submit', function(enviar) {
        // Evita que el formulario recargue la página
        enviar.preventDefault(); 

        // Obtener los valores del formulario y quitarle espacios por si acaso
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar que los campos no estén vacíos
        if (!nombre || !correo || !mensaje) {
            alert('Por favor, completa todos los campos antes de enviar tu mensaje.');
            return; // Sale de la función si hay un campo vacío
        };
        
        alert('¡Mensaje recibido!')
        formulario.reset();
    });
    
})