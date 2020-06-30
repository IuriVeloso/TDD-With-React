import React from 'react';
import { render, wait, fireEvent, cleanup, act } from 'react-testing-library';

import NewRestaurantForm from 'components/RestaurantListPage/NewRestaurantForm';
import "materialize-css/dist/js/materialize.min.js";

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let getByTestId;

    beforeEach(() => {
      saveHandler = jest.fn();

      ({ getByTestId } = render(<NewRestaurantForm onSave={saveHandler} />));

      fireEvent.change(
        getByTestId('newRestaurantName'),
        {
          target: {
            id: 'inputText',
            value: 'Sushi Place',
          },
        },
      );

      fireEvent.click(getByTestId('saveNewRestaurantButton'));
      return wait();
    });

    afterEach(cleanup);

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });

    it('clears the text field', () => {
      expect(getByTestId('newRestaurantName').value).toEqual('');
    });
  });
});
