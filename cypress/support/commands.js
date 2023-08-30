// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  Cypress.Commands.add('selectCheckBoxRadioButton', (labelText, value) => {
    cy.contains(labelText).click();
    cy.get(`[value="${value}"]`).should('be.checked');
  });

  Cypress.Commands.add("resizeBox", (element, clientX, clientY) => {
    cy.get(element)
      .trigger("mousedown", { button: 0, force: true })
      .trigger("mousemove", { clientX, clientY, force: true })
      .trigger("mouseup", { force: true });
  });