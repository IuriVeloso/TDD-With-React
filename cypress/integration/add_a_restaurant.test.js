describe('adding a restaurant', () => {
  it('displays the restaurant list', () => {
    const restaurantName = 'Sushi Place';

    // enter the page

    cy.visit('http://localhost:1234');

    // check if the modal isnt visible

    cy.get('input[data-test="newRestaurantName"]').should('not.is.visible');

    // open the modal and close it

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="addRestaurantModal"] div.modal-footer button.modal-close').click();

    cy.get('input[data-test="newRestaurantName"]').should('not.is.visible');

    // modal displays errors

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('label[for="inputText"][data-error="Cant be blank!"]').should('is.visible');

    cy.get('[data-test="addRestaurantModal"] div.modal-footer button.modal-close').click();

    // open the modal and type something and save it

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    // check if the modal is not showing after save

    cy.get('input[data-test="newRestaurantName"]').should('not.is.visible');

    cy.contains(restaurantName);
  });
});
