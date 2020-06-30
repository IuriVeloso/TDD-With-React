import React from 'react';
import { mount } from 'cypress-react-unit-test';
import NewRestaurantForm from '../../../src/components/RestaurantListPage/NewRestaurantForm';

describe('New Restaurant Form', () => {
  describe('clicking the save button', () => {
    const restaurantName = 'Sushi Place';
    let saveHandler;
    beforeEach(() => {
      saveHandler= cy.spy();

      mount(<NewRestaurantForm onSave={saveHandler}/>);

      cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

      cy.get('[data-testid="saveNewRestaurantButton"]').click();
    });

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith(restaurantName);
    });

    it('clears the text field', () => {
      cy.get('[data-testid="newRestaurantName"]').should('have.value', '');
    });
  });
});
