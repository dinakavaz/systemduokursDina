<<<<<<< HEAD
import { registrationPage, loginPage } from '../../utils/initialize'
=======
import { registrationPage } from '../../utils/initialize'
>>>>>>> cb3ddbef1e472494fdd050be41faa56da9bb876a

describe('Login tests', () => {
  let email

  beforeEach(() => {
    email = `aid${Date.now()}@example.com`
<<<<<<< HEAD
    cy.visit('/')
    // When
    registrationPage.getNavigation().visit()

    // Then
    registrationPage.shouldSignupFormBeVisible({ visible: true })
    // When
    registrationPage.populateEmailandName({ email: newEmail, name: 'Aid' })

    // Then
    registrationPage.shouldRegistrationFormBeVisible({ visible: true })

    // When
    registrationPage.registerUser({
      title: 'Mr',
      password: 'Test123',
      dayOfBirth: 13,
      monthOfBirth: 2,
      yearOfBirth: '1997',
      newsletter: true,
      specialOffers: true,
      firstName: 'Aid',
      lastName: 'Hodzic',
      company: 'SystemDuo',
      address: 'Zmaja od Bosne',
      country: 'Canada',
      state: 'Sarajevo',
      city: 'Sarajevo',
      zipcode: '71000',
      mobileNumber: '061123123',
    })
    // Then
    registrationPage.shouldUserBeRegistered({
      success: true,
      successMessage: 'Account Created!',
    })
=======
    cy.visit('https://automationexercise.com/')
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')

    // When
    cy.get('[data-qa="signup-name"]').clear().type('Aid')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    // Then
    cy.get('form[action*="signup"]').should('be.visible')

    // When
    cy.get('input[type="radio"]').should('be.visible').check('Mr')
    cy.get('[data-qa="email"]')
      .should('be.disabled')
      .and('have.attr', 'value', email)
    cy.get('[data-qa="password"]').clear().type('Test123')
    cy.get('[data-qa="days"]').select(13)
    cy.get('[data-qa="months"]').select(2)
    cy.get('[data-qa="years"]').select('1997')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').clear().type('Aid')
    cy.get('[data-qa="last_name"]').clear().type('Hodzic')
    cy.get('[data-qa="company"]').clear().type('QA')
    cy.get('[data-qa="address"]').clear().type('Adresa')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').clear().type('Sarajevo')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('123456789')

    cy.get('[data-qa="create-account"]').should('be.visible').click()

    // Then
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain.text', 'Account Created!')
>>>>>>> cb3ddbef1e472494fdd050be41faa56da9bb876a
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
    cy.get('a[href="/logout"').should('be.visible').click()
    cy.get('a[href*="login"]').should('be.visible').click()
  })

  it('Login', () => {
    // When
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type('Test123')
    cy.get('[data-qa="login-button"]').should('be.visible').click()

    // Then
    cy.get('a').contains('Logged in as Aid')
    cy.get('a[href="/logout"]').should('be.visible')
  })

  it('Login unsuccesfull', () => {
    // When
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type('Test')
    cy.get('[data-qa="login-button"]').should('be.visible').click()

    // Then
    cy.get('.login-form')
      .find('p[style="color: red;"]')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect!')
  })
})