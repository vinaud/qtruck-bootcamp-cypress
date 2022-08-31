import modal from '../Components/Modal'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    go(lat = '-5.8112867' ,  long = '-35.2084134'){
        cy.visit('/', this.mockLocation(lat, long))
    }

    form(user){
        if (user.instagram) cy.get('input[name=instagram]').clear().type(user.instagram)
        if (user.password) cy.get('input[name=password]').clear().type(user.password)
    }

    submit(){
        cy.contains('button', 'Entrar').click()
    }

    mockLocation(latitude, longitude){
        return{
            onBeforeLoad(win){
                cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) =>{
                    if(latitude && longitude){
                        return cb({coords: {latitude, longitude}})
                    }
                    else{
                        throw err({code: 1})
                    }
                })
            }
        }
    }
}  


export default new LoginPage()