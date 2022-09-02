import mapPage from '../support/pages/Map'

describe('Avaliações', () => {
    it('deve enviar uma nova avaliação', () => {
        const user = {
            name: 'Seu Madruga',
            instagram: '@madruga',
            password: 'pwd123'
        }

        const foodtruck = {
            name: 'Super de Quico',
            details: 'Sucos de alta qualidade',
            opening_hours: 'das 14 às 20h',
            latitude: '-5.8112855',
            longitude: '-35.2084134',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.goToFoodtruck(foodtruck.name)

        
        
     /* cy.get('.leaflet-marker-pane img').as('mapList')
        cy.get('@mapList').each((element, index, list) => {
            cy.get('@mapList').eq(index).click({force: true})
            cy.wait(1000)

            cy.get('.leaflet-popup-content').as('ftName')
            cy.get('@ftName').invoke('text').then((txt) =>{
                cy.log(txt)
                if(txt == foodtruck.name){
                    cy.get('@ftName').find('a').click()
                    return false
                }
            })
        }) */
    });
});