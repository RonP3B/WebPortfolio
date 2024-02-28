import { getAllImages } from "../utils/getAllImages";

export const projects: Array<Project> = [
  {
    id: 1,
    name: "MediSearch",
    type: "Web Application",
    description:
      "MediSearch is an online platform that offers its users greater accessibility to medications and pharmaceutical products by efficiently and conveniently connecting customers, pharmacies, and laboratories.",
    tools: ["javascript", "react-js", "material-ui"],
    images: getAllImages("images/projects/MediSearch/", 15),
    source: "https://github.com/RonP3B/MediSearch-Frontend",
    projectUrl: "https://medisearch-tds.netlify.app/",
  },
  {
    id: 2,
    name: "ChatApp",
    type: "Web Application",
    description:
      "ChatApp is an application designed for seamless communication, connecting users through a stylish and user-friendly interface. Utilizing web sockets, it enables real-time interactions for sharing messages, multimedia, and more. The frontend, crafted with modern tools, guarantees a smooth experience with instant updates, enhancing the overall connectivity within the platform.",
    tools: ["typescript", "react", "material-ui", "socket.io"],
    images: getAllImages("images/projects/ChatApp/", 14),
    source: "https://github.com/RonP3B/ChatApp-Frontend",
    projectUrl: "https://roniell-chat-app.netlify.app/",
  },
  {
    id: 3,
    name: "ChatApp-API",
    type: "Application Programming Interface",
    description:
      "Backend implementation for a scalable and efficient realtime chat app. Handles authentication, message routing, jwt authentication, and ensures instant communication between clients using WebSocket technology.",
    tools: [
      "nestjs",
      "typescript",
      "prisma",
      "socket.io",
      "jwt-authentication",
    ],
    images: getAllImages("images/projects/ApiProject/", 1),
    source: "https://github.com/RonP3B/ChatApp-Backend",
    projectUrl: null,
  },
  {
    id: 4,
    name: "Web Pokedex",
    type: "Web Application",
    description:
      "Nomina WebApp is a user-friendly web application specifically crafted to streamline and simplify the task of managing a company's payroll. It offers comprehensive features that facilitate the smooth processing and organization of payroll data, making it a good asset for businesses seeking efficiency and accuracy in their payroll management processes.",
    tools: [
      "javascript",
      "jquery",
      "nodejs",
      "expressjs",
      "handlebars",
      "sequelize-orm",
      "html",
      "sass",
      "css",
      "bootstrap",
    ],
    images: getAllImages("images/projects/WebPokedex/", 7),
    source: "https://github.com/RonP3B/WebPokedex",
    projectUrl: "https://foremost-sulky-salmon.glitch.me/",
  },
  {
    id: 5,
    name: "Itla-Indice",
    type: "Web Application",
    description:
      "ITLA-Indice is an innovative web application designed for students from ITLA to simplify and streamline the process of calculating a user's grade point average (GPA) with ease and precision.",
    tools: ["javascript", "react-js", "sass", "css"],
    images: getAllImages("images/projects/ItlaIndice/", 5),
    source: "https://github.com/RonP3B/Itla-Indice",
    projectUrl: "https://itla-indice.netlify.app/",
  },
  {
    id: 6,
    name: "BookApp",
    type: "Web Application",
    description:
      "The web application is a server-side rendered platform developed using the Node.js runtime environment. Its primary functionality revolves around managing books, offering a comprehensive CRUD (Create, Read, Update, Delete) system for book-related data.",
    tools: [
      "javascript",
      "jquery",
      "nodejs",
      "expressjs",
      "handlebars",
      "sequelize-orm",
      "html",
      "sass",
      "css",
      "bootstrap",
    ],
    images: getAllImages("images/projects/BookApp/", 9),
    source: "https://github.com/RonP3B/Book-WebApp",
    projectUrl: "https://zany-radial-ophthalmologist.glitch.me/",
  },
  {
    id: 7,
    name: "Connect4",
    type: "Desktop Application",
    description:
      "Connect4 is a project focused on creating an AI that excels at playing Connect 4. It utilizes advanced techniques like minimax with alpha-beta pruning and implements an Iterative Deepening Search (IDS) algorithm. These strategies enable the AI to make strategic decisions efficiently and adapt to various game complexities, making it a formidable Connect 4 player.",
    tools: ["python"],
    images: getAllImages("images/projects/Connect4/", 3),
    source: "https://github.com/RonP3B/Connect4",
    projectUrl: null,
  },
  {
    id: 8,
    name: "Nomina WebApp",
    type: "Web Application",
    description:
      "Nomina WebApp is a user-friendly web application specifically crafted to streamline and simplify the intricate task of managing a company's payroll. This intuitive tool offers comprehensive features that facilitate the smooth processing and organization of payroll data, making it an invaluable asset for businesses seeking efficiency and accuracy in their payroll management processes.",
    tools: [
      "javascript",
      "jquery",
      "nodejs",
      "expressjs",
      "handlebars",
      "sequelize-orm",
      "html",
      "css",
      "bootstrap",
    ],
    images: getAllImages("images/projects/NominaWeb/", 12),
    source: "https://github.com/RonP3B/NominaWebApp/tree/main",
    projectUrl: "https://chip-stump-lady.glitch.me/",
  },
  {
    id: 9,
    name: "QuickLink",
    type: "Web Application",
    description:
      "QuickLink is a user-friendly web application for creating short links in seconds. Simplify and condense long URLs with ease using QuickLink. Share, track, and manage your links effortlessly.",
    tools: ["javascript", "react-js", "sass", "css", "bootstrap"],
    images: getAllImages("images/projects/QuickLink/", 5),
    source: "https://github.com/RonP3B/QuickLink-Frontend",
    projectUrl: "https://roqk.netlify.app/",
  },

  {
    id: 10,
    name: "QuickLink-API",
    type: "Application Programming Interface",
    description:
      "RESTful API designed to efficiently handle link management with essential CRUD (Create, Read, Update, Delete) functionality and secure JSON Web Tokens authentication. It's built using Node.js and Express, ensuring robust and reliable performance.",
    tools: [
      "javascript",
      "nodejs",
      "expressjs",
      "sequelize-orm",
      "jwt-authentication",
    ],
    images: getAllImages("images/projects/ApiProject/", 1),
    source: "https://github.com/RonP3B/QuickLink-Backend/tree/main",
    projectUrl: null,
  },

  {
    id: 11,
    name: "Social Media",
    type: "Web Application",
    description:
      "Server-side rendered web-app built with Node.js and Handlebars as the rendering engine. It is a basic social media platform with features such as user registration, friends management, content creation, events management.",
    tools: [
      "javascript",
      "jquery",
      "nodejs",
      "expressjs",
      "handlebars",
      "sequelize-orm",
      "html",
      "sass",
      "css",
      "bootstrap",
    ],
    images: getAllImages("images/projects/SocialMedia/", 5),
    source: "https://github.com/RonP3B/SocialMedia",
    projectUrl: "https://iced-reliable-hydrant.glitch.me/",
  },
  {
    id: 12,
    name: "CV-Generator",
    type: "Web Application",
    description:
      "CV-Generator is a simple web application that helps users create CVs quickly and easily. Just fill out a form, and CV-Generator will generate a basic CV for you. It's perfect for those looking for a straightforward way to create a CV online.",
    tools: ["javascript", "sass", "css", "html"],
    images: getAllImages("images/projects/CV-Generator/", 2),
    source: "https://github.com/RonP3B/CV-Generator",
    projectUrl: "https://roniell-cv-generator.netlify.app/",
  },
  {
    id: 13,
    name: "Basic Module Inscription",
    type: "Web Application",
    description:
      "Basic Module Inscription is a straightforward web application designed to simplify the process of scheduling module inscriptions. With a user-friendly interface, this tool allows users to easily add and manage module inscriptions.",
    tools: ["html", "sass", "css", "jquery", "javascript"],
    images: getAllImages("images/projects/BasicModuleInscription/", 3),
    source: "https://github.com/RonP3B/BasicInscriptionModule",
    projectUrl: "https://inscription-module.netlify.app/",
  },
  {
    id: 14,
    name: "Movies Manager",
    type: "Web Application",
    description:
      "Movies Manager is a Node.js-powered web app for easily managing your movie collection. Perform CRUD operations effortlessly, with a user-friendly interface and stylish design.",
    tools: [
      "javascript",
      "jquery",
      "nodejs",
      "expressjs",
      "handlebars",
      "sequelize-orm",
      "html",
      "sass",
      "css",
      "bootstrap",
    ],
    images: getAllImages("images/projects/MoviesManager/", 3),
    source: "https://github.com/RonP3B/Movies-Manager",
    projectUrl: "https://oil-sneaky-jewel.glitch.me/",
  },
  {
    id: 15,
    name: "RoCocktails",
    type: "Web Application",
    description:
      "RoCocktails is a web application that lets users search for and explore cocktail recipes and details. Discover new drinks and learn how to make them with this easy-to-use cocktail resource.",
    tools: ["javascript", "reactjs", "sass", "html", "css"],
    images: getAllImages("images/projects/RoCocktails/", 2),
    source: "https://github.com/RonP3B/RoCocktails-react",
    projectUrl: "https://ro-cocktails.netlify.app/",
  },
  {
    id: 16,
    name: "Personal Website Design",
    type: "Web Site",
    description:
      "A basic personal website showcasing my portfolio and skills just using html and css-sass.",
    tools: ["html", "sass", "css"],
    images: getAllImages("images/projects/PersonalWebsiteDesign/", 4),
    source: "https://github.com/RonP3B/PersonalWebsiteDesign",
    projectUrl: "https://roniellpersonalwebsite.netlify.app/",
  },
  {
    id: 17,
    name: "ItlaMaterias-API",
    type: "Application Programming Interface",
    description:
      "API designed to provide seamless access to comprehensive information about the careers and subjects offered by the Instituto Tecnológico de Las Américas (ITLA) institution.",
    tools: ["javascript", "nodejs", "expressjs", "mysql"],
    images: getAllImages("images/projects/ApiProject/", 1),
    source: "https://github.com/RonP3B/Api-ItlaMaterias",
    projectUrl: "https://api-itla-materias.vercel.app/carreras",
  },
  {
    id: 18,
    name: "SellPoint",
    type: "Desktop Application",
    description:
      "An application featuring a dynamic Splash Screen with unique visuals. This app boasts a secure Login system, authenticating users against the 'Entities Table' with UserNameEntidad and PasswordEntidad. In case of no credentials, it redirects to 'Entity Maintenance' for entity creation.",
    tools: ["c#", "sql server"],
    images: getAllImages("images/projects/SellPoint/", 3),
    source: "https://github.com/RonP3B/SellPoint",
    projectUrl: null,
  },
  {
    id: 19,
    name: "Gestor Usuarios",
    type: "Desktop Application",
    description:
      "An app that offers secure user login and registration, allowing users to access their accounts with usernames and hidden passwords. After logging in, users can view a list of all registered users with their names, phone numbers, and email addresses.",
    tools: ["java", "mysql"],
    images: getAllImages("images/projects/GestorUsuarios/", 4),
    source: "https://github.com/RonP3B/GestionUsuarios-Tarea4",
    projectUrl: null,
  },
  {
    id: 20,
    name: "BasicMenu",
    type: "Desktop Application",
    description:
      "Desktop application created as part of a software development introduction course. It is a menu with options to capture values, generate multiplication tables, check primality, display matrix diagonals, and exit.",
    tools: ["java"],
    images: getAllImages("images/projects/BasicMenu/", 4),
    source: "https://github.com/RonP3B/Proyecto---Introd.Algoritmos",
    projectUrl: null,
  },
  {
    id: 21,
    name: "CitaMedica",
    type: "Desktop Application",
    description:
      "desktop application designed as part of a user-centered design course, with a primary focus on design principles rather than functionality. This project, coded primarily in C#, aims to provide an interactive and user-friendly interface for a medical appointment scheduling system.",
    tools: ["c#", "sql server"],
    images: getAllImages("images/projects/CitaMedica/", 4),
    source: "https://github.com/RonP3B/CitaMedica",
    projectUrl: null,
  },
];

export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  tools: Array<string>;
  images: Array<string>;
  source: string;
  projectUrl: string | null;
}
