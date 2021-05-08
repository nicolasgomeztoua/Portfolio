import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
    'Soy un aspirante a desarrollador web fullstack de 19 años. Después de un año de estudios universitarios en finanzas y contabilidad, decidí dedicarme a un interés secundario que se ha convertido en una pasión.',
  paragraphTwo:
    'Vengo de una variedad de orígenes. Y he estado expuesto a un ambiente multicultural toda mi vida. He pasado años de mi vida en España, Marruecos, Francia y el Reino Unido, además de graduarme de una escuela secundaria estadounidense en Marruecos.',
  paragraphThree:
    'En una industria de constante crecimiento, me preocupe principalmente de aprender las partes complejas desde el principio. Estoy orgulloso de dónde me encuentro hoy, y hago un esfuerzo constante para aprender nuevas habilidades y optimizar las actuales todos los días.',
  resume: 'https://pdfhost.io/v/YSZA7uleX_NicolasGomezpdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'boostify.png',
    title: 'Boostify',
    info:
      'Mi mayor proyecto hasta la fecha. Una aplicación React para ayuda con los videojuegos. Usando React-Router, Styled-Components / CSS y Hooks para el Frontend. Node.js, MongoDB, Mongoose, Bycrypt, CORS y Stripe se usaron en el backend.',
    info2: 'Frontend alojado con Netlify. Backend alojado en Heroku',
    url: 'https://www.boostify.es/',
    repo: 'https://github.com/nicolasgomeztoua/Boostify',
  },
  {
    id: nanoid(),
    img: 'Gatsby.png',
    title: 'Gatsby && Contentful',
    info:
      "Un mock blog usando Gatsby, Con la idea de que las paginas y contenido de los blogs sean auto generados basados en archivos 'markdown' escritos en una cuenta de contenful. La funete de contenido podria haber sido contenful,wordpress o cualquier otro CMS pero contenful ofrece la mallor simplicidad",
    info2:
      'La funete de contenido podria haber sido contenful,wordpress o cualquier otro CMS pero contenful ofrece la mallor simplicidad. Ademas de eso hay un enfoque en la comodidad de el sistema de paginacion de Gatsby y familiaridad con los archivos Gatbsy-config y Gatsby-node.',
    url: 'https://gatsby-react-contentful.netlify.app/',
    repo: 'https://github.com/nicolasgomeztoua/Gatsby-Contentful',
  },
  {
    id: nanoid(),
    img: 'Currency Convert.png',
    title: 'Currency Convert',
    info:
      'Un proyecto simple para convertir monedas a USD que enfatiza el trabajo con una API externa. Uso de React Hooks para estructurar e interactuar con datos externos.',
    info2:
      'Poco o nada de CSS. Este proyecto fue una forma de familiarizarme con las promesas y el Javascript asincrónico.',
    url: 'https://nicolasgomeztoua.github.io/CurrencyConvert/',
    repo: 'https://github.com/nicolasgomeztoua/CurrencyConvert',
  },
  {
    id: nanoid(),
    img: 'yelpclone.png',
    title: 'Yelp Clone',
    info:
      'Una aplicación PERN, con Psql como el foco del proyecto, para familiarizarse con los sistemas de base de datos psql y SQL.',
    info2:
      'Agregar, editar Eliminar y ver restaurantes en la base de datos. También cuenta con un sistema de clasificación por estrellas que utiliza las funciones AVG () y COUNT () de PSQL. Implementado originalmente con AWS, pero un problema con NGINX arruinó mi máquina ubuntu. Vea el video para una demo de su uso',
    url: 'https://vimeo.com/546133613',
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
