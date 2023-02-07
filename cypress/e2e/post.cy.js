/// <reference types="cypress" />

describe("posting paths", () => {
  before(() => {
    cy.visit("/");
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("Login").click();
    cy.get("#login-email").type("fake@gmail.com");
    cy.get("#login-password").type("123456");
    cy.getByData("login-finish").click().wait(2000);
    cy.getByData("navbar-avatar").click();
    cy.getByData("menu-list-item1").contains("account");
  });

  beforeEach(() => {
    cy.visit("/createtopic");
  });

  it("write wrong in any input", () => {
    cy.getByData("topic-title").type("Title");
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
    cy.getByData("submit-button").click();
    cy.getByData("input-error").should("exist").should("have.length", 1);
  });

  it("create a post", () => {
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
    cy.getByData("submit-button").click();
    cy.url().should("include", "/section/sidequests");
  });

  it("create a post with more than 2 modules", () => {
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
    cy.url().should("include", "/section/sidequests");
  });

  // it.only("create a post with labels", () => {
  //   cy.getByData("topic-title").type("That is a test topic title");
  //   cy.getByData("section-selector").click();
  //   cy.getByData("section-selector-item0").click();
  //   cy.getByData("labels-selector").click();
  //   cy.getByData("labels-selector-item0").click();
  //   cy.getByData("labels-selector-item1").click();
  //   cy.getByData("labels-selector").click();
  //   cy.getByData("module-title0").type("That is a test module title");
  //   cy.getByData("module-content0").type(
  //     "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum"
  //   );
  //   cy.getByData("module-title1").type("That is a test module title");
  //   cy.getByData("module-content1").type(
  //     "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum"
  //   );
  //   cy.getByData("submit-button").click();
  // cy.url().should("include", "/section/sidequests");
  //
  // });
});
