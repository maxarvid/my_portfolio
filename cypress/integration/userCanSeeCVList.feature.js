describe("User can see a list in the Curriculum Vitae", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays the first item in the CV", () => {
    cy.get("#item-1").within(() => {
      cy.get("#name").should("contain", "Freelance");
      cy.get("#range").should("exist");
      cy.get("#description").should(
        "contain",
        "Clients inlcude Make.Good and the Edward E. Ford Foundation."
      );
    });
  });

  it("displays the second item in the CV", () => {
    cy.get("#item-2").within(() => {
      cy.get("#name").should("contain", "Human Rights Watch");
      cy.get("#range").should("exist");
      cy.get("#description").should(
        "contain",
        "Worked on digital rights issues, link to dispatches."
      );
    });
  });

  it("displays the third item in the CV", () => {
    cy.get("#item-3").within(() => {
      cy.get("#name").should("contain", "Delegegation of the EU to the UN");
      cy.get("#range").should("exist");
      cy.get("#description").should("contain", "Cut my diplomatic teeth");
    });
  });
});
