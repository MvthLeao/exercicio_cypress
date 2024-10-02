/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it("inclusão de contato", () => {
        cy.get('input[type="text"]').type('Matheus Leão')
        cy.get('input[type="email"]').type('matheus@teste.com')
        cy.get('input[type="tel"]').type('(11) 1234-5678')
        cy.get(".adicionar").click()
        cy.screenshot("teste01");
    });

    it("Alteração de contato", () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type("Alterado por Cypress")
        cy.get('.alterar').click()
        cy.screenshot("teste02");
    });

    it("Remoção de contato", () => {
        cy.get(":nth-child(4) > .sc-gueYoa > .delete").click()
        cy.screenshot("teste03");
    })
})