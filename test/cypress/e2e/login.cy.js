/// <reference types="Cypress" />

import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {

  before(() => {
    cy.fixture('login-users').then(function(users){
      this.users = users
    })
  });
  it('deve logar com sucesso', function() {

    const user = this.users.success
    cy.apiCreateUser(user)

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
    
  })

  it('não deve logar com senha incorreta', () =>{
    const user ={
      instagram: '@vinaud',
      password: '123456',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    
  })

  it('não deve logar com instagram inexistente', () =>{
    const user ={
      instagram: '@vvvvinaud',
      password: 'pwd123',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  context('Validação dos campos obrigatórios', () =>{

    it('não deve logar sem preencher o campo do instagram', () =>{

      const user ={
        instagram: '',
        password: 'pwd123',
      }

      loginPage.go()
      loginPage.form(user)
      loginPage.submit()

      loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  
    })
    
    it('não deve logar sem preencher o campo de senha', () =>{

      const user ={
        instagram: '@vinaud',
        password: '',
      }
      
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()

      loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
      
    })
    
    it('não deve logar sem preencher os campos necessários', () =>{

      const user ={
        instagram: '',
        password: '',
      }

      loginPage.go()
      loginPage.form(user)
      loginPage.submit()

      loginPage.modal.haveText('Por favor, informe suas credenciais!')
    })
  })
})



