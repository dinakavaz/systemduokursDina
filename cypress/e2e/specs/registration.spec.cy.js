/// <reference types="cypress" />

describe('Registration tests', () => {
  let email
  beforeEach('Navigate to automationexercise', () => {
    email = `dina${Date.now()}@example.com`
    cy.visit('https://automationexercise.com')
  })
  it('Navigate to registration form', () => {
    //When
    cy.get('a[href*="login"]').should('be.visible').click()
    //Then
    cy.get('.signup-form').should('be.visible')
    //When
    cy.get('[data-qa="signup-name"]').clear().type('Dina')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    //Then
    cy.get('form[action*="signup"]').should('be.visible')
  })
  it.only('Succesfull registration', () => {
    //When
    cy.get('a[href*="login"]').should('be.visible').click()
    //Then
    cy.get('.signup-form').should('be.visible')
    //When
    cy.get('[data-qa="signup-name"]').clear().type('Dina')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click() //force:true ako neće da klikne

    //Then
    cy.get('form[action*="signup"]').should('be.visible')
    //When
    cy.get('input[type="radio"]').should('be.visible').check('Mrs')
    cy.get('[data-qa="email"]')
      .should('be.disabled')
      .and('have.attr', 'value', email)

    cy.get('[data-qa="password"]').clear().type('test123')
    cy.get('[data-qa="days"]').select(28)
    cy.get('[data-qa="months"]').select(6)
    cy.get('[data-qa="years"]').select('1993')
    cy.get('#newsletter').check() //force:true - ako neće da selektuje
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').clear().type('Dina')
    cy.get('[data-qa="last_name"]').clear().type('Kavaz Bibić')
    cy.get('[data-qa="company"]').clear().type('QA')
    cy.get('[data-qa="address"]').clear().type('Adresa')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').clear().type('Sarajevo')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('123456789')
    cy.get('[data-qa="create-account"]').should('be.visible').click()
    //Then
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain.text', 'Account Created!')
  })
})
