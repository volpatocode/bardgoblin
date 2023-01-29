/// <reference types="cypress" />

describe("posting paths", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearAllLocalStorage();
  });

  it("create a post", () => {
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("Login").click();
    cy.get("#login-email").type("fake@gmail.com");
    cy.get("#login-password").type("123456");
    cy.getByData("login-finish").click().wait(2000);
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item2").contains("account");
    cy.visit("/createtopic");
    cy.getByData("topic-title").type("That is a test topic title");
    cy.getByData("section-selector").click();
    cy.getByData("section-selector-item0").click();
    cy.getByData("module-title0").type("That is a test module title");
    cy.getByData("module-content0").type(
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum"
    );
    cy.getByData("module-title1").type("That is a test module title");
    cy.getByData("module-content1").type(
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum"
    );
    cy.getByData("add-module-button").click();
    cy.getByData("module-title2")
      .should("exist")
      .type("That is a test module title");
    cy.getByData("module-content2")
      .should("exist")
      .type(
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum"
      );
    cy.getByData("submit-button").click();
  });
});
