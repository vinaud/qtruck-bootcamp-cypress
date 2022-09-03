class FoodtruckPage {
    addReview(review){
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value=${review.stars}]`).click({force:true})

        cy.contains('button', 'Enviar avaliação').click()
    }


    //Desafio Bootcamp começa aqui

    showReview(review, user){
        cy.contains('h3', 'Avaliações recentes').should('be.visible')
        cy.contains('strong', user.name).should('be.visible')
        cy.contains('span', user.instagram).should('be.visible')
        cy.contains('p', review.comment).should('be.visible')
        cy.get(`img[alt="${user.name}"`).should('be.visible')
        cy.contains('span', user.instagram)
            .parent().parent().siblings()
            .find('svg[xmlns="http://www.w3.org/2000/svg"]').should('be.visible').should('have.length', review.stars)
    }

    //Desafio Bootcamp termina aqui
}

export default new FoodtruckPage()