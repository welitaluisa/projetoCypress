Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            email: 'testeIterasysApi@iterasys.com',
            password: '123456',
        },
    }).then(({ body }) => {
        cy.log(body.jwt);
    });
});
