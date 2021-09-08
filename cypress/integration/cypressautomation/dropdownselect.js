const { find } = require("lodash")

describe('Test Dropdown',()=>{
    
    // Code for Select dropdown
    it.skip('Test select dropdown', ()=>{
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
        cy.get('#Form_submitForm_Country').select('Algeria').should('have.value','Algeria')
    })

    // Code for Select item from suggestion
    it.skip('Test item selection from suggestion', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('cypress')
        cy.wait(3000)
        cy.get('.erkvQe').find('li span').contains('Cypress Vine').click()
    })

    // Code for Auto complete item from dropdown
    it.skip('Test auto complete item from dropdown', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('div[id="state"]').type("Harya{downarrow}{enter}").focused()
        cy.wait(3000)
        cy.get('div[id="city"]').type("Noida{downarrow}{enter}").focused()
    })

    // Code for multiple select dropdown
    it('Test multiple items select from dropdown', ()=>{
        cy.visit('https://ej2.syncfusion.com/demos/#/material/multi-select/default.html')
        /*cy.get('span.e-searcher>input[aria-labelledby="chip_default_1"]').click()
        cy.wait(3000)
        cy.get('span.e-searcher>input[aria-labelledby="chip_default_1').type('Badmin{enter}')
        //cy.get('span.e-chipcontent').contains('Badminton').should('have.text','Badminton')
        cy.wait(3000)
        cy.get('span.e-searcher>input[aria-labelledby="chip_default_1"]').click()
        cy.get('span.e-searcher>input[aria-labelledby="chip_default_1').type('Crick{enter}')
        cy.wait(3000)
        cy.get('span.e-searcher>input[aria-labelledby="chip_default_1"]').click()
        cy.get('span.e-searcher>input[aria-labelledby="chip_default_1').type('Footba{enter}')
        cy.wait(3000)*/

        //Alternative code for  multiple select dropdown
        const sports = ["Badmin", "Crick", "Footba"];
        for(let i=0;i<sports.length;i++)
          {
            cy.get('span.e-searcher>input[aria-labelledby="chip_default_1"]').click()
            cy.wait(3000)
            cy.get('span.e-searcher>input[aria-labelledby="chip_default_1').type(sports[i]+'{enter}')

          }

    })
    
})