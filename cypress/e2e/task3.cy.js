describe('Book Store API Test', () => {
    it('Intercept and Verify API Response', () => {
      cy.visit('https://demoqa.com/');
      cy.contains('Book Store Application').click();
      cy.contains('Book Store').click();
      // Intercept the API request and verify its response
      cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574', {
        statusCode: 200,
        body: {
          "isbn": "9781593277574",
          "title": "Understanding ECMAScript 6",
          "subTitle": "The Definitive Guide for JavaScript Developers",
          "author": "Nicholas C. Zakas",
          "publish_date": "2016-09-03T00:00:00.000Z",
          "publisher": "No Starch Press",
          "pages": 352,
          "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
          "website": "https://leanpub.com/understandinges6/read"
        }
      }).as('bookApi');

      cy.contains('Understanding ECMAScript 6').click();
  
      // Wait for the API response and verify its contents
      cy.wait('@bookApi').then((interception) => {
        const response = interception.response.body;
        expect(response).to.deep.equal({
          "isbn": "9781593277574",
          "title": "Understanding ECMAScript 6",
          "subTitle": "The Definitive Guide for JavaScript Developers",
          "author": "Nicholas C. Zakas",
          "publish_date": "2016-09-03T00:00:00.000Z",
          "publisher": "No Starch Press",
          "pages": 352,
          "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
          "website": "https://leanpub.com/understandinges6/read"
        });
      });
    });
    
    Cypress.on('uncaught:exception', (err) => {
        // Handle or log the error here
        return false; // Prevent Cypress from failing the test
    });
  });