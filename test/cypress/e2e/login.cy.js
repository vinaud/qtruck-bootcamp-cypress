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
})

