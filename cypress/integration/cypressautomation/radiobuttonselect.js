describe('Test Radio Button', function(){
    it('Test radio button selection ', function(){
        cy.visit(Cypress.config().baseUrl);
        //Select radio button
        cy.get('input[value="Female"]').check({force: true}).should('have.value','Female')

    })
})