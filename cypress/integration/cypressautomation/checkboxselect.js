describe('Test Checkbox', function(){
    it('Test checkbox when it is unchecked', function(){
        cy.visit(Cypress.config().baseUrl);
        //Select checkbox
        cy.get('#hobbies-checkbox-1').check({force: true}).should('be.checked').and('have.value','1')
       // Unselect checkbox
       cy.get('#hobbies-checkbox-1').uncheck({force: true}).should('not.be.checked')

    })
})