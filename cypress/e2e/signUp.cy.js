/// <reference types="cypress" />

describe("sign up paths", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("write wrong email", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type("fakegmail.com");
    cy.get("#register-password").type("123456");
    cy.get("#register-confirm-password").type("123456");
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong password", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type("fake@gmail.com");
    cy.get("#register-password").type("1234567");
    cy.get("#register-confirm-password").type("123456");
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong confirm password", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type("fake@gmail.com");
    cy.get("#register-password").type("123456");
    cy.get("#register-confirm-password").type("1234567");
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong all inputs", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type("fakegmail.com");
    cy.get("#register-password").type("12345");
    cy.get("#register-confirm-password").type("123");
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 3);
  });

  it("sign up in bardgoblin", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type("fake@gmail.com");
    cy.get("#register-password").type("123456");
    cy.get("#register-confirm-password").type("123456");
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });
});
