describe('adding a restaurant', () => {
  it('displays the restaurant list', () => {
    const restaurantName = 'Sushi Place';

    cy.visit('http://localhost:1234');

    cy.get('input[data-test="newRestaurantName"]').should('not.is.visible');

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('input[data-test="newRestaurantName"]').should('not.is.visible');

    cy.contains(restaurantName);
  });
});
