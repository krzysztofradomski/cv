import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { CodepenIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Krzysztof Radomski",
  initials: "KRS",
  location: "Warszawa, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about: "Frontend Software Engineer with a Builder's Heart.",
  summary:
    "I am a product engineer with over seven years of expertise in building user interfaces. My passion lies in web technologies, and I am dedicated to enhancing user and team experiences through my work. While I specialize in React.js, my experience spans the entire software development lifecycle, from meticulous craftsmanship to architecture and leadership.",
  avatarUrl: "https://avatars.githubusercontent.com/u/11980348?v=4",
  personalWebsiteUrl: "https://cv-radomski.vercel.app/",
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
        icon: CodepenIcon,
      },
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
      badges: ["remote"],
      title: "Frontend Developer → Frontend Tech Lead",
      logo: GitHubIcon,
      start: "2021",
      end: null,
      stack:
        "Javascript, Typescript, React, Redux, PrimeReact, Tailwind, Storybook, Playwright, Azure",
      description:
        "Migrated a customer app from jQuery to React; co-created a modern React app template now used in 12 production applications.  Co-authored 2 component libraries and platform localization; created a custom Eslint plugin, 2 embedded widgets, numerous documents, reviews, proof of concepts and more. Author of the microfrontend architecture powering netigate.io/ex platform. I remove obstacles and help others succeed in all their frontend endeavors.",
    },
    {
      company: "Neofonie",
      link: "https://neofonie.de",
      badges: ["hybrid"],
      title: "Frontend Software Engineer",
      logo: GitHubIcon,
      start: "2019",
      end: "2021",
      stack:
        "Javascript, Typescript, React, Redux, Material UI, HTML, CSS, Webpack, Freemarker, Jest",
      description:
        "Implemented support for numerous devices, including smart bulbs, blinds and shutters, cameras, alarm system and fixed numerous bugs in the browser client for Radamaher home automation system; later served as a part time reviewer and consultant on this project. Created numerous widgets, layouts and ui features for the new website for the Weser Kurier regional newspaper. Implemented numerous UI features, including infinite scroll lists, map support, css optimizations, file upload handling, and wrote tests to bring the UI code coverage to over 75% for a new consultant platform for HRS.",
    },
    {
      company: "Skillbill (now: Finx)",
      link: "https://finxit.co/",
      badges: ["remote"],
      title: "React Developer",
      logo: GitHubIcon,
      start: "2019",
      end: "2019",
      stack:
        "React, TypeScript, JavaScript, HTML, CSS, Jest, Formik, Redux, Material UI",
      description:
        "Conract work on maintenance and new features development on a realtime tv voting app, and an insurance manager helper PWA app.",
    },
    {
      company: "GogoApps",
      link: "https://gogoapps.io/",
      badges: ["on-site"],
      title: "JavaScript Developer",
      logo: GitHubIcon,
      start: "2018",
      end: "2019",
      stack:
        "React, Redux, Chartjs, Threejs, Javascript, Gatbsy, Typescript, Redux, React Testing Library",
      description:
        "I was the main frontend developer on a cryptocurrency news portal, and it was my first commercial React project. Later, I joined a team that worked on a series of educational applications for Arizona State University, where I contributed alot of components and UI features. Also worked on company's website and few smaller projects and proof of concepts.",
    },
    {
      company: "QuarticON",
      link: "https://www.quartic.com",
      badges: ["on-site"],
      title: "Junior JavaScript Developer → Tech Support -> Tech Support Lead",
      logo: GitHubIcon,
      start: "2017",
      end: "2018",
      stack: "JavaScript, SQL, HTML, CSS, PHP, AWS",
      description:
        "Implemented the main product - recommendation engine - for over 10 e-commerce platforms, also worked on data scrapping anda ta verification. Later, I transitioned into a tech support role.",
    },
    {
      company: "self-employed",
      link: "",
      badges: ["hybrid"],
      title: "linguist",
      logo: GitHubIcon,
      start: "2010",
      end: "2017",
      stack: "Polish, English, German",
      description: "Self-employed linguist, translator and ESL teacher.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js / Next.js",
    "Node.js",
    "REST",
    "CSS/HTML",
    "cloud devops",
  ],
  projects: [
    {
      title: "ADP",
      techStack: [
        "2023/2024",
        "Side Project",
        "React",
        "TypeScript",
        "Kendo UI",
        "Redux",
      ],
      description:
        "As the frontend architect consulant, I set the foundations for taking a Windows native payroll app to the browser. It has been a success and the project is scheduled for production.",
      logo: null,
      link: {
        label: "pl.adp.com",
        href: "https://pl.adp.com/",
      },
    },
    {
      title: "FAIRYTAILS",
      techStack: [
        "2024/paused",
        "Pet Project",
        "TypeScript",
        "Nextjs",
        "Tailwind",
        "Deno",
        "Postgres",
        "Open AI",
      ],
      description:
        "A fairy tale generator that uses AI to create children stories from simple prompts. Paused due to unresolved issues securing a truly consistent image generation model, and lack of time.",
      logo: null,
      link: {
        label: "FAIRYTAILS children stories ",
        href: "https://fairytails.vercel.app/",
      },
    },
    {
      title: "Teatr Wybrzeże",
      techStack: [
        "2022/2023",
        "Side Project",
        "Next.js",
        "Strapi",
        "Node.js",
        "Tailwind",
      ],
      description:
        "New website for a Polish theatre. I created parts of the frontend, and most of the backend. Also, I was responsible for all devops work, and third party integrations like analytics, alerting, image hosting and mailing.",
      logo: null,
      link: {
        label: "Teatr Wybrzeże",
        href: "https://teatrwybrzeze.pl/realizacja",
      },
    },
    {
      title: "math4kids",
      techStack: ["2021", "Pet Project", "React", "React Native", "TypeScript"],
      description:
        "A simple PWA and also a native app to play around with mathemathical operations. It was a fun project to learn React Native.",
      logo: null,
      link: {
        label: "math4kids",
        href: "https://math4kids-pwa.web.app/",
      },
    },
    {
      title: "Storybook Vitest Addon",
      techStack: ["2021", "Pet project", "React", "Storybook", "Vite.js"],
      description:
        "Developed a custom Storybook plugin to display unit test results in a the Storybook's component tab.",
      logo: null,
      link: {
        label: "Storybook Vitest Addon",
        href: "https://storybook.js.org/addons/storybook_vitest_addon",
      },
    },
    {
      title: "Tanks!",
      techStack: [
        "2019",
        "Pet Project",
        "Javascript",
        "Socket.io",
        "CSS",
        "HTML",
        "Firebase",
      ],
      description:
        "A browser version of an old Nintendo game, Battle City. My own take at the classic arcade game, featuring realtime multiplayer using websockets.",
      logo: null,
      link: {
        label: "Tanks! | Battle City Online",
        href: "https://github.com/krzysztofradomski/tanks2",
      },
    },
    {
      title: "Compadre",
      techStack: ["2018", "Pet Project", "JavaScript"],
      description: "A random name generator, my first open source project.",
      logo: null,
      link: {
        label: "compadre",
        href: "https://www.npmjs.com/package/compadre",
      },
    },
  ],
} as const;
