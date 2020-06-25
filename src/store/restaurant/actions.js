import api from '../api';
import restaurants from './reducer';

export const ADD_RESTAURANT = 'restaurants/ADD_RESTAURANTS';
export const STORE_RESTAURANTS = 'restaurants/STORE_RESTAURANTS';

export const loadRestaurants = () => (dispatch) => {
  return api.get('/restaurants')
    .then(response => {
      const restaurants = response.data;
      dispatch({
        type: STORE_RESTAURANTS,
        restaurants,
      });
    });
};

export const addRestaurant = (name) => {
  const restaurant = {
    type: 'restaurants',
    id: Math.floor(Math.random() * 100),
    attributes: {
      name,
    },
  };
  console.log(restaurant);
  return {
    type: ADD_RESTAURANT,
    restaurant,
  };
};
