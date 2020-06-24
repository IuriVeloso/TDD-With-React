import { STORE_RESTAURANTS, loadRestaurants } from '../../../../src/store/restaurant/actions';
import api from '../../../../src/store/api';
jest.mock('../../../../src/store/api');

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
});
