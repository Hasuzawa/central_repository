interface Project{
    readonly projectName: string;    //used in URL path and will be visible in address bar, also used in linking, router
    readonly HTML_id: string;        //used in HTML tree and scrolling
    readonly heading: string;        //used in both listing and each project page
    readonly year: string;           //used for chronological listing, type in /[0-9]{4}/ format
    readonly status: "completed" | "in progress" | "on hiatus" | "in design";    //used in overview and page
    readonly short_description: string;  //used in overview
    readonly stringArray: string[];  //used in overview

    //page_URL?: string;      
    readonly long_description?: string;      //used in page
    readonly logoArray?: string[];           //used in page
    readonly gitHubLink?: string;            //used to link to repository on GitHub in page
}

const projects: Project[] = [
    {
        projectName: "testing",
        HTML_id: "project-4",
        heading: "testing testing testing testing testing testing testing testing testing testing testing testing",
        year: "2021",

        status: "in progress",
        short_description: "",
        stringArray: ["Nextjs","Tailwind",""],
    },
    {
        projectName: "project-3-simple-app",
        HTML_id: "project-3",
        heading: "App with Next.js & Tailwind CSS",
        year: "2021",

        status: "in progress",
        short_description: "",
        stringArray: ["Nextjs","Tailwind",""],
        
        long_description: "",
        logoArray: [],
        gitHubLink: "https://github.com/Hasuzawa/central_repository"
    },
    {
        projectName: "project-2-pizzeria",
        HTML_id: "project-2",
        heading: "Pizzeria Reservation with Django, Graphene & React",
        year: "2021",

        status: "on hiatus",
        short_description: "",
        stringArray: ["Django", "Graphene", "GraphQL"],
    },
    {
        projectName: "project-1-ecommerce",
        HTML_id: "project-1",
        heading: "Simulated Online Store with React, Bootstrap & Django",
        year: "2021",

        status: "on hiatus",
        short_description: "a full stack project with React as frontend and Django as backend.",
        stringArray: ["React", "Django", "Bootstrap"],
        gitHubLink: ""
    },
    {
        projectName: "project-0-homepage",
        HTML_id: "project-0",
        heading: "Website with React & Sass",
        year: "2021",

        status: "completed",
        short_description: "my first project using React, HTML and Sass to build to my homepage.",
        stringArray: ["React","Sass","HTML"],

        long_description: "",
        logoArray: [],
        gitHubLink: "https://github.com/Hasuzawa/homepage"
    },
];

export default projects;
export type { Project };