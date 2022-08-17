import modal from '../Components/Modal'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    go(){
        cy.visit('/')
    }

    form(user){
        if (user.instagram) cy.get('input[name=instagram]').clear().type(user.instagram)
        if (user.password) cy.get('input[name=password]').clear().type(user.password)
    }

    submit(){
        cy.contains('button', 'Entrar').click()
    }



}

export default new LoginPage()