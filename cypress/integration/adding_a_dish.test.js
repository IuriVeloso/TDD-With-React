describe.skip('adding a list', () => {
  it('displays the dishes in the list', () => {
    const restaurantName = 'Sushi bar';
    const dishName = 'Temaki';

    cy.visit('http://localhost:1234');

    modalSaveTheInput(restaurantName);
    modalIsNotVisible();
    goToRestaurantPage(restaurantName);
    modalAllowAddingDishes(dishName);
  });

  function modalSaveTheInput(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.contains(restaurantName);
  }

  function goToRestaurantPage(restaurantName) {
    cy.contains(restaurantName).click();
  }

  function modalIsNotVisible() {
    cy.get('input[data-testid="newRestaurantName"]').should('not.is.visible');
  }

  function modalAllowAddingDishes(dishName) {
    cy.get('[data-testid="addDishButton"]').click();

    cy.get('[data-testid="newDishName"]').type(dishName);

    cy.get('[data-testid="saveNewDishButton"]').click();

    cy.get('[data-testid="newDishName"]').should('not.is.visible');

    cy.contains(dishName);
  }
});
