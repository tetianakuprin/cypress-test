class loginPage {
  elements = {
    usernameInput: () => cy.get('[name="username"]'),
    passwordInput: () => cy.get('[name="password"]'),
    loginBtn: () => cy.get('[value="Login"]'),
  };

  clickLoginBtn() {
    this.elements.loginBtn().click();
  }

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.clickLoginBtn();
  }
}

export default new loginPage();
