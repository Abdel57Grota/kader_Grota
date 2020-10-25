/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Grota Kader",
  logo_name: "Gr.abdel_57",
  subTitle:
    "Etudiant depuis la rentrée 2015-2016 à la faculté des sciences et techniques de béni Mellal Université Sultan Moulay Slimane, j’y ai validé ma Licence Informatique en 2018 puis  le Master  « Informatique Décisionnelle » en 2020. Cinq années extrêmement formatrices, qui m’ont permis de consolider mes connaissances en informatique, notamment en ce qui concerne système d’information, base de données, programmation, busines intelligentes ….",
  resumeLink:
    "https://drive.google.com/file/d/18W1Liv1wwk57H3KqFHTsEcNEiXPnCvX_/view?usp=sharing",
  portfolio_repository: "https://github.com/Abdel57Grota",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Abdel57Grota",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Abdel57Grota",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kader-grota-377bba191/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:gr.abdel.pro.75@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/kader.grota/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kader_grota/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Science des données et IA",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Développer des modèles prêts pour la production hautement évolutifs pour divers cas d'utilisation en deeplearning et statistiques",
        "⚡  Expérience de travail avec des projets de vision par ordinateur et de PNL",
        "⚡ Modélisation quantitative complexe pour la prévision dynamique et l'analyse de séries chronologiques",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Développement Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création d'un front-end de site Web réactif à l'aide de React-Redux",
        "⚡ Développement d'applications mobiles à l'aide de Flutter, React Native et d'applications Android solo à l'aide de Kotlin",
        "⚡ Création d'un backend d'application dans Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
       
      ],
    },
    {
      title: "Infra-architecture cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡  Expérience de travail sur plusieurs plates-formes cloud",
        "⚡ Hébergement et maintenance de sites Web sur des instances de machines virtuelles avec intégration de bases de données",
        "⚡ Déploiement de modèles d'apprentissage profond sur le cloud à utiliser sur les appareils mobiles",
        "⚡ Configuration des tâches de streaming de la base de données au serveur ou vice-versa sur GCP et AWS",
      ],
      softwareSkills: [
       
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
     
       
      ],
    },
    {
      title: "Conception UI / UX",
      fileName: "DesignImg",
      skills: [
        "⚡ Conception d'une interface utilisateur très attractive pour les applications mobiles et Web",
        "⚡ Personnalisation des conceptions de logo et création de logos à partir de zéro",
        "⚡  Création du flux de fonctionnalités applicatives pour optimiser l'expérience utilisateur",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Faculté des Sciences et Techniques Béni Mellal",
      subtitle: "Master Informatique Décisionnelle ",
      logo_path: "logo-univ.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Le Master Informatique Décisionnelle (MID) est un Master Sciences et Techniques avec ouverture sur la recherche.",
        "⚡  j'ai suivi des cours sur Processus de décision Markovien, la Data Science, Intelligence Artificielle et Datawarehouse.",
        "⚡ Aussi  (bases de données, Data Mining, nouvelles technologies de l’information, etc) et une capacité à modéliser les problèmes de décision à travers la maîtrise des différents outils de recherche opérationnelle.",
      ],
      website_link: "https://fstbm.ac.ma/",
    },
    {
      title: "Faculté des Sciences et Techniques Béni Mellal",
      subtitle: "Licence Sciences et Techniques En Informatique",
      logo_path: "logo-univ.png",
      alt_name: "IIITDM Kurnool",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ Avoir validé les 4 premiers semestres S1, S2, S3 et S4 du parcours MIP, MIPC.",
        "⚡ L'objectif de la Licence Informatique est de fournir une culture de base scientifique, d'enseigner les bases fondamentales de la discipline informatique .",
        "⚡ j'ai suivi des cours  Programmation Web , Systèmes d’information (SI) , Technologies J2EE et Programmation orientée objet : Langage Java ect  .",
      ],
      website_link: "https://fstbm.ac.ma/",
    }
  ],

  
};



const certifications = {
  certifications: [
    
  ],
};

