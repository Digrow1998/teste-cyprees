describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br')
  
cy.get('.mburger').click()


cy.get('#txtLoginNaoLogadoMob').click()

cy.get('#login-email').type('digrow.cardoso@gmail.com')
cy.get('#login-password').type('Juliano1998*')
cy.get('#btnLoginHeader').click()

})

})