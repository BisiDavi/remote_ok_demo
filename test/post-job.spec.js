/// <reference types="cypress" />

// 1. user enters all required field.
// 2. user clicks the submit button
// 3. check if the job was successfully posted.

describe("post demo job", () => {
  beforeEach(() => {
    cy.visit("https://remote-ok-demo.vercel.app/hire-remotely");
  });

  it("user should enter required fields to post job", () => {
    cy.get("[data-testId=]").type("{enter}");
  });
});
