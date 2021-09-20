import { projectStatus } from "~/components/Project/Status";

interface Project{
    projectName: string;    //used for page generation, will be visible in the URL in generated page, use hyphen in place of space.
    HTML_id: string;        //used as HTML id and referenced when scrolling
    heading: string;        //the title in feed form
    year: string;           //the year the project has started
    status: projectStatus;    //the current status of the project
    short_description: string;      //displayed in feed form
    stringArray: string[];          //some tags to indicate what the project uses or is about in feed form

   
    logoArray?: string[];           //the tools used in the project
    link?: string;                  //a link to redirect to, usually the repository on GitHub
    long_description?: string;      //the full description of the project
}

const projects: Project[] = [
    {
        projectName: "project-7",
        HTML_id: "project-7",
        heading: "My homepage redux",
        year: "2021",

        status: "scheduled",
        short_description: "I make a new homepage using all the skills and tools I have acquired.",
        stringArray: ["Next.js", "React"],

        logoArray: [],
        link: "",
        long_description: `My first website and homepage is too mediocre. I make a new website from ground up
            befitting a professional developer.`
    },
    {
        projectName: "project-6",
        HTML_id: "project-6",
        heading: "Animation-oriented website",
        year: "2021",

        status: "scheduled",
        short_description: "A website focusing on animated HTML elements. I also try out multiple locale.",
        stringArray: ["React Framer", "locale"],

        logoArray: ["React", "Typescript"],
        link: "",
        long_description: `With libraries such as React Framer ,one can essentially
            write website as if writing a phone app in React Native. The React ecosystem is entirely about change
            and react. It is only natural to utilise them to enhance the user experience.
            I also try out the locale feature of Next.js to render pages in different languages. It would drastically
            increase the difficulty of managing web content.`
    },
    {
        projectName: "3d-dice-thrower",
        HTML_id: "3d-dice-thrower",
        heading: "3D animation using Typescript",
        year: "2021",

        status: "in progress",
        short_description: "A simple 3D project using popular JS, React frameworks.",
        stringArray: ["three-fiber", "three-cannon", "three.js"],

        logoArray: ["Typescript"],
        link: "",
        long_description: `I found many libraries that greatly simplify the process of rendering 3D objects
            in JS. I put together what I know as a simple project.`,
    },
    {
        projectName: "project-4",
        HTML_id: "project-4",
        heading: "Webpage using GraphQL to fetch data",
        year: "2021",

        status: "in progress",
        short_description: "My first landmark project where I start from UI design, frontend to CICD, analytics.",
        stringArray: ["Next.js", "Apollo", "GraphQL", "Framer"],

        logoArray: ["Nextjs", "Typescript"],
        link: "",
        long_description: `This will be my first complete project where I design the UI, write the frontend, do testing, configure domain name, deploy,
            add analytics.`,
    },
    {
        projectName: "project-summary",
        HTML_id: "project-3",
        heading: "App with Next.js & Tailwind CSS (this project)",
        year: "2021",

        status: "completed",
        short_description: 'This website itself. Powered by Next.js and Tailwind CSS. Has night mode and dynamically generated Table and Content.',
        stringArray: ["Nextjs", "Tailwind", "React", "cypress"],
        
        logoArray: ["Nextjs", "Tailwind", "React", "Typescript"],
        link: "https://github.com/Hasuzawa/central_repository",
        long_description: `I need a centralised place to relay to my other projects. It is going to be very
            small-scale so it is the best opportunity to try out new frameworks, namely Next.js and Tailwind CSS.
            I must say I am surprised at their synergy. In a few places I have done the traditional way of
            importing CSS and apply them. The CSS files will grow with no end without a framework. Here
            most CSS is reduced to a small set of classNames which are string.
                I refactored many parts of the project to keep it as concise and maintainable as possible.
            In the last few projects I always have the feeling I can do better, but the sea of entangled CSS,
            HTML feels like it is almost equivalent of re-writing the whole app. This is definitely the case
            in my first project. I can further improve it but I think my time is better spent on learning more
            on other projects.`,
    },
    {
        projectName: "pizzeria-website-with-reservation-demo",
        HTML_id: "project-2",
        heading: "Pizzeria Reservation with Django, Graphene & React",
        year: "2021",

        status: "on hiatus",
        short_description: `A practice on database modelling and django usage. Also uses extensive
            Graphene GraphQL operations`,
        stringArray: ["Django", "Graphene", "GraphQL"],

        logoArray: ["Django", "Graphene", "GraphQL"],
        link: "https://github.com/Hasuzawa/Pizzeria",
        long_description: `The database model from the last project is too simple. This project aims to address
            that. I used UML to model the database.`,
    },
    {
        projectName: "simulated-online-shop-demo",
        HTML_id: "project-1",
        heading: "Simulated Online Stop with React, Bootstrap & Django",
        year: "2021",

        status: "on hiatus",
        short_description: "A full stack project with React as frontend and Django as backend.",
        stringArray: ["React", "Django", "Bootstrap"],

        logoArray: ["React", "Django", "Bootstrap", "Python", "GraphQL", "Apollo", "Graphene"],
        link: "https://github.com/Hasuzawa/virtual_shop_frontend",
        long_description: `I know I need to know how to interact with API and that was the premise of
            this project. There is REST framework but GraphQL caught my attention. Initially I thought
            it would be similar to SQL, which is not quite the reality. But they do have one thing in
            common: query. Ideally, they should get retrieve what the developer want efficiently.`,
    },
    {
        projectName: "website-with-React-and-Sass",
        HTML_id: "project-0",
        heading: "Website with React & Sass",
        year: "2021",

        status: "completed",
        short_description: "My first project using React, HTML and Sass to build to my homepage.",
        stringArray: ["React","Sass","HTML"],
        
        logoArray: ["React", "Sass", "HTML", "CSS", "Javascript"],
        link: "https://github.com/Hasuzawa/homepage",
        long_description: `This is my first ever project. Honestly it is very mundane. But I put together
            everything I knew then, starting from webpack, configuration, constantly refering to React docs,
            check stackoverflow posts. Considering sometimes even an 1-character mistake and the whole app
            throws an error. I am amazed how programming and internet is even possible, the latter might
            requires sending HTTP request to web server thousands of kilometers away.
                It is difficult for me to imagine, even with many encoding algorithms with self-correct
            mechanism such as Hamming code, a civilisation based on 0 and 1 is possible.
                Perhaps the biggest gain for me from this project is that it motivated me to learn and use
            Typescript. I know C, Java, Javascript and Python when I started, and only Javascript allow
            function arguments to be over-passed and under-passed without default value. This would be
            messy for function with many or complex parameter. I started using Typescript on the next
            project and life is easier.`,
    },
];

export default projects;
export type { Project };