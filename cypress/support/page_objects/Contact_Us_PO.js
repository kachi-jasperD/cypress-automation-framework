import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO {
  elements = {
    comment_TextField: () => cy.get("textarea[name='message']"),
    submit_Button: () => cy.get('[type="submit"]'),
    submission_Header_Text: () => cy.get("body"),
  };

  navigateTo_ContactUs_Page() {
    super.navigate("/Contact-Us/contactus.html");
  }
  type_FirstName(firstName) {
    cy.get('[name="first_name"]').type(firstName);
  }
  type_LastName(lastName) {
    cy.get('[name="last_name"]').type(lastName);
  }
  type_EmailAddress(email) {
    cy.get('[name="email"]').type(email);
  }
  type_Comment(comment) {
    this.elements.comment_TextField().type(comment);
  }
  clickOn_Submit_Button() {
    this.elements.submit_Button().click();
  }
  validate_Submission_Header(message) {
    this.elements.submission_Header_Text().contains(message);
    this.elements
      .submission_Header_Text()
      .invoke("text")
      .should("include", message);
  }
}
export default Contact_Us_PO;
