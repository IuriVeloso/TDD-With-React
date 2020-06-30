import {
  STORE_RESTAURANTS,
  ADD_RESTAURANT,
  addRestaurant,
  loadRestaurants,
} from 'store/restaurant/actions';

import api from 'store/api';
import restaurants from 'store/restaurant/reducer';

jest.mock('store/api');

describe('restaurant actions', () => {
  describe('loadRestaurants', () => {
    it('store restaurants retrieved from the api', () => {
      const restaurants = [
        {
          type: 'restaurants',
          id: '1',
          attributes: {
            name: 'Sushi Place',
          },
        }, {
          type: 'restaurants',
          id: '2',
          attributes: {
            name: 'Burguer Place',
          },
        },
      ];

      const dispatch = jest.fn();

      api.get.mockResolvedValue({
        data: restaurants,
      });

      return loadRestaurants()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith({
            type: STORE_RESTAURANTS,
            restaurants,
          });
        });
    });
  });

  describe('addRestaurants', () => {
    let dispatch;
    const name = 'Sushi Place';

    const restaurant = {
      type: 'restaurants',
      id: 26,
      attributes: {
        name,
      },
    };
    beforeEach(() => {
      dispatch = jest.fn();

      return addRestaurant(name)(dispatch);
    });
    it('sends the new restaurant to the server', () => {
      expect(api.post).toHaveBeenCalledWith('/restaurants', restaurant);
    });
    it('inserts the new restaurant in the state', () => {
      expect(dispatch).toHaveBeenCalledWith({
        type: ADD_RESTAURANT,
        restaurant,
      });
    });
  });
});
