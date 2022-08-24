/// <reference types="Cypress" />
import mapPage from '../support/pages/Map'

describe('Recomendação', () => {
    it('deve recomendar um foodtruck', () => {

        const user = {
            instagram: '@kiko',
            password: 'pwd123',
            name: 'Kiko'
        }

        const foodtruck = {
            name: 'Tienda del Chavo',
            description: 'O melhor lugar pra tomar o suco de limão, que parece groselha, mas tem gosto de tamarindo',
            opening_hours: 'das 14 às 20h'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        cy.wait(3000)

        mapPage.createLink()


    })
});