/// <reference types="cypress" />

describe("sign in paths", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.fixture("user").then(function (data) {
      this.data = data;
    });
  });

  it("write wrong email", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("Login").click();
    cy.get("#login-email").type(this.data.wrongEmail);
    cy.get("#login-password").type(this.data.password);
    cy.getByData("login-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong password", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("Login").click();
    cy.get("#login-email").type(this.data.email);
    cy.get("#login-password").type(this.data.wrongPassword);
    cy.getByData("login-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write both inputs wrong", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("Login").click();
    cy.get("#login-email").type(this.data.wrongEmail);
    cy.get("#login-password").type(this.data.wrongPassword);
    cy.getByData("login-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 2);
  });

  it("sign in in bardgoblin", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("Login").click();
    cy.get("#login-email").type(this.data.email);
    cy.get("#login-password").type(this.data.password);
    cy.getByData("login-finish").click().wait(2000);
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("account");
  });
});
