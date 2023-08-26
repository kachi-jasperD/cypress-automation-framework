import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();
let stub;

Given(`I navigate to the webdriver page login page`, () => {
  loginPage.navigateTo_Login_Page();
});

When(`I type a username {string}`, (username) => {
  // cy.get('input[placeholder="Username"]').type(username);
  loginPage.type_Username(username);
});

When(`I type a password {string}`, (password) => {
  // cy.get('input[placeholder="Password"]').type(password);
  loginPage.type_Password(password);
});

When(`I click the login button`, () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  // cy.get('button[type="submit"]').click();
  loginPage.clickOn_Login_Button();
});

Then(
  `I should be presented with alert box which contains text {string}`,
  (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
  }
);
