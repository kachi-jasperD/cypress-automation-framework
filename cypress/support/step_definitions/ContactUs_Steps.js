import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contactus_Page = new Contact_Us_PO();

Given(`I navigate to the webdriver page contact_us page`, () => {
  contactus_Page.navigateTo_ContactUs_Page();
});

When(`I type a first name`, () => {
  // cy.get('[name="first_name"]').type("Kachi");
  contactus_Page.type_FirstName("Kachi");
});

When(`I type a last name`, () => {
  // cy.get('[name="last_name"]').type("Jasper");
  contactus_Page.type_LastName("Jasper");
});

When(`I type and email address`, () => {
  // cy.get('[name="email"]').type("kjasper@g.com");
  contactus_Page.type_EmailAddress("kjasper@g.com");
});

When(`I type a comment`, () => {
  // cy.get("textarea[name='message']").type(
  //   "I think i have said everything needed to say"
  // );
  contactus_Page.type_Comment("I think i have said everything needed to say");
});

When(`I click on the submit button`, () => {
  // cy.get('[type="submit"]').click();
  contactus_Page.clickOn_Submit_Button();
});

Then(
  `I should be presented with a successful contact_us submission message`,
  () => {
    // cy.get("h1").should("have.text", "Thank You for your Message!");
    contactus_Page.validate_Submission_Header("Thank You for your Message!");
  }
);
Then(
  `I should be presented with a unsuccessful contact_us submission message`,
  () => {
    // cy.get("body").contains("Error: Invalid email address");
    contactus_Page.validate_Submission_Header("Error: Invalid email address");
  }
);
When(`I type a first name {string}`, (firstName) => {
  // cy.get('[name="first_name"]').type(firstName);
  contactus_Page.type_FirstName(firstName);
});

When(`I type a last name {string}`, (lastName) => {
  // cy.get('[name="last_name"]').type(lastName);
  contactus_Page.type_LastName(lastName);
});

When(`I type and email address {string}`, (email) => {
  // cy.get('[name="email"]').type(email);
  contactus_Page.type_EmailAddress(email);
});

When(
  `I type a specific word {string} and number {int} with the comment input field`,
  (word, number) => {
    // cy.get("textarea[name='message']").type(word + number);
    contactus_Page.type_Comment(word + number);
  }
);
When(
  `I type a first name {word} and a last name {string}`,
  (firstName, lastName) => {
    // cy.get('[name="first_name"]').type("Kachi");
    // cy.get('[name="last_name"]').type("Jasper");
    contactus_Page.type_FirstName("Kachi");
    contactus_Page.type_LastName("Jasper");
  }
);
When(`I type a {string} and a comment {string}`, (emailAdress, comment) => {
  // cy.get('[name="email"]').type(emailAdress);
  // cy.get("textarea[name='message']").type(comment);
  contactus_Page.type_EmailAddress(emailAdress);
  contactus_Page.type_Comment(comment);
});
Then(`I should be presented with header text {string}`, (message) => {
  // cy.get("body").contains(message);
  contactus_Page.validate_Submission_Header(message);
});
