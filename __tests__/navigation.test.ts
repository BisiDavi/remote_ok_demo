/// <reference types="cypress" />

context("Navigate to post job page", () => {
  beforeEach(() => {
    cy.visit("https://remote-ok-demo.vercel.app");
    cy.get('[data-testId="Post-Job"]').contains("Post a Job").click();
  });

  it("expect the url location to change", () => {
    cy.location("pathname").should("include", "hire-remotely");
  });
});
