import modal from '../Components/Modal'

class SignupPage {

    constructor() {
        this.modal = modal
    }

    go(){
        cy.visit('/signup')
    }

    form(user){
        if (user.instagram) cy.get('input[name=instagram]').clear().type(user.instagram)
        if (user.password) cy.get('input[name=password]').clear().type(user.password)
        if (user.name) cy.get('input[name=name]').clear().type(user.name)
    }

    submit(){
        cy.contains('button', 'Cadastrar').click()
    }



}

export default new SignupPage()