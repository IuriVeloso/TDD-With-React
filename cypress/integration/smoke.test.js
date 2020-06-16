describe('Smoke Test', () => {
    it('Makes sure the message appears', ()=>{
        cy.visit('http://localhost:1234')
        .contains('Hello')
    });
});