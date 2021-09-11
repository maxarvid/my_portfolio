describe("User can see a list in the Curriculum Vitae", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });


  it('displays the first item in the CV', () => {
    cy.get('#item-1').should('contain', 'Clients inlcude MakeGood and the Edward E. Ford Foundation.')
  });
});
