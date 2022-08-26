/// <reference types="Cypress" />
import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {
    it('deve recomendar um foodtruck', () => {

        const user = {
            instagram: '@kiko',
            password: 'pwd123',
            name: 'Kiko'
        }

        const foodtruck = {
            name: 'Tienda del Chavo',
            details: 'O melhor lugar pra tomar o suco de limão, que parece groselha, mas tem gosto de tamarindo',
            opening_hours: 'das 14 às 20h',
            latitude: '-5.8112867',
            longitude: '-35.2084129',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()

        createPage.form(foodtruck)
        createPage.submit()
       
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })
});