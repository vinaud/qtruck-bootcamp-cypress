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

    it('não deve cadastrar foodtruck com o nome duplicado', () => {
        const user = {
            instagram: '@sanji',
            password: 'pwd123',
            name: 'Sanji'
        }

        const foodtruck = {
            name: 'Baratie',
            details: 'A melhor comida de todo o East Blue',
            opening_hours: 'das 18 às 0h',
            latitude: '-5.8112867',
            longitude: '-35.2084129',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        cy.uiLogin(user)
        
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')
    });

    it('todos os campos são obrigatórios', () => {
        
        const user = {
            instagram: '@heisenberg',
            password: 'pwd123',
            name: 'Heisenberg'
        }

        const foodtruck = {
            latitude: '-5.8112867',
            longitude: '-35.2084129',
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()
        createPage.modal.haveText('Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!')
    });
});