// Experience Page
const experience = {
  title: "Expérience",
  subtitle: "Travail  &  stage",
  description:
    " Mes expériences professionnelles, m’ont permis de découvrir la vie professionnelle. J’y ai pu mettre à l’épreuve ma faculté d’adaptation, confronté aux difficultés inhérentes à une telle situation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Bibile du VTC CallX",
          company: "Bibile du Vtc",
          company_url: "https://www.instagram.com/callxcentre/",
          logo_path: "bible.png",
          duration: "Juillet 2020 - Fin Août 2020",
          location: "Kénitra, Maroc",
          description:
            "J'étais chargé de faire du reporting , Data vizualisation",
          color: "#0879bf",
        },    
      ],
    },
    {
      title: "Stages",
      experiences: [
        {
          title: "Système de recommandations : Etude comparative des algorithmes de filtrage collaboratif",
          company: "Mémoire  Pour obtenir le Master délivrer par Faculté des Sciences et Techniques Béni Mellal",
          company_url: "hhttps://fstbm.ac.ma/",
          logo_path: "logo-univ.png",
          duration: "Février-Aôut 2020",
          location: "Work at home , Maroc",
          description: "Afin de trouver une solution au problème de la stabilité des systèmes de recommandation par rapport au profil dynamique de l’utilisateur et pour offrir des recommandations diversifiées aux utilisateurs, tout en considérant les effets de l’évolutivité de données, nous présentons dans ce mémoire  un système de recommandation capable de générer des recommandations diversifiées qui répondent aux différents choix et intérêts de l’utilisateur, en élaborant des algorithmes de recommandations permet aux utilisateurs d’appartenir à différents groupes, ayant des intérêts similaires , les voisins les plus proches sont sélectionnés en utilisant une nouvelle mesure de similarité basée sur la diffé- rence entre les degrés d’appartenance de l’utilisateur actif et les membres de groupes similaires et  une méthode de factorisation en matrice . ",
          color: "#ee3c26",
        },
        {
          title: "Développement et la mise en place d’un ensemble d’outils pour l’integration ,la visualisation  et l’analyse des données Big Data  : Appache zeppelin – R Shiny",
          company: "Haut Commesariat Au Plan Maroc",
          company_url: "https://www.hcp.ma/",
          logo_path: "hcp.png",
          duration: "Juillet-Aôut 2019",
          location: "Rabat, Maroc",
          description: "Stage à la direction de la statistique du Haut Commissariat Au Plan – Division des Sytèmes d’informations.j’ai eu L’occasion de Développer et de Mettre en place un ensemble d’outils pour l’intégration et la visualisation et l’analyse des données Big Data voire Apache Zeppelin, R Shiny, QlikView, QlikSense.Ce stage m’ a permis d’élargir      mes       connaissances       en       traitement       de       données       en       grande  dimension  et donc d’acquérir un niveau poussé dans la manipulation de diverses techniques algorithmique de Machine Learning et big data ",
          color: "#ee3c26",
        },
        {
          title: "Stage de PFE à l’entité informatique site de Khouribga du Group OCP",
          company: "Le groupe OCP (anciennement Office chérifien des phosphates) ",
          company_url: "https://www.ocpgroup.ma/",
          logo_path: "ocp.png",
          duration: "Mai - Avril 2018",
          location: "Ocp , Khouribga",
          description:
            "Développement d’une application reporting service desk & aide à la décision. Un stage (Projet de fin d’études), effectué en 2018 à l’entité Informatique du groupe OCP à Khouribga, m’a permis de découvrir la vie professionnelle. J’ai pu développer une Application Reporting Service Desk & aide à la décision. Ce projet a pour but d’introduire, en premier lieu, une informatique décisionnelle, consistait à mettre en place un système de Reporting pour le service informatique de l’Office Chérifien des Phosphates, site de Khouribga. Cette solution améliore la qualité des rapports générés en fiabilisant et en optimisant le processus de génération. Ceci rend la prise de décision sensiblement plus efficace. J’ai pu respecter au cours de ce projet les différentes étapes de la chaîne décisionnel. Une assimilation des normes ITIL, et plus particulièrement celle concernant la gestion des incidents, a été un prérequis nécessaire pour réaliser ce projet. Par la suite, j’ai pu recenser les différents indicateurs et axes d’analyse correspondant à chaque indicateur et établit la matrice qui permet de les croiser. Ce croisement a permis de dresser la conception du modèle dimensionnel du Data Warehouse organisé en constellation. Ensuite j'ai pu aborder l’architecture technique de notre solution basée sur la technologie Microsoft BI. La mise en œuvre de la solution commence par l’alimentation du Data Warehouse grâce à l’outil SSIS pour aboutir à la génération des états de restitution avec l’outil SSRS.Au terme de ce projet, notre système de Reporting a pu répondre aux exigences des utilisateurs finaux et satisfaire leurs besoins, en leur offrant un accès optimisé à des informations pertinentes. Ce projet fut une expérience très enrichissante, il m’a permis de me sensibiliser aux normes ITIL, de consolider mes connaissances théoriques en modélisation multidimensionnelle, ainsi que de découvrir les différents composants de la suite Microsoft BI à savoir SSIS, SSAS et SSRS. J’ai pu suggérer de généraliser le système pour tous les services informatiques de L’OCP. Cela permettrait aux décideurs d’avoir rapidement une visibilité plus fiable sur la facturation de la prestation de HP-CDG.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "freelancer",
      experiences: [
       
     
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Mes projets utilisent une grande variété d'outils technologiques les plus récents. Ma meilleure expérience est de créer des projets de science des données et de les déployer sur des applications Web à l'aide d'une infrastructure cloud..",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Me Contacter",
    profile_image_path: "me.png",
    description:
      "Je suis disponible sur presque tous les médias sociaux. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures..",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Pour l'autonomisation fondamentale individuelle, j'aime écrire des leçons puissantes qui créent un impact sur chacun des lecteurs individuellement pour changer le cœur de leur caractère..",
    link: " ",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "243  16 Novembre - Bloc R - Quartier Nahda , khouribga ",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/pUnuoaRPxZTJeycz9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+212 707431231",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
