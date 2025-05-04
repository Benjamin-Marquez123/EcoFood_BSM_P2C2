document.addEventListener('DOMContentLoaded', function() {
    //Lista preguntas y respuestas
    const faq = [
        {
            "pregunta": "¿Necesito experiencia previa para participar en las actividades de EcoFood?",
            "respuesta": "No, nuestras actividades están diseñadas para todo público. Cualquier persona interesada en reducir el desperdicio de alimentos puede unirse y aprender."
        },
        {
            "pregunta": "¿Puedo ser voluntario en EcoFood?",
            "respuesta": "Sí, contamos con programas de voluntariado en los que puedes colaborar en eventos, campañas educativas y desarrollo de proyectos comunitarios."
        },
        {
            "pregunta": "¿EcoFood trabaja con instituciones educativas?",
            "respuesta": "Sí, colaboramos con escuelas y universidades para implementar programas de educación ambiental y talleres sobre consumo responsable."
        },
        {
            "pregunta": "¿Cómo puedo postular mi comunidad para un taller o actividad de EcoFood?",
            "respuesta": "Puedes escribirnos a contacto@ecofood.org con los datos de tu comunidad o grupo, y coordinaremos una posible intervención educativa."
        },
        {
            "pregunta": "¿Tienen alguna app o herramienta digital disponible?",
            "respuesta": "Actualmente estamos desarrollando soluciones digitales para ayudar a reducir el desperdicio alimentario, como aplicaciones móviles y plataformas colaborativas."
        },
        {
            "pregunta": "¿Qué tipo de productos o servicios ofrece EcoFood?",
            "respuesta": "EcoFood no vende productos, pero sí ofrece servicios como talleres, charlas, recursos educativos gratuitos y consultoría para proyectos sostenibles."
        },
        {
            "pregunta": "¿EcoFood realiza eventos presenciales o solo digitales?",
            "respuesta": "Realizamos ambos. Organizamos eventos comunitarios, ferias, talleres presenciales y también actividades virtuales como webinars y campañas digitales."
        },
        {
            "pregunta": "¿Puedo donar alimentos a través de EcoFood?",
            "respuesta": "No gestionamos donaciones directas de alimentos, pero conectamos con redes y organizaciones aliadas que sí lo hacen. Podemos orientarte para canalizar tu ayuda."
        },
        {
            "pregunta": "¿Cómo mide EcoFood su impacto?",
            "respuesta": "Medimos el impacto a través de indicadores como reducción de residuos en comunidades, número de personas capacitadas y alianzas establecidas."
        },
        {
            "pregunta": "¿Puedo recibir noticias y actualizaciones de EcoFood?",
            "respuesta": "Sí, puedes suscribirte a nuestro boletín en el sitio web o seguirnos en nuestras redes sociales para mantenerte informado."
        }
    ];

    const accordion_faq = this.getElementById('preguntas_respuestas');

    faq.forEach((item, index) => {
        const itemAccordion = document.createElement("div");
        itemAccordion.classList.add('accordion-item');

        //IDs para cada item del "acordeon"
        const preguntaID = `pregunta_${index}`;
        const respuestaID = `respuesta_${index}`;
    
        itemAccordion.innerHTML = 
        `<div class="accordion" id="${preguntaID}">
            <div class="accordion-item" style="border: solid black;>
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${respuestaID}" aria-expanded="false" aria-controls="${respuestaID}">
                    ${item.pregunta}
                    </button>
                </h2>
                <div id="${respuestaID}" class="accordion-collapse collapse" data-bs-parent="#preguntas_respuestas">
                    <div class="accordion-body">
                    ${item.respuesta}
                    </div>
                </div>
            </div>
        </div>`;
        accordion_faq.appendChild(itemAccordion)
    })
})
