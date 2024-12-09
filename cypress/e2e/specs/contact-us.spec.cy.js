/// <reference types="cypress" />

import { contactUsPage } from '../../utils/initialize'

describe('Contact us tests', () => {
  let messageBody
<<<<<<< HEAD
  let englishData
  let spanishData
  let germanData
=======
>>>>>>> cb3ddbef1e472494fdd050be41faa56da9bb876a
  beforeEach('Visit page', () => {
    cy.fixture('example.json').then(($data) => {
      messageBody = $data['message']
    })
<<<<<<< HEAD
    cy.fixture('account-created-lang.json').then(($data) => {
      englishData = $data['English']
      spanishData = $data['Spanish']
      germanData = $data['German']
    })
=======
>>>>>>> cb3ddbef1e472494fdd050be41faa56da9bb876a
    cy.visit('/')
  })

  it('Navigate to contact us form', () => {
    // When
    cy.get('a[href*="contact"]').should('be.visible').click()

    // Then
    cy.url().should('contain', 'contact_us')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('div.bg').find('h2').contains('contact us', { matchCase: false })
    cy.get('h2').first().should('be.visible') // Contact us element
    cy.get('h2').eq(1).should('be.visible') // get in touch element
  })

<<<<<<< HEAD
  it.only('Send message through contact us form', () => {
=======
  it('Send message through contact us form', () => {
>>>>>>> cb3ddbef1e472494fdd050be41faa56da9bb876a
    // When
    cy.get('a[href*="contact"]').should('be.visible').click()

    // Then
    cy.url().should('contain', 'contact_us')
<<<<<<< HEAD

    // When
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Aid')
    cy.get('[data-qa="email"]').clear().type('aid@example.com')
    cy.get('[data-qa="subject"]').clear().type(spanishData.accountCreated)
    cy.get('[data-qa="message"]').clear().type(messageBody)

=======

    // When
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Aid')
    cy.get('[data-qa="email"]').clear().type('aid@example.com')
    cy.get('[data-qa="subject"]').clear().type('Something')
    cy.get('[data-qa="message"]').clear().type(messageBody)

>>>>>>> cb3ddbef1e472494fdd050be41faa56da9bb876a
    // And
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()

    // Then
    cy.get('.alert-success').contains(
      'Success! Your details have been submitted successfully.',
      { matchCase: false }
    )
  })

  it('Send message through contact us form without email insterted', () => {
    // When
    cy.get('a[href*="contact"]').should('be.visible').click()

    // Then
    cy.url().should('contain', 'contact_us')

    // When
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Aid')
    cy.get('[data-qa="subject"]').clear().type('Something')
    cy.get('[data-qa="message"]').clear().type('Message')

    // And
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()

    // Then
    cy.get('[data-qa="email"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.')

    cy.get('input:invalid')
      .should('be.visible')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.')
  })
})
