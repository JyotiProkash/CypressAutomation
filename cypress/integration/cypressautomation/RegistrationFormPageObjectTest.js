import RegistrationFormPageObject from '../sourcepages/RegistrationFormPageObject'
describe('Student Registration Form Fillup',function(){
    it('Form fillup', function(){
        const registrationPageObject=new RegistrationFormPageObject()
        registrationPageObject.openRegistrationPage()
        registrationPageObject.enterFirstName("Test First")
        registrationPageObject.enterLastName("Test Last")
        registrationPageObject.enterAddress("101 new avenue")
        registrationPageObject.enterEmailAddress("abc@gmail.com")
        registrationPageObject.enterPhoneNo("01712345678")
        registrationPageObject.uploadPhoto("uploaded_file\\image1.jpg")
        registrationPageObject.selectGender("FeMale","FeMale")
        registrationPageObject.selectHobby("1","Cricket")
        registrationPageObject.selectLanguage("8","English")
        registrationPageObject.selectSkills("APIs")
        registrationPageObject.selectCountry("Denmark")
        registrationPageObject.selectDoB("1949","April","15")
        registrationPageObject.enterPassword("123456")
        registrationPageObject.enterConfirmPassword("123456")
        registrationPageObject.submitButton()
    })
})