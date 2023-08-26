import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

const basePage = new Base_PO();
const homePage = new Homepage_PO();
// const url = "https://webdriveruniversity.com/";

Given(`I navigate to the webdriver page`, () => {
  // cy.visit(url);
  homePage.navigate("");
});

When(`I click on the Contact_Us button`, () => {
  // cy.get("#contact-us").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLink_InSameTab("#contact-us");
  homePage.clickOn_ContactUs_Button;
});

When(`I click the Login Portal link`, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLink_InSameTab("#login-portal");
  homePage.clickOn_Login_Button;
});
