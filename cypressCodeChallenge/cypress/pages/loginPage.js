class LoginPage {
  constructor() {

  }
  navigate() {
    cy.visit('www.linkedin.com')
  }

signIn(){
  return cy.get('.nav__button-secondary')
  //cy.get('[aria-describedby=error-for-username]').type("altimetrikchallenge@gmail.com")
  //cy.get('[aria-describedby=error-for-password]').type('altimetrik123')
  //cy.get('[data-litms-control-urn=login-submit]').click()
}

email(){
  return cy.get('[aria-describedby=error-for-username]')
}

password(){
  return cy.get('[aria-describedby=error-for-password]')
}

submit(){
  return cy.get('[data-litms-control-urn=login-submit]')
}

}
export default LoginPage;
