import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('User launch an Google url', () => {
    cy.visit('http://google.co.in');
});

When('User enter search "{string}" and click on search button', (string) => {
    cy.get('[name="q"]').type(string);
});

Then('Search result should be display', () => {
    cy.get("[class='sbct']").within(($class) => {
        // cy.get() will only search for elements within class sbdt,
        // not within the entire document
        cy.get("[class='sbl1'] span").should('cypress');
      })
});


