/// <reference types="cypress" />

describe('Contact us tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to contact us', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
  })

  it.skip('Send message through contact s form', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Dina')
    cy.get('[data-qa="subject"]').clear().type('Something')
    cy.get('[data-qa="message"]').clear().type('message')
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()
  })

  it('Confirm alert message', () => {
    cy.on('window:alert', (txt) => {
      expect(txt).to.eq('Please fill out this field.')
    })
  })
})
