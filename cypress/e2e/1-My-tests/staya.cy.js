describe('Тестирование staya', function () {
    
    it('Вход в личный кабинет', function () {
        cy.visit('https://staya.dog/');
        cy.get('.Dec2022FamilyDelivertyPromo__closeButton').click(); //сначала закрываем рекламный баннер
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('del-evgenij-anisimov@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('SLdj987dKJH@#');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
     })
})
