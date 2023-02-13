/// <reference types="cypress" />

describe("sign up paths", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("user").then(function (data) {
      this.data = data;
    });
  });

  it("write wrong email", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type(this.data.wrongEmail);
    cy.get("#register-password").type(this.data.password);
    cy.get("#register-confirm-password").type(this.data.password);
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong password", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type(this.data.email);
    cy.get("#register-password").type(this.data.wrongPassword);
    cy.get("#register-confirm-password").type(this.data.wrongPassword);
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong confirm password", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type(this.data.email);
    cy.get("#register-password").type(this.data.password);
    cy.get("#register-confirm-password").type(this.data.wrongPassword);
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("write wrong all inputs", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type(this.data.wrongEmail);
    cy.get("#register-password").type(this.data.wrongPassword);
    cy.get("#register-confirm-password").type(this.data.password);
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 2);
  });

  it("sign up in bardgoblin", function () {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Register").click();
    cy.get("#register-email").type(this.data.email);
    cy.get("#register-password").type(this.data.password);
    cy.get("#register-confirm-password").type(this.data.password);
    cy.getByData("register-finish").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
    // add delete account post account creation
  });
});
