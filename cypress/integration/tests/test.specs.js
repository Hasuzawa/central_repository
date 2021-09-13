import projects from "~/public/staticData/projects";


const projectNumber = projects.length;
const baseUrl = "http://localhost:3000";


describe("check website", () => {
    beforeEach(() => {
        cy.visit(baseUrl)
    });
    

    it("all projects' heading in page", () => {
        for (let project of projects){
            cy.contains(project.heading);
        }
    });

    it("correct layout for desktop", () => {
        cy.viewport(1200, 800);
        cy.contains("Table of Content");
        cy.contains("About");
    });

    it("correct layout for tablet", () => {
        cy.viewport(800, 600);
        cy.contains("Table of Content");
        cy.contains("About").should("not.be.visible");
    })

    it("correct layout for mobile", () => {
        cy.viewport(400, 600);
        cy.contains("Table of Content").should("not.be.visible");
        cy.contains("About").should("not.be.visible");

    })

    it("can go to each page and come back", () => {
        for (let project of projects){
            cy.get(`#${project.projectName}`).click();
            cy.url().should("include", `http://localhost:3000/projects/${project.projectName}`);
            cy.get("#return-btn").click();
            cy.url().should("include", baseUrl);
        }
    })

    it("footer buttons can properly function", () => {
        cy.viewport(500, 600);
        cy.contains("About").should("not.be.visible");
        cy.contains("Table of Content").should("not.be.visible");

        cy.get("#open-about-btn").click();
        cy.contains("About")
        
        cy.get("#open-about-btn").click();
        cy.contains("About").should("not.be.visible");

        cy.get("#open-table-btn").click();
        cy.contains("Table of Content")

        cy.get("#open-table-btn").click();
        cy.contains("Table of Content").should("not.be.visible");

        cy.get("#open-table-btn").click();
        cy.get("#open-about-btn").click();
        cy.contains("About");
        cy.get("#open-table-btn").click();
        cy.contains("Table of Content");
    })

    


});

