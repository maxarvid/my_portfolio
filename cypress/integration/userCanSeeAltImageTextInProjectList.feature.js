describe("User can access the alt for images in project list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("it is expected to have an alt for the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").find('img').should('have.attr', 'alt')
    });
  });

  it("it is expected to have an alt for the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").find('img').should('have.attr', 'alt')
    });
  });

  it("it is expected to have an alt for the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").find('img').should('have.attr', 'alt')
    });
  });
});
