describe('Student Registration Form Fillup',function(){
    it('Form fillup', function(){
        //Open site
        cy.visit(Cypress.config().baseUrl);
        //Enter User first name
        cy.get('#firstName').type("Test First")
        cy.wait(2000)
        //Enter User last name
        cy.get('#lastName').type("Test Last")
        cy.wait(2000)
        //Enter email address
        cy.get('#userEmail').type("abc@gmail.com")
        cy.wait(2000)

    })
})