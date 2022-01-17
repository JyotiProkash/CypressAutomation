class RegistrationFormPageObject
{
     openRegistrationPage()
      {
        //Open site
        cy.visit(Cypress.config().baseUrl);
        cy.wait(5000)
      }
     //(Test First)
     enterFirstName(fName)
      {
        //Enter User first name -> Input Field
        const fNameField=cy.get("input[ng-model='FirstName']")
        fNameField.clear()
        fNameField.type(fName) 
        return this  
      }
     //(Test Last) 
     enterLastName(lName)
      {
        //Enter User last name -> Input Field
        const lNameField=cy.get("input[ng-model='LastName']").type("Test Last")
        lNameField.clear()
        lNameField.type(lName)   
        return this
      }
     // (101 new avenue) 
     enterAddress(address)
      {
        //Enter address -> Text Field
        const addressField=cy.get("textarea[ng-model='Adress']")
        addressField.clear()
        addressField.type(address)   
        return this
      }
     //(abc@gmail.com) 
     enterEmailAddress(emailAddress)
      {
        //Enter email address -> Input Field
        const emailAddressField=cy.get("input[ng-model='EmailAdress']")
        emailAddressField.clear()
        emailAddressField.type(emailAddress)   
        return this
      }
     //(01712345678) 
     enterPhoneNo(phone)
      {
        //Enter phone number -> Input Field
        const phoneNo=cy.get("input[ng-model='Phone']")
        phoneNo.clear()
        phoneNo.type(phone)   
        return this
      }
    //(uploaded_file\\image1.jpg)  
    uploadPhoto(photo)
      {
        //Photo upload -> Picture Upload Field
        //const filePath="uploaded_file\\image1.jpg"
        cy.get("input#imagesrc").attachFile(photo)
        cy.wait(2000)   
        return this
      }
    // (FeMale,FeMale) 
    selectGender(radioButtonNo, gender)
      {
        //Select radio button -> Radio Button
        let text1 = "input[value="
        let text2=radioButtonNo
        let text3="]"
        let locatorRadioButton=text1.concat(text2,text3)
        cy.get(locatorRadioButton).check().should('have.value',gender)
        cy.wait(2000) 
        return this
      }
     //(1,Cricket) 
     selectHobby(checkboxNo, hobby)
      {
        //Select checkbox -> Checkbox
        let text1 = "#checkbox"
        let locatorCheckbox=text1.concat(checkboxNo)
        cy.get(locatorCheckbox).check().should('be.checked').and('have.value',hobby)
        cy.wait(2000) 
        return this
      }
     //(8,English) 
    selectLanguage(langPos, language)
     {
        //Select Language -> List
        cy.get("div#msdd").click()
        cy.wait(2000)
        cy.get("div.col-md-4.col-xs-4.col-sm-4>multi-select >div >ul>li:nth-of-type("+langPos+")").click()
        cy.wait(2000)
        cy.get("form#basicBootstrapForm>div:nth-of-type(7)>label").click()
        cy.wait(2000)
        cy.get("div.ui-autocomplete-multiselect-item").should('have.text',language)
        return this
     }
    //(APIs) 
    selectSkills(skills)
     {
       //Select skills -> Dropdown
       cy.get("select#Skills").select(skills).should("have.value",skills)
       return this
     }
    //(Denmark) 
    selectCountry(country)
     {
       //Select Country -> Dropdown
       cy.get("select#country").select(country,{force: true})
       cy.get("span#select2-country-container").should("have.text",country)
       cy.wait(2000)
       return this
     }
    //(1949,April,15) 
    selectDoB(year,month,day)
     {
       //Select Year -> Dropdown
       cy.get("select#yearbox").select(year).should("have.value",year)
       //Select Month -> Dropdown
       cy.get("select[ng-model='monthbox']").select(month).should("have.value",month)
       //Select Day -> Dropdown
       cy.get("select#daybox").select(day).should("have.value",day)
       cy.wait(2000)
       return this
     }
    //(123456)
     enterPassword(password)
     {
       //Enter Confirm Password -> Input Field
       cy.get("input#firstpassword").type(password)
       return this
     }
    //(123456)
    enterConfirmPassword(confPassword)
     {
       //Enter Confirm Password -> Input Field
       cy.get("input#secondpassword").type(confPassword)
       return this
     }
    submitButton()
     {
       //Submit button -> Button
       cy.get("button#submitbtn").click()
     }                      
}

export default RegistrationFormPageObject 
