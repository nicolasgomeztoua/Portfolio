import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicolas Gomez', // e.g: 'Name | Developer'
  lang: 'ES', // e.g: en, es, fr, jp
  description: 'Nicolas Gomez´s Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nicolas Gomez',
  subtitle: 'Soy un desarrollador fullstack de web',
  cta: 'Sobre mi',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Soy un desarrollador web fullstack de 20 años. Después de un año de estudios universitarios en finanzas y contabilidad en 2020, decidí dedicarme a un interés secundario que se ha convertido en una pasión y mi trabajo.',
  paragraphTwo:
    'Vengo de una variedad de orígenes. Y he estado expuesto a un ambiente multicultural toda mi vida. He pasado años de mi vida en España, Marruecos, Francia y el Reino Unido, además de graduarme de una escuela secundaria estadounidense en Marruecos.',
  paragraphThree:
    'En una industria de constante crecimiento, me preocupe principalmente de aprender las partes complejas desde el principio. Estoy orgulloso de dónde me encuentro hoy, y hago un esfuerzo constante para aprender nuevas habilidades y optimizar las actuales todos los días.',
  resume: 'https://pdfhost.io/v/bCKbKuLkb_Nicolas_ES', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'boostify.png',
    title: 'Boostify',
    info: 'Mi mayor proyecto hasta la fecha. Una aplicación React para ayuda con los videojuegos. Usando React-Router, Styled-Components / CSS y Hooks para el Frontend. Node.js, MongoDB, Mongoose, Bycrypt, CORS y Stripe se usaron en el backend.',
    info2: 'Frontend alojado con Netlify. Backend alojado en Heroku',
    url: 'https://www.boostify.es/',
    repo: 'https://github.com/nicolasgomeztoua/Boostify',
  },
  {
    id: nanoid(),
    img: 'AlgoPic.png',
    title: 'Forex Trading Robot',
    info: 'Una pieza de software escrita para el framework MQL4 basado en C++',
    info2:
      'Este robot de trading hace operaciones en los mercados financieros de intercambio monetario basado en un algoritmo con 6 parametros differentes.',
    url: 'https://youtu.be/4Pl4wrVCB3g',
    repo: 'https://github.com/nicolasgomeztoua/No-Nonsense-Trading-Robot',
  },
  {
    id: nanoid(),
    img: 'Gatsby.png',
    title: 'Gatsby && Contentful',
    info: 'Gracias a gatsby se elimina la neccesidad de usar systemas mas caros y lentos como wordpress y php. ',
    info2:
      'El contenido y el url de la pagina de descripcion es autogenerado gracias a Gatsby y un CMS donde el cliente puede escribir su contendio como worpdress o contentful y no tener que exponer al cliente a html y permitir a los desarolladores trbajar con mejores herramientas',
    url: 'https://reactestate.netlify.app/',
    repo: 'https://github.com/nicolasgomeztoua/ReactEstate',
  },
  {
    id: nanoid(),
    img: 'Currency Convert.png',
    title: 'Currency Convert',
    info: 'Un proyecto simple para convertir monedas a USD que enfatiza el trabajo con una API externa. Uso de React Hooks para estructurar e interactuar con datos externos.',
    info2:
      'Poco o nada de CSS. Este proyecto fue una forma de familiarizarme con las promesas y el Javascript asincrónico.',
    url: 'https://nicolasgomeztoua.github.io/CurrencyConvert/',
    repo: 'https://github.com/nicolasgomeztoua/CurrencyConvert',
  },
  {
    id: nanoid(),
    img: 'yelpclone.png',
    title: 'Yelp Clone',
    info: 'Una aplicación PERN, con Psql como el foco del proyecto, para familiarizarse con los sistemas de base de datos psql y SQL.',
    info2:
      'Agregar, editar Eliminar y ver restaurantes en la base de datos. También cuenta con un sistema de clasificación por estrellas que utiliza las funciones AVG () y COUNT () de PSQL.',
    url: 'https://yelpclone-react.netlify.app/',
    repo: 'https://github.com/nicolasgomeztoua/yelpclone',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nicolasnourgt@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicolas-nour-gomez-toua-36b3731b2/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nicolasgomeztoua',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
