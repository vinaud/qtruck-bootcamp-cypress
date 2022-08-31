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
        cy.wait(10000)
    });
});