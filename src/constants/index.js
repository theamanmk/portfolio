import { meta, shopify, internship, tesla } from "../assets/images";
import {
    unity,
    ml,
    threejs,
    ps,
    figma,
    mysql,
    unreal,
    skl,
    car,
    contact,
    css,
    estate,
    express,
    git,
    python,
    github,
    html,
    javascript,
    linkedin,
    mongodb,

    nextjs,
    nodejs,
    pricewise,
    react,
    docker,
    reactnative,

    snapgram,
    summiz,
    tailwindcss,
    threads,
    gc,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: mysql,
        name: "mysql",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    }
    ,
    {
        imageUrl: reactnative,
        name: "react native",
        type: "frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
 
    {
        imageUrl: python,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: gc,
        name: "gc",
        type: "cloud",
    },
    
    {
        imageUrl: docker,
        name: "Docker",
        type: "Docker",
    },


    {
        imageUrl: skl,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    

   
    
    {
        imageUrl: figma,
        name: "react native",
        type: "frontend",
    },
    {
        imageUrl: ps,
        name: "react native",
        type: "frontend",
    },
    {
        imageUrl: unity,
        name: "unity",
        type: "game",
    }
    ,
    {
        imageUrl: unreal,
        name: "unreal",
        type: "game",
    }
    ,










];

export const experiences = [
    {
        title: "Internships/Workshops",
        company_name: "",
        icon: internship,
        iconBg: "#accbe1",
        points: [
            "Development and Hands on Implementation of python Django -Camino Infotech",
            "App development using android and firebase",
            "FlyWheel automotive - future of automobiles",
        ],
    },
    {
        title: "Coursera/Udemy",
        company_name: "Certificates",
        icon: tesla,
        iconBg: "#fbc3bc",
    
        points: [
            "Introduction to game development and VR",
            "Python programming for All",
            "User Experience Design essentials - adobe xd ui/ux"
        ],
    },
    {
        title: "Google Certificates",
        company_name: "Cloud & UX",
        icon: shopify,
        iconBg: "#b7e4c7",
   
        points: [
            "Google Cloud Engineering Learning Path (practices with google labs , creating , scaling instances)",
            "Google Foundation of User Experience Design",
            
        ],
    },
    {
        title: "Non-Technical",
        company_name: "Arts",
        icon: meta,
        iconBg: "#a2d2ff",
 
        points: [
            "Rajagiri MUN (model united nations) representative.",
            "Rajagiri Techfest and Artsfest Student in charge of the biggest committee- Utilities.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'My Blog',
        description: 'Developed using Next.js for server-side rendering, ensuring faster loading times and improved SEO. And GraphQL for efficient data retrieval. Uses GraphCMS for an effective content management system.',
        link: 'https://github.com/theamanmk/blog',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Clone of the Threads app developed using React , Next JS and TypeScript enabling users to post and engage in threaded conversations. With datas is stored in MongoDB.',
        link: 'https://github.com/theamanmk/threadapp',
    },
    {
        iconUrl: reactnative,
        theme: 'btn-back-blue',
        name: 'Job Hunt App',
        description: 'Built using React-Native using Expo-cli, delivering real-time job openings through Rapid APIs JSearch API. ',
        link: 'https://github.com/theamanmk/jobhunt_reactnative',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Github Scrapper',
        description: 'GitHub scraper using Python that allows users to input a GitHub account URL. Uses Chrome Driver to open browser to scans all files in a users repositories for specific keywords, such as password or api keys.',
        link: 'https://github.com/theamanmk/github_scrapper',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Mp4 to Mp3 (under development)',
        description: 'Application is under development , which can convert video files to audio files. Uses Python , Kubernetes , RabbitMQ , Docker ,MongoDB and MySQL.',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-yellow',
        name: '3D protfolio using Three JS',
        description: 'The portfolio you are currently browsing , made using three js and react-drei library.',
        link: '',
    },
    {
        iconUrl: ml,
        theme: 'btn-back-white',
        name: 'ML/DL Projects coming soon...',
        description: 'Currently Cooking some End-to-End machine learning projects.',
        link: '',
    }
];