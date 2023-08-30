
describe ('Box Size Test', () => {
    it ('Perform box size test', () => {
        cy.visit("https://demoqa.com/");
        cy.contains("Interactions").click();      
        cy.url().should("include", "/interaction"); // Verify Interaction Page is displayed

        cy.get('.element-group .header-text').should('contain', 'Elements');
        cy.get('.element-group .header-text').should('contain', 'Forms');
        cy.get('.element-group .header-text').should('contain', 'Alerts, Frame & Windows');
        cy.get('.element-group .header-text').should('contain', 'Widgets');
        cy.get('.element-group .header-text').should('contain', 'Interactions');
        cy.get('.element-group .header-text').should('contain', 'Book Store Application');
    

        cy.contains("Resizable").click();    
        cy.get('#resizableBoxWithRestriction').should("have.css", "width", "200px");
        cy.get('#resizableBoxWithRestriction').should("have.css", "height", "200px");

        cy.get("span.react-resizable-handle.react-resizable-handle-se").eq(0).then(($element) => {
          cy.resizeBox($element, 5, 5);
        });
        cy.wait(2000);

        // // Verify resizing min constraints of Box 1
        cy.get('#resizableBoxWithRestriction').should("have.css", "width", "150px");
        cy.get('#resizableBoxWithRestriction').should("have.css", "height", "150px");

        cy.get("span.react-resizable-handle.react-resizable-handle-se").eq(0).then(($element) => {
          cy.resizeBox($element, 800, 800);
        });
        cy.wait(2000);

        // // Verify resizing max constraints of Box 1
        cy.get('#resizableBoxWithRestriction').should("have.css", "width", "500px");
        cy.get('#resizableBoxWithRestriction').should("have.css", "height", "300px");

        // Verify Box 2 is resizable 
        cy.get('#resizable').should("have.css", "width", "200px");
        cy.get('#resizable').should("have.css", "height", "200px");

        cy.get("span.react-resizable-handle.react-resizable-handle-se").eq(1).then(($element) => {
          cy.resizeBox($element, 500, 500);
        });
        cy.wait(2000);

        cy.get('#resizable').should("not.have.css", "width", "200px");
        cy.get('#resizable').should("not.have.css", "height", "200px");
    });

    Cypress.on('uncaught:exception', (err) => {
        // Handle or log the error here
        return false; // Prevent Cypress from failing the test
      });
});