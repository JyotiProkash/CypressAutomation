describe('Open Url',()=>{
    it('Test open url', ()=>{
        cy.visit(Cypress.config().baseUrl);
        cy.title().should('include','ToolsQA')  
    })
    
    // it('Test open url', ()=>{
    //     cy.visit('https://demoqa.com/automation-practice-form');
    //     cy.title().should('include','ToolsQA')  
    // })
})