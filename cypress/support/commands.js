Cypress.Commands.add("messageExists", (message) => {
  cy.contains(message).should("be.visible");
});

Cypress.Commands.add("messageNotExists", (message) => {
  cy.contains(message).should("not.exist");
});
