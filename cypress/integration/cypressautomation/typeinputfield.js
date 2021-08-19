describe('Test Dropdown',()=>{
    it('Test select dropdown', ()=>{
        cy.visit(Cypress.config().baseUrl);
        cy.title().should('include','ToolsQAs')  
    })
    
    // it('Test open url', ()=>{
    //     cy.visit('https://demoqa.com/automation-practice-form');
    //     cy.title().should('include','ToolsQA')  
    // })
})