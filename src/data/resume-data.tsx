import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Krzysztof Radomski",
  initials: "KRS",
  location: "Warszawa, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
  "Experienced Frontend Developer adept at creating products and structuring solutions.",
  summary:
  "As a seasoned Frontend Developer, my extensive experience spans across product development and architecture. Although much of my career was spent as an individual contributor, my focus has shifted to technological leadership since 2023. I have a successful track record of working remotely with corporations based in Europe and America. At present, my passions lie in exploring Artificial Intelligence and LLMs.",
  avatarUrl: "https://avatars.githubusercontent.com/u/11980348?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "krzysztof_radomski@icloud.com",
    tel: "+48606699693",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/krzysztofradomski",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/krzysztof-radomski/",
        icon: LinkedInIcon,
      },
      {
        name: "CodePen",
        url: "https://codepen.io/stronginarm/pens/popular",
        icon: GitHubIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Warsaw",
      degree: "Master's Degree in English Studies",
      start: "2004",
      end: "2009",
    },
  ],
  work: [
    {
      company: "Netigate",
      link: "https://netigate.io",
      badges: ["Remote"],
      title: "Frotend Developer → Frontend Tech Lead",
      logo: GitHubIcon,
      start: "2021",
      end: null,
      description:
      "Implemented novel features and developed internal libraries and templates, established a micro-frontend architecture for a brand-new portal, designed the frontend of an new embedable widget, and lead platform localization efforts. I am proud to have led and mentored a team while simultaneously collaborating with other departments on roadmap creation and sprint execution. Technologies: React, TypeScript, and cloud-based tools."
    },
    {
      company: "Neofonie",
      link: "https://neofonie.de",
      badges: ["Hybrid"],
      title: "Frontend Software Engineer",
      logo: GitHubIcon,
      start: "2019",
      end: "2021",
      description:
      "Developed a new portal for Weser Kurier, implemented a variety of web UI features for a Radamacher home automation system, and assisted in the construction of an HRS trading platform from the ground up. Technologies: JavaScript, React, TypeScript, and FreeMarker."
    },
    {
      company: "Skillbill",
      link: "https://skillbill.io/",
      badges: ["remote"],
      title: "React Developer",
      logo: GitHubIcon,
      start: "2019",
      end: "2019",
      description:
      "I served as a consultant for the development and maintenance of portals for a German insurance company and a Latvian TV production agency. Technolgoies: React and TypeScript, and others."
    },
    {
      company: "GogoApps",
      link: "https://gogoapps.io/",
      badges: [],
      title: "JavaScript Developer",
      logo: GitHubIcon,
      start: "2018",
      end: "2019",
      description:
      "Contributed to the development of several educational applications for the University of Austin, Texas, and played a key role in creating a cryptocurrency portal from its initial stages. Additionally, I have participated in a few minor SSR projects. Technolgoies: React, JavaScript, TypeScript, Three.js, and Gatsby."
    },
    {
      company: "QuarticON",
      link: "https://www.quartic.com",
      badges: [],
      title: "Junior JavaScript Developer → Tech Support -> Tech Support Lead",
      logo: GitHubIcon,
      start: "2017",
      end: "2018",
      description: "Implemented the main product - recommendation engine - for many e-commerce platforms, after which I transitioned into a tech support role. Technologies: JavaScript, SQL.",
    },
    {
      company: "self-employed",
      link: "",
      badges: [],
      title: "linguist",
      logo: GitHubIcon,
      start: "2010",
      end: "2017",
      description: "Self-employed linguist, translator and ESL teacher.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "REST",
    "CSS/HTML",
    "Docker",
    "cloud",
  ],
  projects: [
    {
      title: "ADP HR App",
      techStack: [
        "Side Project",
        "React",
      ],
      description: "Hired as a React consultant architect to help with taking a native app to the web. It has been a success and the project is scheduled for production.",
      logo: null,
      link: {
        label: "adp.com",
        href: "https://adp.com/",
      },
    },
    {
      title: "Teatr Wybrzeże",
      techStack: ["Side Project", "Next.js", "Strapi"],
      description:
        "New portal for a Polish theatre; it was a complete solution, from design to deployment, website and CMS.",
      logo: null,
      link: {
        label: "Teatr Wybrzeże",
        href: "https://teatrwybrzeze.pl/realizacja",
      },
    },
    {
      title: "Fairy Tails",
      techStack: ["Side Project", "Next.js", "Typescript", "AI"],
      description:
        "A fairy tale generator that uses AI to generate stories based on user input.",
      logo: null,
      link: {
        label: "Fairytails",
        href: "https://fairytails.vercel.app/",
      },
    },
    {
      title: "Storybook Vitest Addon",
      techStack: ["open source", "React", "Storybook", "Vite.js"],
      description:
       "A Storybook addon that allows you to display unit test results.",
      logo: null,
      link: {
        label: "storybook_vitest_addon",
        href: "https://www.npmjs.com/package/storybook_vitest_addon",
      },
    },
    {
      title: "Tanks!",
      techStack: ["javascript", "canvas", "websockets"],
      description: "My own take at the classic arcade game Battle City - featuring realtime multiplayer cooperation.",
      logo: null,
      link: {
        label: "tanks",
        href: "https://www.npmjs.com/package/tanks2",
      },
    },
    {
      title: "Compadre",
      techStack: ["open source", "javascript"],
      description: "A random name generator, my first open source project.",
      logo: null,
      link: {
        label: "compadre",
        href: "https://www.npmjs.com/package/compadre",
      },
    },
  ],
} as const;
