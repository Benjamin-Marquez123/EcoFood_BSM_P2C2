// Welcome
const bienvenida = document.getElementById('motivante');


const textos = [
    'Consume responsablemente: Planifica tus compras y utiliza alimentos de forma eficiente.',
    'Apoya iniciativas locales: Compra productos locales y de temporada.',
    'Difunde conciencia: Comparte información sobre el impacto del desperdicio alimentario con tu comunidad.',
    'Participa: Únete a nuestras campañas y eventos para generar cambios significativos.'
];

const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];

bienvenida.innerHTML = textoAleatorio;
