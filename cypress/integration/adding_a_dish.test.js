describe('adding a list', () => {
  it('displays the dishes in the list', () => {
    const restaurantName = 'Sushi bar';
    const dishName = 'Temaki';

    const restaurantName2= 'Burguer Place';
    const dishName2 = 'Big Place Burguer';

    cy.visit('/');

    modalSaveTheRestaurant(restaurantName);
    modalIsNotVisible();
    goToRestaurantPage(restaurantName);
    modalAllowAddingDishes(dishName);
    dishesRetainedWhenLeavingPage(restaurantName, dishName);
    dishesStorePerRestaurante(restaurantName2, dishName, dishName2);
  });

  function modalSaveTheRestaurant(restaurantName) {
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

  function dishesRetainedWhenLeavingPage(restaurantName, dishName) {
    cy.get('[data-testid=backButton]').click();
    cy.contains(restaurantName).click();
    cy.contains(dishName);
    cy.get('[data-testid=backButton]').click();
  }

  function dishesStorePerRestaurante(restaurantName, absentDishName, dishName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    cy.contains(restaurantName).click();
    cy.contains(absentDishName).should('not.exist');
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishButton"]').click();
    cy.contains(dishName);
    cy.get('[data-testid=backButton]').click();
  }
});
