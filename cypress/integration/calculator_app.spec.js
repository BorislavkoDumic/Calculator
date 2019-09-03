/// <reference types="Cypress" />

describe("Basic calculator operations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should add two numbers", () => {
    cy.get("[data-cy=button1]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button6]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("7");
    cy.get("[data-cy=buttonClear]").click();
  });
  it("Should multiply two numbers", () => {
    cy.get("[data-cy=button5]").click();
    cy.get("[data-cy=buttonMulti]").click();
    cy.get("[data-cy=button6]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("30");
    cy.get("[data-cy=buttonClear]").click();
  });
  it("Should divide two numbers", () => {
    cy.get("[data-cy=button8]").click();
    cy.get("[data-cy=buttonDivide]").click();
    cy.get("[data-cy=button2]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("4");
    cy.get("[data-cy=buttonClear]").click();
  });
  it("Should subtract two numbers", () => {
    cy.get("[data-cy=button5]").click();
    cy.get("[data-cy=buttonSubtract").click();
    cy.get("[data-cy=button3]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("2");
    cy.get("[data-cy=buttonClear]").click();
  });
});
