describe('adding a restaurant', () => {
  it('displays the restaurant list', () => {
    // enter the page

    cy.visit('http://localhost:1234');

    modalIsNotVisible();
    modalOpenClose();
    modalDisplayErrors();
    modalClearsErrorsOnClose();
    modalSaveTheInput();

    // check if the modal is not showing after save

    cy.get('input[data-testid="newRestaurantName"]').should('not.is.visible');
  });

  function modalIsNotVisible() {
    cy.get('input[data-testid="newRestaurantName"]').should('not.is.visible');
  }

  function modalOpenClose() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="closeModalButton"]').click();

    cy.get('input[data-testid="newRestaurantName"]').should('not.is.visible');
  }

  function modalDisplayErrors() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('span[data-error="Cant be blank!"]').should('is.visible');

    cy.get('[data-testid="closeModalButton"]').click();
  }

  function modalClearsErrorsOnClose() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('span[data-error="Cant be blank!"]').should('not.is.visible');

    cy.get('[data-testid="closeModalButton"]').click();
  }

  function modalSaveTheInput() {
    const restaurantName = 'Sushi Place';

    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.contains(restaurantName);
  }
});
