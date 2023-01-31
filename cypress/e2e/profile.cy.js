/// <reference types="cypress" />

describe("profile paths", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("test data", function () {
    cy.log(this.data.email);
  });
});
