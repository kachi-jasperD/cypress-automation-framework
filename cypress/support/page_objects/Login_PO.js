import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  navigateTo_Login_Page() {
    super.navigate("/Login-Portal/index.html");
  }

  type_Username(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }
  type_Password(password) {
    cy.get('input[placeholder="Password"]').type(password);
  }
  clickOn_Login_Button() {
    cy.get('button[type="submit"]').click();
  }
}
export default Login_PO;
