interface Project{
    projectName: string;
    HTML_id: string;
    heading: string;
    year: string;
    status: "completed" | "in progress" | "on hiatus" | "in design";
    short_description: string;
    stringArray: string[];

   
    logoArray?: string[];
    gitHubLink?: string;
    long_description?: string;
}

const projects: Project[] = [
    {
        projectName: "project-4",
        HTML_id: "project-4",
        heading: "testing testing testing testing testing testing testing testing testing testing testing testing",
        year: "2021",

        status: "in progress",
        short_description: "",
        stringArray: ["Nextjs","Tailwind",""],
    },
    {
        projectName: "project-3",
        HTML_id: "project-3",
        heading: "App with Next.js & Tailwind CSS (this project)",
        year: "2021",

        status: "in progress",
        short_description: "",
        stringArray: ["Nextjs", "Tailwind", "React"],
        
        logoArray: ["Nextjs", "Tailwind", "React", "Typescript"],
        gitHubLink: "https://github.com/Hasuzawa/central_repository",
        long_description: `I need a centralised place to relay to my other projects. It is going to be very
            small-scale so it is the best opportunity to try out new frameworks, namely Next.js and Tailwind CSS.
            I must say I am surprised at their synergy. In a few places I have done the traditional way of
            importing CSS and apply them. The CSS files will grow with no end without a framework. Here
            most CSS is reduced to classNames which are string.
                I refactored many parts of the project to keep it as concise and maintainable as possible.
            In the last few projects I always have the feeling I can do better, but the sea of entangled CSS,
            HTML feels like it is almost equivalent of re-writing the whole app. This is definitely the case
            in my first project. I took more time writing this simple app adjusted by content, but this time
            I am confident to say this is what I imagined it to be, with the exception of its UI and appearance,
            that I cannot improve overnight.`,
    },
    {
        projectName: "project-2",
        HTML_id: "project-2",
        heading: "Pizzeria Reservation with Django, Graphene & React",
        year: "2021",

        status: "on hiatus",
        short_description: "",
        stringArray: ["Django", "Graphene", "GraphQL"],

        logoArray: ["Django", "Graphene", "GraphQL"],
        gitHubLink: "",
        long_description: `The database model from the last project is too simple. This project aims to address
            that. `,
    },
    {
        projectName: "project-1",
        HTML_id: "project-1",
        heading: "Simulated Online Store with React, Bootstrap & Django",
        year: "2021",

        status: "on hiatus",
        short_description: "a full stack project with React as frontend and Django as backend.",
        stringArray: ["React", "Django", "Bootstrap"],

        logoArray: ["React", "Django", "Bootstrap", "Python", "GraphQL", "Apollo", "Graphene"],
        gitHubLink: "",
        long_description: `I know I need to know how to interact with API and that was the premise of
            this project. There is REST framework but GraphQL caught my attention. Initially I thought
            it would be similar to SQL, which is not quite the reality. But they do have one thing in
            common: query. Ideally, they should get what developers want, no more no less.`,
    },
    {
        projectName: "project-0",
        HTML_id: "project-0",
        heading: "Website with React & Sass",
        year: "2021",

        status: "completed",
        short_description: "my first project using React, HTML and Sass to build to my homepage.",
        stringArray: ["React","Sass","HTML"],
        
        logoArray: ["React", "Sass", "HTML", "CSS", "Javascript"],
        gitHubLink: "https://github.com/Hasuzawa/homepage",
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