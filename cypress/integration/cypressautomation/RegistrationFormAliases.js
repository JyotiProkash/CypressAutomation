describe('Student Registration Form Fillup',function(){
    it('Form fillup', function(){
        //Open site
        cy.visit(Cypress.config().baseUrl);
        cy.wait(5000)
        //Using form 
        cy.get('form').within(($form)=>{
        //Enter User first name -> Input Field
        cy.get("input[ng-model='FirstName']").as('firstName')
        cy.get('@firstName').type("Test First")
        //Enter User last name -> Input Field
        cy.get("input[ng-model='LastName']").as('lastName')
        cy.get('@lastName').type("Test Last")
        //Enter address -> Text Field
        cy.get("textarea[ng-model='Adress']").as('emailAddress')
        cy.get('@emailAddress').type("101 North Avenue")
        // //Enter email address -> Input Field
        cy.get("input[ng-model='EmailAdress']").type("abc@gmail.com")
        //Enter phone number -> Input Field
        cy.get("input[ng-model='Phone']").type("01712345678")
        cy.wait(2000)
        //Select radio button -> Radio Button
        cy.get('input[value="FeMale"]').check().should('have.value','FeMale')
        cy.wait(2000)
        //Select checkbox -> Checkbox
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.wait(2000)
        //Select Language -> List
        cy.get("div#msdd").click()
        cy.wait(2000)
        cy.get("div.col-md-4.col-xs-4.col-sm-4>multi-select >div >ul>li:nth-of-type(8)").click()
        cy.wait(2000)
        cy.get("div:nth-of-type(7)>label").contains("Languages").click()
        cy.wait(2000)
        cy.get("div.ui-autocomplete-multiselect-item").should('have.text','English')
        //Select skills -> Dropdown
        cy.get("select#Skills").select("APIs").should("have.value","APIs")
        //Select Country -> Dropdown
        cy.get("select#country").select("Denmark",{force: true})
        cy.get("span#select2-country-container").should("have.text","Denmark")
        cy.wait(2000)
        //Select Year -> Dropdown
        cy.get("select#yearbox").select("1994").should("have.value","1994")
        //Select Month -> Dropdown
        cy.get("select[ng-model='monthbox']").select("April").should("have.value","April")
        //Select Day -> Dropdown
        cy.get("select#daybox").select("15").should("have.value","15")
        cy.wait(2000)
        //Enter Confirm Password -> Input Field
        cy.get("input#firstpassword").type("123456")
        //Enter Confirm Password -> Input Field
        cy.get("input#secondpassword").type("123456")
        //Submit button -> Button
        //cy.get("button#submitbtn").click()
    })
        //Photo upload -> Picture Upload Field
        cy.wait(2000)
        const filePath="uploaded_file\\image1.jpg"
        cy.get("input#imagesrc").attachFile(filePath)
        cy.wait(2000)
        
        cy.get('form').within(($form)=>{
            cy.get("button#submitbtn").click()
        })
    })
})