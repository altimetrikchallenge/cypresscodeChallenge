class MyClass {
  constructor() {
    cy.readFile('testData.json').as('userData').then(()=>{
      //login.email().type(this.userData.email)
      this.email = this.userData.email
      this.password = this.userData.password
    })
  }
}

export default (new MyClass);
