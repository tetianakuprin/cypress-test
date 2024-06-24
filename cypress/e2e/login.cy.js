import loginPage from "../pages/loginPage";

describe("Login", () => {
  let pageData;
  let user;

  beforeEach(function () {
    cy.fixture("url").then((url) => {
      cy.visit(url.loginUrl);
    });
    cy.fixture("login").then((loginData) => {
      pageData = loginData;
    });
    user = Cypress.env("USER_A");
  });

  it("should contain an error message for empty username and password", () => {
    loginPage.clickLoginBtn();
    cy.messageExists(pageData.pleaseEnterUsername);
    cy.messageExists(pageData.pleaseEnterYourPassword);
    cy.messageNotExists(pageData.noAccountFoundWithThatUsername);
  });

  it("should contain an error message for empty username", () => {
    loginPage.elements.passwordInput().type(user.PASSWORD);
    loginPage.clickLoginBtn();
    cy.messageExists(pageData.pleaseEnterUsername);
    cy.messageNotExists(pageData.pleaseEnterYourPassword);
    cy.messageNotExists(pageData.noAccountFoundWithThatUsername);
  });

  it("should contain an error message for empty password", () => {
    loginPage.elements.usernameInput().type(user.USERNAME);
    loginPage.clickLoginBtn();
    cy.messageNotExists(pageData.pleaseEnterUsername);
    cy.messageExists(pageData.pleaseEnterYourPassword);
    cy.messageNotExists(pageData.noAccountFoundWithThatUsername);
  });

  it("should login with correct username and password", () => {
    loginPage.login(user.USERNAME, user.PASSWORD);
    cy.messageNotExists(pageData.pleaseEnterUsername);
    cy.messageNotExists(pageData.pleaseEnterYourPassword);
    cy.messageNotExists(pageData.noAccountFoundWithThatUsername);
  });

  it("should contain an error message for an invalid user", () => {
    loginPage.login(user.USERNAME, user.PASSWORD);
    cy.messageNotExists(pageData.pleaseEnterUsername);
    cy.messageNotExists(pageData.pleaseEnterYourPassword);
    cy.messageExists(pageData.noAccountFoundWithThatUsername);
  });
});
