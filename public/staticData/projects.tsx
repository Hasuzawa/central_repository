interface Project{
    HTML_id: string;
    heading: string;
    year: string;
    status: "completed" | "in progress" | "on hiatus" | "in design";
    short_description: string;
    stringArray: string[];
    page_URL?: string;
    long_description?: string;
    logoArray?: string[];
}

const projects: Project[] = [
    {
        HTML_id: "project-4",
        heading: "testing testing testing testing testing testing testing testing testing testing testing testing",
        year: "2021",

        status: "in progress",
        short_description: "",
        stringArray: ["Nextjs","Tailwind",""],
    },
    {
        HTML_id: "project-3",
        heading: "App with Next.js & Tailwind CSS",
        year: "2021",

        status: "in progress",
        short_description: "",
        stringArray: ["Nextjs","Tailwind",""],
        
        page_URL: "",
        long_description: "",
        logoArray: [],
    },
    {
        HTML_id: "project-2",
        heading: "Pizzeria Reservation with Django, Graphene & React",
        year: "2021",

        status: "on hiatus",
        short_description: "",
        stringArray: ["Django", "Graphene", "GraphQL"],
    },
    {
        HTML_id: "project-1",
        heading: "Simulated Online Store with React, Bootstrap & Django",
        year: "2021",

        status: "on hiatus",
        short_description: "a full stack project with React as frontend and Django as backend.",
        stringArray: ["React", "Django", "Bootstrap"],

    },
    {
        HTML_id: "project-0",
        heading: "Website with React & Sass",
        year: "2021",

        status: "completed",
        short_description: "my first project using React, HTML and Sass to build to my homepage.",
        stringArray: ["React","Sass","HTML"],
        
        page_URL: "",
        long_description: "",
        logoArray: [],
    },
];

export default projects;