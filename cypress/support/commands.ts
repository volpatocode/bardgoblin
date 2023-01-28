/// <reference types="cypress" />

export declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add("getByData", (selector: string) => {
  return cy.get(`[data-test=${selector}]`);
});
