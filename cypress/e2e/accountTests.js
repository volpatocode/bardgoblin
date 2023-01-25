/// <reference types="cypress" />

describe("create a account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("sign up in bardgoblin", () => {
    cy.get('[cy-test="navbarAvatar"]').click();
    cy.get('[cy-test="menuListItem3"]').contains("Register").click();
    cy.get("#register-email").type("fake@gmail.com");
    cy.get("#register-password").type("123456");
    cy.get("#register-confirm-password").type("123456");
    cy.get('[cy-test="registerFinish"]').click().wait(2000);
    cy.get('[cy-test="registerForm"]').contains("auth/email-already-in-use");
  });

  it("sign in in bardgoblin", () => {
    cy.get('[cy-test="navbarAvatar"]').click();
    cy.get('[cy-test="menuListItem2"]').contains("Login").click();
    cy.get("#login-email").type("fake@gmail.com");
    cy.get("#login-password").type("123456");
    cy.get('[cy-test="loginFinish"]').click().wait(2000);
    cy.get('[cy-test="navbarAvatar"]').click();
    cy.get('[cy-test="menuListItem2"]').contains("My account");
  });
});
