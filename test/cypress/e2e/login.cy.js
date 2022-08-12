/// <reference types="Cypress" />

describe('Login', () => {
  it('deve logar com sucesso', () => {

    const user ={
      instagram: '@vinaud',
      password: 'pwd123',
      name: 'Joao'
    }
    cy.login(user)

    cy.loggedUser(user.name)
    
  })

  it('não deve logar com senha incorreta', () =>{
    const user ={
      instagram: '@vinaud',
      password: '123456',
    }

    cy.login(user)

    cy.modalHaveText('Credenciais inválidas, tente novamente!')
    
  })

  it('não deve logar com instagram inexistente', () =>{
    const user ={
      instagram: '@vvvvinaud',
      password: 'pwd123',
    }

    cy.login(user)

    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  context('Validação dos campos obrigatórios', () =>{

    it('não deve logar sem preencher o campo do instagram', () =>{

      const user ={
        instagram: '',
        password: 'pwd123',
      }

      cy.visit('/')
      cy.get('input[name=instagram]').clear()
      cy.get('input[name=password]').type(user.password)
      cy.contains('button', 'Entrar').click()

      cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  
    })
    
    it('não deve logar sem preencher o campo de senha', () =>{

      const user ={
        instagram: '@vinaud',
        password: '',
      }
      
      cy.visit('/')
      cy.get('input[name=instagram]').type(user.instagram)
      cy.get('input[name=password]').clear()
      cy.contains('button', 'Entrar').click()

      cy.modalHaveText('Por favor, informe a sua senha secreta!')
      
    })
    
    it('não deve logar sem preencher os campos necessários', () =>{

      cy.visit('/')

      cy.get('input[name=instagram]').clear()
      cy.get('input[name=password]').clear()
      cy.contains('button', 'Entrar').click()

      cy.modalHaveText('Por favor, informe suas credenciais!')
    })
  })
})



