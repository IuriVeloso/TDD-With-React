export const ADD_RESTAURANT = 'restaurants/ADD_RESTAURANTS';

export const addRestaurant = (name) => {
  return {
    type: ADD_RESTAURANT,
    name,
  };
};
