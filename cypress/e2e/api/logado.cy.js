describe('API - Posts', () => {
    
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'))

    })

  
    after(() => {
        cy.log('Limpando os cookies')
        Cypress.Cookies.defaults({
            preserve:[]
        })
    })
    it('valida todos os posts 2', () => {
            
        cy.request({
            method: 'GET',
            url: '/api/posts'
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('valida todos os posts 3', () => {
            
        cy.request({
            method: 'GET',
            url: '/api/posts'
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

           
})
