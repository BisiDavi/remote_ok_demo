export {};
/// <reference types="cypress" />

// 1. user selects email duration
// 2. user enters email
// 3. user clicks submit button
// 4. check if user submits without email
// 5. check if user submit without duration
// 6. check if user subscription is successful.

describe("email subscriber test", () => {
  beforeEach(() => {
    cy.visit("https://remote-ok-demo.vercel.app");
  });

  it("user to enter daily as email duration", () => {
    cy.get('[data-testid="duration"]')
      .select("daily")
      .should("have.value", "fr-daily");
  });

  it("user to enter email and submit", () => {
    cy.get('[data-testid="email"]')
      .type("jobseeker@gmail.com{enter}")
      .should("have.value", "jobseeker@gmail.com");

    cy.get('[data-testid="subscribe"]').click();
  });

  it("show loading component", () => {
    cy.get("[data-testid=loading]").should("be.called");
  });

  it("expect email-notification, to be displayed", () => {
    cy.get("[data-testid=email-notification]").should(
      "have.value",
      "jobseeker@gmail.com thanks for subscribing to daily email"
    );
  });
});
