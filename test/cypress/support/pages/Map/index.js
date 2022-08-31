

class MapPage{

    loggedUser(name){

        const firstName = name.split(' ')
        cy.get('.logged-user').should('be.visible').should('have.text', `Olá, ${firstName[0]}`)
    }

    createLink(){
        cy.get('a[href="/foodtrucks/create"]').should('be.visible').click()
    }
}

export default new MapPage()