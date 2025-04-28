// textos de bienvenida
const bienvenida = document.getElementById('bienvenida');


const textos = [
    'Bienvenido a Ecofood <img src="assets/Imagen home 1.avif" alt="comida">',
    '¡Bienvenido otra vez!<img src="assets/Imagen home 2.png" alt="comida">',
    'EcoFood: un mundo saludable <img src="assets/EcoFood imagen 2.png" alt="logo">',
    '¿Que quieres hacer hoy?<img src="assets/poderAyudar.png" alt="logo">',
    '¿Esperando que algo pase?<img src="assets/Imagen home 3.jpg" alt="logo">'
];

const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];

bienvenida.innerHTML = textoAleatorio;
// ¿Textos de SABIAS QUE?
const sabiasque = document.getElementById('sabiasque');

const textosSabiasQue = [
    'Hoy en día, donde alrededor de un tercio de la comida que se produce en el mundo no es consumida, representando alrededor del 10% de las emisiones globales de gases de efecto invernadero.',
    'Se estima que 1.052 millones de toneladas de alimentos acabaron en los contenedores de basura de hogares, minoristas, restaurantes y otros servicios alimentarios de todo el mundo',
    'Por ejemplo, Nigeria es uno de los países del mundo donde más comida se bota, con 189 kilos per cápita al año. Algo similar sucede en Ruanda, donde la cifra alcanza los 164 kilos per cápita. ',
    'En el año 2019, la Asamblea General de Naciones Unidas declaró el 29 de septiembre como Día Internacional de Concienciación sobre la Pérdida y el Desperdicio de Alimentos, con el objetivo de concienciar y sensibilizar sobre la importancia de reducir la pérdida y el desperdicio de alimentos ',
    'El desperdicio de alimentos contribuye a las emisiones de gases de efecto invernadero, incluyendo el metano, que es más potente que el dióxido de carbono.'
];
const textosSabias = textosSabiasQue[Math.floor(Math.random() * textosSabiasQue.length)];
sabiasque.innerHTML = textosSabias;