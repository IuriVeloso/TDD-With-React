import dishes from 'store/dishes/reducer';
import { ADD_DISH } from 'store/dishes/actions';

describe('dishes reducer', () => {
  describe('dishes/ADD_DISH', () => {
    it('adds a dish for the specified restaurant', () => {
      const state = {};

      const restaurantName = 'SushiRao';
      const dishName= 'Temaki';

      const result = dishes(state, {
        type: ADD_DISH,
        restaurantName,
        dishName,
      });

      expect(result[restaurantName]).toEqual([dishName]);
    });
  });
});
