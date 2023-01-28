/// <reference types="cypress" />

describe("sign in paths", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearAllLocalStorage();
  });

  it("sign in in bardgoblin", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Login").click();
    cy.get("#login-email").type("fake@gmail.com");
    cy.get("#login-password").type("123456");
    cy.getByData("login-finish").click().wait(2000);
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("account");
  });

  it("write wrong email", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Login").click();
    cy.get("#login-email").type("fakegmail.com");
    cy.get("#login-password").type("123456");
    cy.getByData("login-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong password", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Login").click();
    cy.get("#login-email").type("fake@gmail.com");
    cy.get("#login-password").type("12345");
    cy.getByData("login-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write both inputs wrong", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Login").click();
    cy.get("#login-email").type("fakegmail.com");
    cy.get("#login-password").type("12345");
    cy.getByData("login-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 2);
  });
});
