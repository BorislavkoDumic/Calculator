/// <reference types="Cypress" />

describe("Complex calculator operations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Evaluate the calculation correctly (2+3+4-4*3)", () => {
    cy.get("[data-cy=button2]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button3]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button4]").click();
    cy.get("[data-cy=buttonSubtract]").click();
    cy.get("[data-cy=button4]").click();
    cy.get("[data-cy=buttonMulti]").click();
    cy.get("[data-cy=button3]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("15");
    cy.get("[data-cy=buttonClear]").click();
  });
  it("Evaluate the calculation correctly (4+3+8-5/2)", () => {
    cy.get("[data-cy=button4]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button3]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button8]").click();
    cy.get("[data-cy=buttonSubtract]").click();
    cy.get("[data-cy=button5]").click();
    cy.get("[data-cy=buttonDivide]").click();
    cy.get("[data-cy=button2]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("5");
    cy.get("[data-cy=buttonClear]").click();
  });
  it("Evaluate the calculation correctly (3.5+4.5+8+4/2)", () => {
    cy.get("[data-cy=button3]").click();
    cy.get("[data-cy=buttonDot]").click();
    cy.get("[data-cy=button5]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button4]").click();
    cy.get("[data-cy=buttonDot]").click();
    cy.get("[data-cy=button5]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button8]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button4]").click();
    cy.get("[data-cy=buttonDivide]").click();
    cy.get("[data-cy=button2]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("10");
    cy.get("[data-cy=buttonClear]").click();
  });
});

describe("Isuses from github", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Get error after calcualtion (3..5+4) from #8", () => {
    cy.get("[data-cy=button3]").click();
    cy.get("[data-cy=buttonDot").click();
    cy.get("[data-cy=buttonDot").click();
    cy.get("[data-cy=button5]").click();
    cy.get("[data-cy=buttonPlus]").click();
    cy.get("[data-cy=button4]").click();
    cy.get("[data-cy=buttonEqual]").click();
    cy.get("[data-cy=displayResult]").contains("7.5");
    cy.get("[data-cy=buttonClear]").click();
  });
});
