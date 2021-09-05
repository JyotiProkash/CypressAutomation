describe('Test Dropdown',()=>{
    
    // Code for Select dropdown
    it('Test select dropdown', ()=>{
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/');
        cy.get('#Form_submitForm_Country').select('Algeria').should('have.value','Algeria')
    })
    
    // it('Test open url', ()=>{
    //     cy.visit('https://demoqa.com/automation-practice-form');
    //     cy.title().should('include','ToolsQA')  
    // })
})