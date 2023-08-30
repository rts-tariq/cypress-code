
describe('Form Submission Test', () => {
        it('fills out and submits the form', () => {
        cy.visit('https://demoqa.com/');;
        cy.contains('Forms').click();
        cy.contains('Practice Form').click();  
    
        cy.get('#firstName').type('Cowlar');
        cy.get('#lastName').type('Developer');
        cy.get('#userEmail').type('qaengineer@cowlar.com').type('{enter}');
        cy.selectCheckBoxRadioButton('Male', 'Male');
        cy.get('#userNumber').type('0123456789');  
        cy.get('#subjectsInput').type('Computer Science').type('{enter}');
        cy.selectCheckBoxRadioButton('Music', '3');
        cy.get('#currentAddress').type('Address 1');
    //   cy.get('#react-select-3-input').should('be.visible').type('NCR', {force: true}).type('{enter}');
        cy.get('#react-select-3-input').invoke('val', 'NCR').type('{enter}');
      //cy.get('#react-select-4-input').should('be.visible').click({force: true}).type('Delhi').type('{enter}');

        cy.get('#submit').click({force: true});
  
        // Verify modal content
        cy.get('.modal-title').should('have.text', 'Thanks for submitting the form');
        cy.get('.table-responsive').should('contain', 'Cowlar Developer');
        cy.get('.table-responsive').should('contain', 'qaengineer@cowlar.com');
        cy.get('.table-responsive').should('contain', 'Male');
        cy.get('.table-responsive').should('contain', '0123456789');
        cy.get('.table-responsive').should('contain', 'Computer Science');
        cy.get('.table-responsive').should('contain', 'Music');
        cy.get('.table-responsive').should('contain', 'Address 1');
        cy.get('.table-responsive').should('contain', 'NCR Delhi');
    
        // Close modal
        cy.get('#closeLargeModal').click({force: true});
    });

    Cypress.on('uncaught:exception', (err) => {
        // Handle or log the error here
        return false; // Prevent Cypress from failing the test
      });
  });