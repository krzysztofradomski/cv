import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { CodepenIcon } from "lucide-react";
import { start } from "repl";

export const RESUME_DATA = {
  name: "Krzysztof Radomski",
  initials: "KRS",
  location: "REMOTE / Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about: "Senior Frontend Engineer",
  summary:
    "Senior Frontend Engineer with over seven years of experience in building user interfaces, specializing in React.js. Proven track record in enhancing user experiences and team productivity across the software development lifecycle. Seeking a hands-on coding role where I can contribute to product decisions and technology choices.",
  avatarUrl: "https://avatars.githubusercontent.com/u/11980348?v=4",
  personalWebsiteUrl: "https://cv-radomski.vercel.app/",
  contact: {
    email: "krzysztof_radomski@icloud.com",
    tel: "+48 606699693",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/krzysztof-radomski/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/krzysztofradomski",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    // {
    //   school: "Others",
    //   degree: null,
    //   certificates: [
    //     {
    //       "React Summit 2024":
    //         "https://portal.gitnation.org/person/krzysztof_radomski_98374/certificates/20627",
    //     },
    //     {
    //       "JSNation 2024":
    //         "https://portal.gitnation.org/person/krzysztof_radomski_98374/certificates/18629",
    //     },
    //     {
    //       "AI Devs 2":
    //         "https://credsverse.com/credentials/ec7b7314-f854-4c67-82e5-6437007ef425",
    //     },
    //   ],
    // },
    {
      school: "Others",
      degree: null,
      certificates: [
        {
          "AI Devs 2":
            "https://credsverse.com/credentials/ec7b7314-f854-4c67-82e5-6437007ef425",
        },
        {
          "Fullstack Foundations":
            "https://www.epicweb.dev/api/certificate?moduleId=deb1eeaf-7f3a-4dff-81a1-9f07826693c2&userId=a3e15ab3-347c-4161-9f0a-486a4ac82332",
        },
        {
          "Pro Web Forms":
            "https://www.epicweb.dev/api/certificate?moduleId=9abe3ebc-46e9-4b9e-a7b0-347c83f83941&userId=a3e15ab3-347c-4161-9f0a-486a4ac82332",
        },
      ],
    },
    {
      school: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/krzysztofradomski",
      degree: null,
      certificates: [
        {
          "QA Certification":
            "https://www.freecodecamp.org/certification/krzysztofradomski/quality-assurance-v7",
        },
        {
          "API Certification":
            "https://www.freecodecamp.org/certification/krzysztofradomski/back-end-development-and-apis",
        },
        {
          "Frontend Certification":
            "https://www.freecodecamp.org/certification/krzysztofradomski/legacy-front-end",
        },
        { "and others": "https://www.freecodecamp.org/krzysztofradomski" },
      ],
    },
    {
      school: "University of Warsaw",
      degree: "Master's Degree in English Studies",
      certificates: [],
      start: "2004",
      end: "2009",
    },
  ],
  work: [
    {
      company: "Netigate",
      link: "https://netigate.io",
      badges: ["Warsaw, Stockholm and remote"],
      title: "Frontend Developer → Frontend Tech Lead",
      logo: GitHubIcon,
      start: "Jan 2022",
      end: null,
      stack:
        "Javascript, Typescript, React, Redux, PrimeReact, Tailwind, Storybook, Playwright, Azure",
      description: [
        "Co-introduced Typescript to the org by migrating a portal app from jQuery to React, resulting in performance gains and DX improvement",
        "Co-created modern React app template adopted in 12 production applications further streamlining development process",
        "Authored Docker and Azure based microfrontend architecture for netigate.io/ex platform improving scalability and maintainability",
        "Supervised the localization of the said platform into 6 languages",
        "Developed custom ESLint plugin for enhanced code quality and consistency",
        "Created 2 embedded JS widgets to support new survey distribution channels",
        "Introduced Playwright for end-to-end testing of core platform features",
        "Provided mentorship to junior developers and technical leadership to the team",
        "Participated in hiring process, code reviews, ADRs and others",
        "Host of the biweekly frontend focused tech talks",
      ],
    },
    {
      company: "Neofonie",
      link: "https://neofonie.de",
      badges: ["Warsaw, Berlin and remote"],
      title: "Frontend Software Engineer",
      logo: GitHubIcon,
      start: "Jun 2019",
      end: "Dec 2021",
      stack:
        "Javascript, Typescript, React, Redux, Material UI, HTML, CSS, Webpack, Freemarker, Jest",
      description: [
        "Implemented support for multiple devices and fixed numerous bugs in React based browser client in a home automation system; later served as part-time reviewer and consultant",
        "Created various HTML widgets and UI features for a newspaper website",
        "Created admin UI for a data management project using React and RTK Query",
        "Enhanced website features like infinite scroll lists; added realtime map support; optimized CSS; handled file uploads and increased UI code coverage to over 75% using Jest for a new consultant platform",
      ],
    },
    {
      company: "Skillbill (now: Finx)",
      link: "https://finxit.co/",
      badges: ["remote"],
      title: "React Developer",
      logo: GitHubIcon,
      start: "Mar 2019",
      end: "Dec 2019",
      stack:
        "React, TypeScript, JavaScript, HTML, CSS, Jest, Formik, Redux, Material UI",
      description: [
        "Utilized React, TypeScript, Material UI and other technologies for contract work involving maintenance and feature development for a real-time TV voting app and an insurance manager PWA app, improving user experience and functionality",
      ],
    },
    {
      company: "GogoApps",
      link: "https://gogoapps.io/",
      badges: ["Warsaw"],
      title: "JavaScript Developer",
      logo: GitHubIcon,
      start: "Mar 2018",
      end: "Mar 2019",
      stack:
        "React, Redux, Chartjs, Threejs, Javascript, Gatbsy, Typescript, Redux, React Testing Library",
      description: [
        "Led frontend development for a cryptocurrency news portal using React, Redux, Chartjs; my first commercial React project",
        "Contributed to a series of educational applications for Arizona State University using React and Three.js; developed numerous components and UI features",
        "Worked on company's website and several smaller React projects and pocs",
      ],
    },
    {
      company: "QuarticON",
      link: "https://www.quartic.com",
      badges: ["Warsaw"],
      title: "Junior JavaScript Developer → Tech Support -> Support Lead",
      logo: GitHubIcon,
      start: "Nov 2017",
      end: "March 2018",
      stack: "JavaScript, SQL, HTML, CSS, PHP, AWS",
      description: [
        "Developed and implemented a recommendation engine for 10+ e-commerce platforms using JavaScript, HTML, CSS to create custom shopping recommendations for users",
        "Transitioned to a tech support role, improved customer satisfaction through timely resolution of technical issues",
      ],
    },
  ],
  skills: {
    Languages: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Markdown",
      "SQL",
      "Polish",
      "English",
      "German",
    ],
    "Frameworks and libraries": [
      "React",
      "Redux",
      "Tailwind",
      "Strapi",
      "Jest",
      "Playwright",
      "Storybook",
      "Vite",
      "Node",
    ],
    Other: [
      "Git",
      "Azure",
      "Firebase",
      "Vercel",
      "Supabase",
      "Digital Ocean",
      "and more",
    ],
  },
  projects: [
    {
      company: "ADP",
      title: "Frontend Architect Consultant",
      start: "2023",
      end: "2024",
      techStack: [
        "2023/2024",
        "Side Project",
        "React",
        "TypeScript",
        "Kendo UI",
        "Redux",
      ],
      description: [
        "Frontend Architect Consultant for ADP's Payroll App Migration Project. Led the transition from a Windows native app to a browser-based solution, using React, Redux and TypeScript. The successful implementation is set for production in 2024.",
      ],
      logo: null,
      link: "https://pl.adp.com/",
    },
    {
      company: "FAIRYTAILS - pet project",
      title: "Fullstack Developer",
      start: "2023",
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
      description: [
        "Developed an AI-powered fairy tale generator. Utilized TypeScript, Next.js, Tailwind, Deno, Postgres, and OpenAI to create engaging children's stories from simple prompts. The project is currently paused due to challenges with image generation consistency.",
      ],
      logo: null,
      link: "https://fairytails.vercel.app",
    },
    {
      company: "Teatr Wybrzeże",
      title: "Fullstack Developer",
      start: "2022",
      end: "2023",
      techStack: [
        "2022/2023",
        "Side Project",
        "Next.js",
        "Strapi",
        "Node.js",
        "Tailwind",
      ],
      description: [
        "Led backend development for the new website of Teatr Wybrzeże, a Polish theatre. Implemented Next.js and Strapi for site functionality and Tailwind for styling. Managed all devops work and third-party integrations including analytics, alerting, image hosting, and mailing.",
      ],
      logo: null,
      link: "https://teatrwybrzeze.pl/realizacja",
    },
    // {
    //   company: "math4kids - pet project",
    //   title: "Fullstack Developer",
    //   start: "2021",
    //   techStack: ["2021", "Pet Project", "React", "React Native", "TypeScript"],
    //   description: [
    //     "A simple PWA and also a native app to play around with mathemathical operations. It was a fun project to learn React Native.",
    //   ],
    //   logo: null,
    //   link: "https://math4kids-pwa.web.app/",
    // },
    {
      company: "Storybook Vitest Addon - open source project",
      title: "JavaScript Developer",
      start: "2021",
      techStack: ["2021", "Pet project", "React", "Storybook", "Vite.js"],
      description: [
        "Developed a custom Storybook plugin to display Vitest results in a Storybook's component tab.",
      ],
      logo: null,
      link: "https://storybook.js.org/addons/storybook_vitest_addon",
    },
    {
      company: "Tanks! - pet project",
      title: "Fullstack Developer",
      start: "2019",
      techStack: [
        "2019",
        "Pet Project",
        "Javascript",
        "Socket.io",
        "CSS",
        "HTML",
        "Firebase",
      ],
      description: [
        "Implemented a browser version of an old Nintendo game, Battle City, using Javascript and canvas for animations and websockets for realtime multiplayer feature.",
      ],
      logo: null,
      link: "https://github.com/krzysztofradomski/tanks2",
    },
    // {
    //   company: "Compadre - open source project",
    //   title: "JavaScript Developer",
    //   start: "2018",
    //   techStack: ["2018", "Pet Project", "JavaScript"],
    //   description: ["A random name generator, my first open source project."],
    //   logo: null,
    //   link: "https://www.npmjs.com/package/compadre",
    // },
  ],
  rewards: [
    <p key="1">
      Directio&apos;s (Polish partner of Netigate) <i>Climber</i> in February
      2024
    </p>,
    <p key="2">
      Netigate&apos;s <i>Team Player</i> in March 2023
    </p>,
    <p key="3">references available on my LinkedIn profile</p>,
  ],
} as const;
