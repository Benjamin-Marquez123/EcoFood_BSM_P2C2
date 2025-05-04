// Espera a que la pagina cargue completamente y luego ejecuta el codigo dentro
document.addEventListener('DOMContentLoaded', function() {

    //Guardar el formulario en una variable y el div comentarios en otra
    const formulario = document.getElementById('formulario');
    const Comentarios = document.getElementById('comentarios');

    //Cuando se envie el formulario comienza el codigo
    formulario.addEventListener('submit', function(enviar) {
        // Evita que el formulario recargue la página
        enviar.preventDefault(); 

        // Obtener los valores del formulario y quitarle espacios por si acaso
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        // Validar que los campos no estén vacíos
        if (!nombre || !correo || !comentario) {
            alert('Por favor, completa todos los campos antes de enviar tu comentario.');
            return; // Sale de la función si hay un campo vacío
        };

        // Se crea el comentario en formato "card" 
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('card');
        nuevoComentario.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">
                    ${nombre}
                </h5>
                <h6 class="card-subtitle">
                    (${correo})
                </h6>
                <p class="card-text">
                    ${comentario}
                </p>
            </div>
        `;

        // Insertar el nuevo comentario **al principio** del contenedor
        Comentarios.prepend(nuevoComentario);

        // Limpiar los campos del formulario
        formulario.reset();
    });
});