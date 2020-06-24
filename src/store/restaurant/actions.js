import api from '../api';

export const ADD_RESTAURANT = 'restaurants/ADD_RESTAURANTS';
export const STORE_RESTAURANTS = 'restaurants/STORE_RESTAURANTS';

export const loadRestaurants = () => (dispatch) => {
  return api.get('/restaurants')
    .then(response => {
      const restaurants = response.data;
      console.log(restaurants);
      dispatch({
        type: STORE_RESTAURANTS,
        restaurants,
      });
    });
};

export const addRestaurant = (name) => {
  return {
    type: ADD_RESTAURANT,
    name,
  };
};
