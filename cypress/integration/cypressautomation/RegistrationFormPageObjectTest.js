import RegistrationFormPageObject from '../sourcepages/RegistrationFormPageObject'
describe('Student Registration Form Fillup',function(){
    before(function(){
        cy.fixture('./dataDriven/registrationData.json').then(function(data){
        this.data=data;

        })
    })
    it('Form fillup', function(){
        const registrationPageObject=new RegistrationFormPageObject()
        registrationPageObject.openRegistrationPage()
        registrationPageObject.enterFirstName(this.data.firstName)
        registrationPageObject.enterLastName(this.data.lastName)
        registrationPageObject.enterAddress(this.data.address)
        registrationPageObject.enterEmailAddress(this.data.emailAddress)
        registrationPageObject.enterPhoneNo(this.data.phoneNo)
        registrationPageObject.uploadPhoto(this.data.photoPath)
        registrationPageObject.selectGender(this.data.gender[0],this.data.gender[1])
        registrationPageObject.selectHobby(this.data.hobby[0],this.data.hobby[1])
        registrationPageObject.selectLanguage(this.data.language[0],this.data.language[1])
        registrationPageObject.selectSkills(this.data.skills)
        registrationPageObject.selectCountry(this.data.country)
        registrationPageObject.selectDoB(this.data.doB[0],this.data.doB[1],this.data.doB[2])
        registrationPageObject.enterPassword(this.data.password)
        registrationPageObject.enterConfirmPassword(this.data.confirmPassword)
        registrationPageObject.submitButton()
    })
})