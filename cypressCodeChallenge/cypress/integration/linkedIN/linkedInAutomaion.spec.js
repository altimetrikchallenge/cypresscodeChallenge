import LoginPage from '../../pages/loginPage';
import SearchPage from '../../pages/SearchPage'

describe('launch',function(){
  it('Setting up test data', function(){
    cy.fixture('testData.json').as('userData').then(()=>{
      //reading the json file using Cypress inbuilt fixture feature and assigning them to variables
      this.email = this.userData.email
      this.password = this.userData.password
      this.searchContent = this.userData.searchContent
      this.filter = this.userData.filter
      this.filterValue = this.userData.filterValue
    })
  })

  it('Setting up base objects',function(){
    //Initializing the page objects and using Mocha global feature assigning them variables
    global.login = new LoginPage();
    global.searchPage = new SearchPage();
  })

  it('Launch and Login', function(){
    //Method to launch and perform login.
    login.navigate()
    login.signIn().click()
    login.email().type(this.email)
    login.password().type(this.password)
    login.submit().click()
  })

  it('Performing search', function(){
    searchPage.searchField().type(this.searchContent)
    searchPage.performSearch().click()
  })

  if('Validating no filter is applied', function(){
    //we are using the button class to find whether any filter is applied. If the filter is applied the button class would be 'search-s-facet__button artdeco-button artdeco-button--icon-right artdeco-button--2 artdeco-button--primary ember-view'
    searchPage.validateFilter().each(($li,index,$lis)=>{
      cy.wrap($li).children().first().should('have.class','search-s-facet__button artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--2 artdeco-button--secondary ember-view')

    })
  })
    it('Applying first filter and validating count',function(){
    searchPage.experienceLevel().click()
    searchPage.experienceLevelFilter().click({force: true})
    searchPage.pageClick(0).click({force: true})
    cy.wait(9000)
    searchPage.clearFilter().should('have.text','1')
  })

  it('Applying second filter and validating the count', function(){
    searchPage.allFilter().click()
    searchPage.fullTimeFilter().click({force: true})
    searchPage.clearFilter().should('have.text','2')
  })

  it('Log out',function(){
    searchPage.profileLink().click()
    searchPage.signOutLink().click({force: true})
  })
  })
