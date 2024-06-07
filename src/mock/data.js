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
  subtitle: 'Soy un desarrollador frontend de web',
  cta: 'Sobre mi',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Soy un desarrollador web frontend de 2w años. Después de un año de estudios universitarios en finanzas y contabilidad en 2020, decidí dedicarme a un interés secundario que se ha convertido en una pasión y mi trabajo.',
  paragraphTwo:
    'Vengo de una variedad de orígenes. Y he estado expuesto a un ambiente multicultural toda mi vida. He pasado años de mi vida en España, Marruecos, Francia y el Reino Unido, además de graduarme de una escuela secundaria estadounidense en Marruecos.',
  paragraphThree:
    'En una industria de constante crecimiento, me preocupe principalmente de aprender las partes complejas desde el principio. Estoy orgulloso de dónde me encuentro hoy, y hago un esfuerzo constante para aprender nuevas habilidades y optimizar las actuales todos los días.',
  resume: 'https://pdfhost.io/v/ZdeY8yure_NicolasNourGomezTouaFlowCVResume20231230', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Versaci.png',
    title: 'Versaci Boosts',
    info:
      'Mi mayor proyecto hasta la fecha. Una aplicación React para ayuda con los videojuegos. Usando React-Router, Styled-Components / CSS y Hooks para el Frontend. Node.js, MongoDB, Mongoose, Bycrypt, CORS y Stripe se usaron en el backend.',
    info2: 'Frontend alojado con Netlify. Backend alojado en Heroku',
    url: 'https://www.versaciboosts.com/',
    repo: 'https://github.com/nicolasgomeztoua/versaciboosts',
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
    info:
      'Gracias a gatsby se elimina la neccesidad de usar systemas mas caros y lentos como wordpress y php. ',
    info2:
      'El contenido y el url de la pagina de descripcion es autogenerado gracias a Gatsby y un CMS donde el cliente puede escribir su contendio como worpdress o contentful y no tener que exponer al cliente a html y permitir a los desarolladores trbajar con mejores herramientas',
    url: 'https://reactestate.netlify.app/',
    repo: 'https://github.com/nicolasgomeztoua/ReactEstate',
  },
  {
    id: nanoid(),
    img: 'Pathfinder.png',
    title: 'Buscador de Rutas',
    info: 'Un visualizador de el algoritmo de traveso de graficas de Dijkstras. ',
    info2: '',
    url: 'https://pathfinder-two.vercel.app/',
    repo: 'https://github.com/nicolasgomeztoua/Pathfinder',
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
