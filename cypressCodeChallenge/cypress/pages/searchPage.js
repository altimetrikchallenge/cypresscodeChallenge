class SearchPage {
  searchField() {
    return cy.get('[placeholder=Search]')
  }

  performSearch(){
    return cy.get('.search-global-typeahead__button')
  }

  validateFilter(){
    return cy.get('.search-s-facet__form',{timeout: 7000})
  }

  experienceLevel(){
    return cy.contains('.artdeco-button__text','Experience Level')
  }

  experienceLevelFilter(){
    return cy.contains('[for=experience-4]','Mid-Senior level')
  }

  pageClick(child){
    return cy.get('.neptune-grid').eq(child)
  }

  clearFilter(){
    return cy.get('.search-filters-bar__selected-filter-count',{timeout: 7000})
  }

  allFilter(){
    return cy.contains('.artdeco-button__text','All filters')
  }

  fullTimeFilter(){
    return cy.get('[for=jobType-F]')
  }

  profileLink(){
    return cy.get('.nav-item__content').eq(0)
  }

  signOutLink(){
    return cy.contains('Sign out')
  }
}
export default SearchPage;
