///<reference types="Cypress"/>


describe('todo tests',function(){

    beforeEach(function(){
        cy.visit("http://localhost:3000/")
    })

    it("goto todos app", function(){
        cy.get("input").should("exist");
        cy.get(".addtodo").should("exist");
    });

    it("should type in inputbox",function(){
        cy.get("input").type("Learn React").should("have.value","Learn React")
    });

    it("todo should get added",function(){
        cy.get("input").type("Learn React",{delay:300}).should("have.value","Learn React")
        cy.get("button").click();
        cy.get(".todoitems").should("have.length",1);
        cy.get("input").clear()

        cy.get("input").type("Learn Vue",{delay:300}).should("have.value","Learn Vue")
        cy.get("button").click();
        cy.get(".todoitems").should("have.length",2);
        cy.get("input").clear()
    });

    it("mock server",function(){
        cy.intercept("GET","/users",{username:"Masai"})
        cy.request("/users").then(({body})=>{
            expect(body.username).to.eq("Masai");
        });
    });


})