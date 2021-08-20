describe('Test Dropdown',()=>{
    it('Test select dropdown', ()=>{
        cy.visit(Cypress.config().baseUrl);

        // Enter value into input field
        cy.get('#firstName').type('Jyoti Prokash') 
        cy.get('#lastName').type('Mondal')
        cy.get('#userEmail').type('abc@yahoo.com')

    })
    

})