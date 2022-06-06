/// <reference types="cypress" />

describe('Teste loco', () => {

    it('Depositando valor na conta da hermione',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.btn-primary').first().click();
        cy.get('#userSelect').select(1);
        cy.get('.btn-default').click();
        cy.get('.btn-lg').eq(1).click();
        cy.get('.form-control').type('12');
        cy.get('.btn-default').click();
    })

    it('Tentando sacar dinheiro do Harry',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.btn-primary').first().click();
        cy.get('#userSelect').select(2);
        cy.get('.btn-default').click();
        cy.get('.btn-lg').eq(2).click();
        cy.get('.form-control').type('50000');
        cy.get('.btn-default').click();
        cy.get('.error').should('contain.text', 'Transaction Failed');
    })

    it('Cadastrando um novo cliente',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.btn-primary').eq(1).click();
        cy.wait(2000);
        cy.get('.btn-lg').eq(0).click();
        var textoTeste = criandoCliente()
        cy.get("button[type=submit]").click();
        cy.get('.btn-lg').eq(2).click();

    })
});

function criandoCliente() {

    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();
    let nome = hours + ':' + minutes + ':' + sec + 'USUARIO';
    let sobrenome = hours + ':' + minutes + ':' + sec + 'SENHA';
    let num = hours + ':' + minutes + ':' + sec;

    cy.get('.form-control').eq(0).type(nome);
    cy.get('.form-control').eq(1).type(sobrenome);
    cy.get('.form-control').eq(2).type(num);
    cy.get('.btn-default').click();
    cy.get('.btn-lg').eq(1).click();
    cy.get('#userSelect').eq(0).select(6);
    cy.get('#currency').select(1);
}