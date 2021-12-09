///<reference types="Cypress"/>


describe('todo tests',function(){
    it("goto todos app", function(){
        cy.visit("http://localhost:3000/")
    });
})