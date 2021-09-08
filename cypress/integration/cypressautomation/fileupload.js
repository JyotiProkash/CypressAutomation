describe('File Upload',()=>{
    it('Test file upload', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('include','ToolsQA')  

        const filePath="uploaded_file\\image1.jpg"
        cy.get('#uploadPicture').attachFile(filePath)
        cy.wait(8000)

    })
    
})