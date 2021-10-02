Given(/^que eu acesso o site$/, () => {
	cy.visit('/')
});


When(/^informar os valores "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)"$/, (valor1,valor2,valor3,valor4) => {
	cy.get('[data-component="first"]').contains(valor1).type('vania');
    cy.get('[data-component="last"]').contains(valor2).type('santos');
    cy.get('[data-component="textbox"]').contains(valor3).type('12345678910');
    cy.get('[data-component="email"]').contains(valor4).type('vania@gmail.com');
});


Then(/^finalizar o cadastro$/, () => {
	cy.get('#input_2').click();
});
