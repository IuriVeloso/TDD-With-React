import api from '../api';

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

export const addRestaurant = (name) => (dispatch) => {
  const restaurant = {
    type: 'restaurants',
    id: 26,
    attributes: {
      name,
    },
  } ;

  dispatch({
    type: ADD_RESTAURANT,
    restaurant,
  });

  return api.post('/restaurants', restaurant);
};
