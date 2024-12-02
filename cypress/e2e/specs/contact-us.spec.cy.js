/// <reference types="cypress" />

describe('Contact us tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to contact us form', () => {
    cy.get('a[href="/login"]').should('be.visible').click()
    cy.url().should('contain', 'login')
    cy.get('[data-qa="login-email"]')
      .should('be.visible')
      .and('not.be.disabled')
    cy.get('[data-qa="signup-name"]')
      .should('be.visible')
      .and('not.be.disabled')
  })

  it('Navigate to contact us', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('#contact-page').contains('h2', 'contact us', { matchCase: false })
    cy.get('div.bg').find('h2').contains('contact us', { matchCase: false })
    cy.get('h2').first().should('be.visible') // contact us
    cy.get('h2').eq(1).should('be.visible') // get in touch
  })

  it('Send message through contact s form', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Dina')
    cy.get('[data-qa="email"]').clear().type('dina.kavaz4@gmail.com')
    cy.get('[data-qa="subject"]').clear().type('Something')
    cy.get('[data-qa="message"]').clear().type('message')

    cy.get('[data-qa="submit-button"]').should('be.enabled').click()
    cy.get('.alert-success').should('be.visible')

    cy.get('.alert-success').contains(
      'Success! Your details have been submitted successfully.',
      { matchCase: false }
    )
  })
})

